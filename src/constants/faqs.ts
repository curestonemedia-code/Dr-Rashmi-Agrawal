export type FaqItem = {
  q: string;
  a: string;
};

export type FaqCategory = {
  slug: string;
  title: string;
  relatedHref?: string;
  relatedLabel?: string;
  items: FaqItem[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    relatedHref: "/?interest=other#book",
    relatedLabel: "Book a Consultation",
    items: [
      {
        q: "When should we see a fertility specialist?",
        a: "If you are under 35 and have been trying for 12 months, or over 35 and trying for 6 months, with regular unprotected intercourse and no pregnancy. Seek evaluation sooner if you have irregular periods, known PCOS, endometriosis, previous miscarriages, or a known male factor issue.",
      },
      {
        q: "Does a fertility consultation automatically mean IVF?",
        a: "No. A large share of couples at our centre conceive with simpler treatments like ovulation tablets, timed intercourse, or IUI. IVF is recommended only when the diagnosis genuinely calls for it.",
      },
      {
        q: "Are consultations really free?",
        a: "We offer a free preliminary review of your reports via WhatsApp, and you can book a free consultation to discuss your primary treatment path directly with Dr. Rashmi.",
      },
      {
        q: "Can we consult online before visiting Gurugram?",
        a: "Yes. WhatsApp your reports to +91 98117 75369 for a preliminary review, and we can arrange a video consultation. Many outstation couples plan their entire protocol remotely and travel only for essential visits.",
      },
    ],
  },
  {
    slug: "treatments-and-diagnostics",
    title: "Treatments and Diagnostics",
    relatedHref: "/treatments",
    relatedLabel: "Explore Treatments",
    items: [
      {
        q: "What is the difference between IVF and ICSI?",
        a: "In IVF, thousands of sperm are placed around each egg. In ICSI, a single sperm is injected directly into the egg. ICSI is standard when sperm numbers or quality are very low.",
      },
      {
        q: "How much does IVF cost at your centre?",
        a: "Cost depends on your specific protocol and whether add ons like ICSI, freezing, or genetic testing are needed. You receive a written, itemised estimate before starting, so there are no mid cycle surprises.",
      },
      {
        q: "My husband has zero sperm count. Can we still have a biological child?",
        a: "Often, yes. Through Surgical Sperm Retrieval techniques like PESA, TESA, or Micro TESE, we can safely extract sperm directly from the reproductive tract to use with ICSI.",
      },
      {
        q: "What is an ERA or Endometrial Biopsy used for?",
        a: "If you have experienced repeated IVF transfer failures with good embryos, an Endometrial Biopsy or ERA helps us check for hidden inflammation and pinpoints the exact day your uterine lining is most receptive to an embryo.",
      },
      {
        q: "Are IVF injections painful?",
        a: "Much less than feared. Daily injections use fine pen devices most women self administer painlessly. Egg retrieval is done under short anaesthesia so you sleep through it.",
      },
      {
        q: "How many IUI cycles should we try before moving to IVF?",
        a: "Evidence shows most IUI successes happen within the first 3 to 4 properly monitored cycles. Beyond that, the chance per cycle drops and IVF usually becomes a much wiser investment of your time and money.",
      },
      {
        q: "Do you offer genetic testing on embryos?",
        a: "Yes. Preimplantation Genetic Testing (PGT) can screen embryos for chromosomal abnormalities before transfer, and is offered as an add-on where clinically indicated or requested.",
      },
    ],
  },
];

export const ALL_FAQS: FaqItem[] = FAQ_CATEGORIES.flatMap((category) => category.items);
