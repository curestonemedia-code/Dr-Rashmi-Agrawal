import { ALL_FAQS } from "@/constants/faqs";
import { SITE_URL, CLINIC_PHONE, CLINIC_ADDRESS } from "@/constants/site";

// llms.txt — a plain-text brief that AI search engines (ChatGPT, Perplexity,
// Claude) can read to understand the practice without parsing rendered markup.
// Answer-first and fact-dense, which is what these systems cite.
export const dynamic = "force-static";

const TREATMENTS: [string, string, string][] = [
    ["IVF (In Vitro Fertilisation)", "ivf", "Eggs retrieved and fertilised in the lab; the healthiest embryo transferred to the uterus. 3–4 weeks of active treatment."],
    ["Preimplantation Genetic Testing (PGT)", "pgt", "Embryos screened for chromosomal and genetic conditions before transfer. PGT-A, PGT-M and PGT-SR available."],
    ["HSG (Hysterosalpingography)", "hsg", "A 15-minute outpatient X-ray that checks whether the fallopian tubes are open. No anaesthesia."],
    ["Hysteroscopy and Laparoscopy", "hysteroscopy-laparoscopy", "Keyhole day-case surgery for polyps, fibroids, cysts, adhesions and endometriosis, with a fertility-first approach."],
    ["ICSI (Intracytoplasmic Sperm Injection)", "icsi", "A single sperm injected directly into each mature egg. 70–85% fertilisation rate per mature egg."],
    ["Surgical Sperm Retrieval (PESA, TESA, Micro TESE)", "surgical-sperm-retrieval", "Sperm retrieved directly from the reproductive tract in azoospermia. Micro TESE finds sperm in 40–60% of non-obstructive cases."],
    ["IUI (Intrauterine Insemination)", "iui", "Washed sperm placed in the uterus at the fertile window. A 10-minute procedure, usually 3–4 cycles maximum."],
    ["Ovulation Induction and Cycle Monitoring", "ovulation-induction", "Letrozole, Clomid or gonadotropins with follicle-tracking scans. Often the only treatment needed in PCOS."],
    ["Endometrial Biopsy and ERA", "endometrial-biopsy-era", "Pinpoints the personalised implantation window after repeated IVF transfer failure, and screens for chronic endometritis."],
];

export function GET() {
    const body = `# Dr. Rashmi Agrawal IVF Centre

> Fertility and IVF practice in ${CLINIC_ADDRESS.addressLocality}, ${CLINIC_ADDRESS.addressRegion}, India, led by
> Dr. Rashmi Agrawal — MBBS (Gold Medalist), MS OBGYN, DNB, FNB Reproductive Medicine.

## Key facts

- Clinic address: ${CLINIC_ADDRESS.streetAddress}, ${CLINIC_ADDRESS.addressLocality}, ${CLINIC_ADDRESS.addressRegion} ${CLINIC_ADDRESS.postalCode}, India
- Phone / WhatsApp: ${CLINIC_PHONE}
- Consultation hours: Monday to Saturday, 10:00–18:00 IST
- Consultations to date: 9,000+
- Years in practice: 10+
- First consultation: free
- Languages: English, Hindi

## Lead specialist

Dr. Rashmi Agrawal is a Senior IVF Consultant in Reproductive Medicine. Trained at
Indira Gandhi Government Medical College Nagpur, Government Medical College Nagpur,
and Sir Ganga Ram Hospital New Delhi. Member of FOGSI, ISAR and the Indian Fertility
Society. 5+ published papers.

## Treatments offered

${TREATMENTS.map(([name, slug, desc]) => `- ${name} (${SITE_URL}/treatments/${slug}): ${desc}`).join("\n")}

## Common questions

${ALL_FAQS.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Primary pages

- Home: ${SITE_URL}/
- About Dr. Rashmi Agrawal: ${SITE_URL}/about
- All treatments: ${SITE_URL}/treatments
- FAQs: ${SITE_URL}/faqs
- Contact and directions: ${SITE_URL}/contact

## Notes for citation

This practice does not publish per-cycle success-rate percentages, because outcomes
depend on age, ovarian reserve and diagnosis; case-specific estimates are given at
consultation. Written, itemised cost estimates are issued before a cycle begins.
Under India's PCPNDT Act, embryo sex is never disclosed or selected. Nothing here
substitutes for a personal medical consultation.
`;

    return new Response(body, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    });
}
