"use client";

import { useId, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { cleanText, normalizeIndianPhone, validateIndianPhone, validateName } from "@/utils/formValidation";

// Same Apps Script webhook and widget as BookingForm — see
// google-apps-script/Code.gs in the Cure Infertility repo. Reuses the
// already-recognised get_estimate_infertility shape (name, phone,
// consultationType, locationName) instead of inventing a new form_type the
// script doesn't know, encoding the post into consultationType.
const SCRIPT_URL = process.env.NEXT_PUBLIC_APPOINTMENT_FORM_SHEET_URL || "";
const TURNSTILE_SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAE-k3tb3q312pM13";

type FormField = "fullName" | "phone";
type FormErrors = Partial<Record<FormField, string>>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-2 text-xs font-bold text-red-600" role="alert">
      {message}
    </p>
  );
}

export default function BlogLeadForm({ postTitle, onSuccess }: { postTitle: string; onSuccess?: () => void }) {
  const idPrefix = useId();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileError, setTurnstileError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const phone = normalizeIndianPhone(formData.get("phone"));
    const name = cleanText(formData.get("fullName"));
    const honeypot = String(formData.get("website") || "");

    const nextErrors: FormErrors = {
      fullName: validateName(name),
      phone: validateIndianPhone(phone),
    };
    const activeErrors = Object.fromEntries(Object.entries(nextErrors).filter(([, message]) => message));

    if (Object.keys(activeErrors).length > 0) {
      setErrors(activeErrors);
      const firstField = Object.keys(activeErrors)[0];
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    if (!turnstileToken) {
      setTurnstileError("Please complete the verification checkbox below.");
      return;
    }

    setErrors({});
    setTurnstileError(null);
    setLoading(true);

    const data = {
      form_type: "get_estimate_infertility",
      name,
      phone,
      consultationType: `Blog enquiry — ${postTitle}`.slice(0, 150),
      locationName: postTitle,
      website: honeypot,
      turnstileToken,
    };

    if (!SCRIPT_URL) {
      console.error("NEXT_PUBLIC_APPOINTMENT_FORM_SHEET_URL is not set — form was not submitted.", data);
      alert("Sorry, this form isn't accepting submissions right now. Please call us directly.");
      setLoading(false);
      return;
    }

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
      onSuccess?.();
    } catch (error) {
      console.error("Blog lead submission error:", error);
      alert("There was a connection issue. Please check your internet and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-4 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm font-bold text-slate-900">Request received</p>
        <p className="mt-1 text-xs font-medium text-slate-500">Our coordinator will call you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" noValidate>
      <div>
        <label htmlFor={`${idPrefix}-name`} className="sr-only">
          Full name
        </label>
        <input
          id={`${idPrefix}-name`}
          name="fullName"
          required
          minLength={2}
          maxLength={80}
          type="text"
          placeholder="Your name"
          aria-invalid={Boolean(errors.fullName)}
          className={`w-full rounded-xl border bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#ef8b92] focus:bg-white ${
            errors.fullName ? "border-red-300 bg-red-50 focus:border-red-500" : "border-transparent"
          }`}
        />
        <FieldError message={errors.fullName} />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-phone`} className="sr-only">
          Phone number
        </label>
        <div className="flex">
          <span className="flex items-center rounded-l-xl border border-r-0 border-transparent bg-slate-100 px-3 text-sm font-semibold text-slate-600">
            +91
          </span>
          <input
            id={`${idPrefix}-phone`}
            name="phone"
            required
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            placeholder="10-digit mobile"
            aria-invalid={Boolean(errors.phone)}
            className={`w-full rounded-r-xl border bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 outline-none focus:border-[#ef8b92] focus:bg-white ${
              errors.phone ? "border-red-300 bg-red-50 focus:border-red-500" : "border-transparent"
            }`}
          />
        </div>
        <FieldError message={errors.phone} />
      </div>

      {/* Honeypot — hidden from real users, never tabbable. Code.gs rejects
          anything that fills it in. */}
      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input id={`${idPrefix}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <Turnstile
          siteKey={TURNSTILE_SITE_KEY}
          options={{ size: "compact" }}
          onSuccess={(token) => {
            setTurnstileToken(token);
            setTurnstileError(null);
          }}
          onExpire={() => setTurnstileToken(null)}
          onError={() => setTurnstileToken(null)}
        />
        <FieldError message={turnstileError || undefined} />
      </div>

      <button
        type="submit"
        disabled={loading || !turnstileToken}
        className="w-full rounded-xl bg-[#ef8b92] py-3.5 text-sm font-black text-white shadow-lg shadow-pink-600/20 transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Sending…" : "Get a Call Back"}
      </button>
    </form>
  );
}
