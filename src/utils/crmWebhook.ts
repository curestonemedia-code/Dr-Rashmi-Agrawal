const CRM_WEBHOOK_URL =
  "https://crm.thecurestone.com/api/webhook/website-leads?wh_token=a219235a3e0bca4bafac34581d23d4c3d64643b5e1e2eda329e9a7ff4670d57b";

// Uses the shared Cure Stone CRM's fertility-specific lead shape. Previously
// this reused thecurestone.com's bare "book_appointment" type with a
// stoneSize field hardcoded to "Not Applicable" — a copy-paste leftover from
// their kidney-stone payload shape that made every lead from this site
// indistinguishable from theirs on the backend. The "_infertility" suffix
// and dropped stoneSize field fix that; keep this identical to
// thecureinfertility.com's crmWebhook.ts (same doctor, same CRM, same
// contract — see that repo's BACKEND_FIELD_SPEC.md).
export type CrmLeadPayload = {
  form_type: "book_appointment_infertility";
  name: string;
  phone: string;
  state: string;
  /** How long the couple has been trying to conceive — this site's forms
   *  don't collect it, so callers here should pass "Not Provided". */
  tryingDuration?: string;
  consultationType: string;
  email?: string;
  description: string;
};

export type CrmLeadResponse = {
  status: string;
  patient_id?: string;
  created?: boolean;
};

let hasPreconnected = false;

/**
 * Warms the CRM origin's DNS/TCP/TLS connection ahead of time, so the retry
 * logic in sendCrmLead() below rarely has to fire — the whole reason a first
 * request can fail is that cold DNS/TLS/CORS-preflight cost, and this pays it
 * on page load instead of at submit time, where a failure surfaces to the
 * patient as "There was a connection issue."
 *
 * Call from a form's mount effect (`useEffect(() => preconnectCrm(), [])`).
 * Safe to call from multiple components — only injects the tags once.
 */
export function preconnectCrm() {
  if (hasPreconnected || typeof document === "undefined") return;
  hasPreconnected = true;

  const origin = new URL(CRM_WEBHOOK_URL).origin;
  for (const rel of ["preconnect", "dns-prefetch"]) {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = origin;
    if (rel === "preconnect") link.crossOrigin = "anonymous";
    document.head.appendChild(link);
  }
}

function postToCrm(payload: CrmLeadPayload) {
  return fetch(CRM_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(5000),
    body: JSON.stringify(payload),
  });
}

/**
 * Submits a lead to the shared Cure Stone CRM. This is the form's sole
 * backend call, so failures (network, timeout, non-2xx) are thrown for the
 * caller's own try/catch to surface to the user.
 *
 * A same-payload retry covers the cold DNS/TLS/CORS-preflight cost the
 * visitor's browser sometimes pays on the very first request to a different
 * origin than the one serving this site; only network-level failures are
 * retried, not a real 400/401 response. preconnectCrm() above exists to make
 * that retry rarely necessary in the first place.
 */
export async function sendCrmLead(payload: CrmLeadPayload): Promise<CrmLeadResponse> {
  let res: Response;
  try {
    res = await postToCrm(payload);
  } catch (firstError) {
    console.warn("CRM webhook first attempt failed, retrying once:", firstError);
    res = await postToCrm(payload);
  }

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`CRM webhook returned ${res.status}: ${body}`);
  }

  return res.json();
}
