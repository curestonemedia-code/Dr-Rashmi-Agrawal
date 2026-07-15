import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, CheckCircle2, MessageCircle, ChevronRight } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';

type TextSection = { kind: 'text'; heading: string; paragraphs: string[] };
type PointsSection = { kind: 'points'; heading: string; items: { title: string; description: string }[] };
type StepsSection = { kind: 'steps'; heading: string; items: { step: string; title: string; description: string }[] };
type CostSection = { kind: 'cost'; heading: string; paragraph: string };
type Section = TextSection | PointsSection | StepsSection | CostSection;
type HeroStat = { label: string; value: string; unit?: string };

interface TreatmentEntry {
    eyebrow: string;
    title: string;
    seo: { title: string; description: string };
    heroDesc: string;
    heroStats: HeroStat[];
    videoId: string;
    sections: Section[];
    benefits: string[];
    faq: { q: string; a: string }[];
    cta: { heading: string; paragraph: string; primary: string; secondary?: string };
}

const treatmentData: Record<string, TreatmentEntry> = {
    'ivf': {
        eyebrow: 'In Vitro Fertilisation',
        title: 'IVF, done with total transparency.',
        seo: {
            title: 'IVF Treatment in Gurgaon',
            description: 'IVF (in vitro fertilisation) in Gurugram with Dr. Rashmi Agarwal — embryology lab, ICSI support, and a written estimate before you begin. Book a free consultation.',
        },
        heroDesc: 'One doctor at every step, an advanced embryology lab, and a written estimate before you begin. No surprises.',
        heroStats: [
            { label: 'Consultation', value: 'Free' },
            { label: 'Cycle Length', value: '3–4', unit: 'wks' },
            { label: 'Egg Retrieval', value: 'Daycare' },
            { label: 'Embryo Culture', value: '5', unit: 'd' },
        ],
        videoId: 'h8pBhvxheVI',
        sections: [
            {
                kind: 'text',
                heading: 'What Is IVF, Really?',
                paragraphs: [
                    'IVF moves the most fragile step of conception into the lab. Eggs are retrieved, fertilised with sperm, and grown for 3 to 5 days before the healthiest embryo is placed in your uterus.',
                    'A child conceived through IVF is fully your biological child — the lab only helps at the meeting point.'
                ]
            },
            {
                kind: 'points',
                heading: 'Who Genuinely Needs IVF',
                items: [
                    { title: 'Blocked or damaged tubes', description: 'IVF bypasses the tubes entirely.' },
                    { title: 'Low ovarian reserve', description: 'Makes the most of every remaining cycle.' },
                    { title: 'Endometriosis', description: 'Especially when ovarian reserve is affected.' },
                    { title: 'Male factor infertility', description: 'Usually paired with ICSI.' },
                    { title: 'Failed IUI cycles', description: 'A better per-cycle chance after 3–4 IUIs.' },
                    { title: 'Unexplained infertility', description: 'Often reveals the hidden cause.' },
                ]
            },
            {
                kind: 'steps',
                heading: 'The IVF Process, Step by Step',
                items: [
                    { step: '01', title: 'Consultation and Workup', description: 'A full evaluation of both partners, plus a written cost estimate.' },
                    { step: '02', title: 'Ovarian Stimulation', description: 'Daily pen injections grow multiple follicles, tracked over 3–4 scans.' },
                    { step: '03', title: 'Trigger Injection', description: 'Matures the eggs precisely 34 to 36 hours before retrieval.' },
                    { step: '04', title: 'Egg Retrieval', description: 'A 20–30 minute daycare procedure under short anaesthesia.' },
                    { step: '05', title: 'Fertilisation and Culture', description: 'Eggs and sperm combine in the lab and grow for 3–5 days.' },
                    { step: '06', title: 'Embryo Transfer', description: 'A painless, few-minute procedure; surplus embryos are frozen.' },
                    { step: '07', title: 'The Two Week Wait', description: 'A blood test confirms your result around day 14.' },
                ]
            },
            {
                kind: 'cost',
                heading: 'Complete Cost Transparency',
                paragraph: 'Add-ons like ICSI, freezing, or genetic testing are quoted separately, with a full written estimate before you begin. Cashless insurance is supported where applicable.'
            },
        ],
        benefits: ['One doctor supervises every step', 'ICSI, blastocyst culture & PGT available', 'Written estimate before you begin', 'Advanced embryology lab on-site'],
        faq: [
            { q: 'How much does IVF cost at your centre?', a: 'Cost depends on your specific protocol and whether add ons like ICSI, freezing, or genetic testing are needed. You receive a written, itemised estimate before starting, so there are no mid cycle surprises.' },
            { q: 'Are IVF injections painful?', a: 'Much less than feared. Daily injections use fine pen devices most women self administer painlessly. Egg retrieval is done under short anaesthesia so you sleep through it.' },
            { q: 'How many IUI cycles should we try before moving to IVF?', a: 'Evidence shows most IUI successes happen within the first 3 to 4 properly monitored cycles. Beyond that, the chance per cycle drops and IVF usually becomes a much wiser investment of your time and money.' },
        ],
        cta: {
            heading: 'Ready for Real Answers About IVF?',
            paragraph: 'Bring your reports and leave with a personalised protocol, a realistic estimate, and a complete written cost.',
            primary: 'Book a Free IVF Consultation',
            secondary: 'WhatsApp Reports: +91 88002 63884',
        },
    },
    'insemination': {
        eyebrow: 'Artificial Insemination',
        title: 'Insemination, explained simply.',
        seo: {
            title: 'Artificial Insemination in Gurgaon',
            description: 'Partner and donor insemination in Gurugram, fully ART Act 2021 compliant. Learn how the procedure works and who it helps. Book a free consultation with Dr. Rashmi Agarwal.',
        },
        heroDesc: 'Prepared sperm placed at exactly the right moment — partner or donor, always ART Act compliant.',
        heroStats: [
            { label: 'Procedure Time', value: '10', unit: 'min' },
            { label: 'Anaesthesia', value: 'Zero' },
            { label: 'Legal Basis', value: 'ART Act' },
            { label: 'Recovery', value: 'Same-day' },
        ],
        videoId: 'dQw4w9WgXcQ',
        sections: [
            {
                kind: 'text',
                heading: 'What Artificial Insemination Involves',
                paragraphs: [
                    'A semen sample is washed in the lab to concentrate the healthiest, most motile sperm, then placed into the uterus through a soft catheter, timed precisely to ovulation using ultrasound monitoring.'
                ]
            },
            {
                kind: 'points',
                heading: 'Who Insemination Helps',
                items: [
                    { title: 'Mild male factor or timing issues', description: 'Couples with mild male factor or cervical mucus problems.' },
                    { title: 'Difficulty with intercourse', description: 'Where intercourse is difficult for medical or anatomical reasons.' },
                    { title: 'Donor sperm for azoospermia', description: 'A path to a pregnancy you carry and deliver yourselves.' },
                    { title: 'As permitted under Indian law', description: 'Registered ART banks only, with full informed consent from both partners.' },
                ]
            },
        ],
        benefits: ['Minimally invasive', 'Lower cost than IVF', 'Natural conception process', 'Strictly ART Act 2021 compliant'],
        faq: [
            { q: 'Can we consult online before visiting Gurugram?', a: 'Yes. WhatsApp your reports to +91 88002 63884 for a preliminary review, and we can arrange a video consultation. Many outstation couples plan their entire protocol remotely and travel only for essential visits.' },
        ],
        cta: {
            heading: 'A Gentle Treatment Deserves a Careful Plan',
            paragraph: 'Whether it\'s a partner cycle or donor insemination, start with one honest conversation.',
            primary: 'Book a Free Consultation',
            secondary: 'Read the Full IUI Guide',
        },
    },
    'hsg': {
        eyebrow: 'Diagnostic Imaging',
        title: 'See what\'s blocking conception.',
        seo: {
            title: 'HSG Test in Gurgaon',
            description: 'Hysterosalpingography (HSG) in Gurugram checks for blocked fallopian tubes before IUI or IVF. A quick outpatient X-ray procedure with Dr. Rashmi Agarwal.',
        },
        heroDesc: 'A quick X-ray test that maps your fallopian tubes and uterine cavity in one visit.',
        heroStats: [
            { label: 'Procedure Time', value: '15', unit: 'min' },
            { label: 'Ideal Window', value: 'Day 6–11' },
            { label: 'Anaesthesia', value: 'Zero' },
            { label: 'Setting', value: 'Outpatient' },
        ],
        videoId: 'dQw4w9WgXcQ',
        sections: [
            {
                kind: 'text',
                heading: 'Overview',
                paragraphs: [
                    'An HSG uses a contrast dye and X-ray to map your uterus and check whether the fallopian tubes are open — a key step before IUI.',
                    'Flushing the tubes with the dye can sometimes boost fertility for the following few months.'
                ]
            },
        ],
        benefits: ['Clear diagnostic imaging', 'Quick outpatient procedure', 'Can flush out minor blockages', 'Guides future treatment plans'],
        faq: [
            { q: 'Does an HSG hurt?', a: 'Some women experience mild to moderate cramping during the injection of the dye. Taking over-the-counter pain medication beforehand can help.' },
            { q: 'When should an HSG be scheduled?', a: 'It is usually scheduled between days 6 and 11 of your menstrual cycle, after bleeding has stopped but before ovulation.' }
        ],
        cta: {
            heading: 'Start With a Clear Picture',
            paragraph: 'An HSG gives us the clarity to recommend the right next step — timed intercourse, IUI, or IVF.',
            primary: 'Book a Consultation',
        },
    },
    'hysteroscopy-laparoscopy': {
        eyebrow: 'Fertility Surgeries',
        title: 'Keyhole surgery. Fertility-first.',
        seo: {
            title: 'Hysteroscopy & Laparoscopy Surgery in Gurgaon',
            description: 'Fertility-focused hysteroscopy and laparoscopy in Gurugram for polyps, fibroids, endometriosis, and blocked tubes. Day-case surgery with Dr. Rashmi Agarwal.',
        },
        heroDesc: 'Camera-guided surgery to diagnose and treat polyps, fibroids, cysts, and endometriosis in one sitting.',
        heroStats: [
            { label: 'Approach', value: 'Keyhole' },
            { label: 'Stay', value: 'Day-case' },
            { label: 'Recovery', value: '1–7', unit: 'd' },
            { label: 'Anaesthesia', value: 'Short GA' },
        ],
        videoId: '3XH4BmNM-Fo',
        sections: [
            {
                kind: 'text',
                heading: 'Surgery Rethought for Fertility',
                paragraphs: [
                    'Endometriosis, adhesions, cysts, and fibroids often hide beyond what a scan can show. Dr. Rashmi operates with a fertility-first mindset, preserving as much healthy tissue as possible.'
                ]
            },
            {
                kind: 'points',
                heading: 'Hysteroscopy versus Laparoscopy',
                items: [
                    { title: 'Hysteroscopy : Inside the Uterus', description: 'A thin camera through the natural opening — no cuts, no stitches. Finds and treats polyps, fibroids, and a septum in one visit.' },
                    { title: 'Laparoscopy : Inside the Pelvis', description: 'Three or four button-sized incisions. The standard approach for endometriosis, cysts, adhesions, and blocked tubes.' },
                ]
            },
            {
                kind: 'points',
                heading: 'Signs Pointing Toward Surgery',
                items: [
                    { title: 'Repeated implantation failure', description: 'With good quality embryos.' },
                    { title: 'Painful periods or pelvic pain', description: 'Suggesting endometriosis.' },
                    { title: 'Abnormal ultrasound findings', description: 'Polyps, fibroids, or a septum.' },
                    { title: 'A persistent ovarian cyst', description: 'Or chocolate cyst.' },
                    { title: 'Previous ectopic pregnancy', description: 'Or pelvic infection causing tubal damage.' },
                ]
            },
        ],
        benefits: ['Fertility-first surgical judgement', 'Minimally invasive, day-case surgery', 'Diagnoses and treats in one sitting', 'Faster recovery than open surgery'],
        faq: [
            { q: 'Will I need to stay in the hospital?', a: 'No, these are typically performed as day-case surgeries. Most patients go home the same day.' },
            { q: 'How long is the recovery?', a: 'Recovery from a hysteroscopy is very fast (1-2 days). Laparoscopy may require a few days to a week of rest before returning to normal activities.' }
        ],
        cta: {
            heading: 'Make Sure the Surgery Serves the Baby',
            paragraph: 'Fertility-first judgement is the difference between an operation that opens your path to pregnancy and one that merely treats a scan finding.',
            primary: 'Book a Surgical Consultation',
            secondary: 'WhatsApp Your Scan Reports',
        },
    },
    'icsi': {
        eyebrow: 'Advanced Fertilisation Technique',
        title: 'One sperm. One egg. Fertilised.',
        seo: {
            title: 'ICSI Treatment in Gurgaon',
            description: 'ICSI (intracytoplasmic sperm injection) in Gurugram for severe male factor infertility — a single sperm injected directly into the egg. Book a consultation with Dr. Rashmi Agarwal.',
        },
        heroDesc: 'A single healthy sperm injected directly into the egg — built for severe male factor infertility.',
        heroStats: [
            { label: 'Fertilisation Rate', value: '70–85', unit: '%' },
            { label: 'Sperm Needed', value: '1', unit: '/egg' },
            { label: 'Proven Since', value: '1992' },
            { label: 'Precision', value: 'Microscope' },
        ],
        videoId: 'YvvciOHrnec',
        sections: [
            {
                kind: 'text',
                heading: 'What Is ICSI, Really?',
                paragraphs: [
                    'In standard IVF, sperm must fertilise the egg unassisted. In ICSI, our embryologist selects one healthy sperm under a microscope and injects it directly into the egg — a technique used worldwide since 1992.'
                ]
            },
            {
                kind: 'points',
                heading: 'Who Genuinely Needs ICSI',
                items: [
                    { title: 'Severe male factor infertility', description: 'Low count, poor motility, or abnormal shape.' },
                    { title: 'Previous fertilisation failure', description: 'Few or no eggs fertilised in a prior IVF cycle.' },
                    { title: 'Surgically retrieved sperm', description: 'Always required for sperm from PESA, TESA, or Micro TESE.' },
                    { title: 'Frozen or limited samples', description: 'When every sperm counts.' },
                    { title: 'PGT or donor egg cycles', description: 'Standard practice to avoid stray sperm DNA.' },
                ]
            },
            {
                kind: 'steps',
                heading: 'How ICSI Is Performed',
                items: [
                    { step: '01', title: 'Egg Retrieval', description: 'Identical to standard IVF — stimulation, monitoring, and a day-care retrieval.' },
                    { step: '02', title: 'Sperm Selection', description: 'The healthiest single sperm chosen under high magnification.' },
                    { step: '03', title: 'Microinjection', description: 'Injected directly into each mature egg with a fine glass needle.' },
                    { step: '04', title: 'Fertilisation Check', description: 'Confirmed at 16–18 hours, then cultured as in standard IVF.' },
                ]
            },
            {
                kind: 'cost',
                heading: 'Fertilisation Rates and Safety',
                paragraph: 'ICSI fertilises 70 to 85 percent of mature eggs. Once an embryo forms, its chance of success matches standard IVF. Genetic counselling is recommended for specific inherited causes of male infertility.'
            },
        ],
        benefits: ['Overcomes severe male factor infertility', '70–85% fertilisation rate per mature egg', 'Required for surgically retrieved sperm', 'Three decades of established safety data'],
        faq: [
            { q: 'What is the difference between IVF and ICSI?', a: 'In IVF, thousands of sperm are placed around each egg. In ICSI, a single sperm is injected directly into the egg. ICSI is standard when sperm numbers or quality are very low.' },
            { q: 'Do I need surgical sperm retrieval to have ICSI?', a: 'Only if your semen analysis shows azoospermia, zero sperm in the ejaculate. If sperm are present in your ejaculated sample, even in low numbers, we use that sample directly with ICSI. If not, we retrieve sperm surgically first — see our full guide to Surgical Sperm Retrieval.' },
        ],
        cta: {
            heading: 'Get a Second Opinion Built on Numbers',
            paragraph: 'WhatsApp your semen analysis and see plainly what ICSI can do for your case before you spend a rupee.',
            primary: 'Book an ICSI Consultation',
            secondary: 'WhatsApp Semen Analysis Report',
        },
    },
    'surgical-sperm-retrieval': {
        eyebrow: 'Male Fertility Surgery',
        title: 'Zero sperm count isn\'t the end.',
        seo: {
            title: 'Surgical Sperm Retrieval (PESA, TESA, Micro TESE) in Gurgaon',
            description: 'Surgical sperm retrieval in Gurugram for azoospermia — PESA, TESA, and Micro TESE, coordinated with ICSI. Consult Dr. Rashmi Agarwal for a personalised evaluation.',
        },
        heroDesc: 'PESA, TESA, and Micro TESE retrieve sperm directly from the reproductive tract for use with ICSI.',
        heroStats: [
            { label: 'Micro TESE Yield', value: '40–60', unit: '%' },
            { label: 'Techniques', value: '3' },
            { label: 'Recovery', value: '1–2', unit: 'd' },
            { label: 'Paired With', value: 'ICSI' },
        ],
        videoId: 'ypvbBToaFY4',
        sections: [
            {
                kind: 'text',
                heading: 'When Surgical Retrieval Is Needed',
                paragraphs: [
                    'Azoospermia falls into two categories: obstructive, where sperm production is normal but blocked, and non-obstructive, where the testicles produce very little. A hormonal and genetic workup tells us which — and which procedure is right for your case.'
                ]
            },
            {
                kind: 'points',
                heading: 'Techniques We Use',
                items: [
                    { title: 'PESA', description: 'A fine needle aspirates fluid from the epididymis — 15 to 20 minutes, local anaesthesia.' },
                    { title: 'TESA', description: 'A needle draws sperm-containing tissue directly from the testicle.' },
                    { title: 'Micro TESE', description: 'Microscopic exploration to find isolated sperm-producing tissue — the highest yield in non-obstructive cases.' },
                ]
            },
            {
                kind: 'points',
                heading: 'Who This Helps',
                items: [
                    { title: 'Prior vasectomy', description: 'When reversal isn\'t possible or has failed.' },
                    { title: 'Absent vas deferens', description: 'A structural cause present from birth.' },
                    { title: 'Non-obstructive azoospermia', description: 'After a complete hormonal and genetic workup.' },
                    { title: 'Prior infection or scarring', description: 'Blocking the epididymis or vas deferens.' },
                ]
            },
            {
                kind: 'text',
                heading: 'Coordinating Retrieval With ICSI',
                paragraphs: [
                    'Retrieved sperm is always used with ICSI. It can be timed with your partner\'s egg collection, or frozen in advance to avoid the pressure of same-day timing and repeat surgery.'
                ]
            },
        ],
        benefits: ['Restores biological fatherhood in azoospermia', 'Micro TESE finds sperm in 40–60% of non-obstructive cases', 'Can be timed with retrieval or frozen in advance', 'Minimal downtime for PESA and TESA'],
        faq: [
            { q: 'My husband has zero sperm count. Can we still have a biological child?', a: 'Often, yes. Through Surgical Sperm Retrieval techniques like PESA, TESA, or Micro TESE, we can safely extract sperm directly from the reproductive tract to use with ICSI.' },
            { q: 'What is the difference between obstructive and non-obstructive azoospermia?', a: 'In obstructive azoospermia, sperm production is normal but a blockage stops sperm reaching the ejaculate, so PESA or TESA usually succeed. In non-obstructive azoospermia, the testicles produce very little sperm, so Micro TESE, which examines tissue under a microscope to find isolated productive areas, is generally recommended.' },
        ],
        cta: {
            heading: 'Get a Second Opinion Built on Numbers',
            paragraph: 'WhatsApp your semen analysis and hormone reports and see plainly what retrieval can do for your case.',
            primary: 'Book a Retrieval Consultation',
            secondary: 'WhatsApp Semen Analysis Report',
        },
    },
    'iui': {
        eyebrow: 'Intrauterine Insemination',
        title: 'The gentle first step, done right.',
        seo: {
            title: 'IUI Treatment in Gurgaon',
            description: 'Intrauterine insemination (IUI) in Gurugram for mild male factor, cervical issues, and unexplained infertility. A 10-minute procedure with Dr. Rashmi Agarwal.',
        },
        heroDesc: 'A 10-minute procedure that places prepared sperm exactly where — and when — it needs to be.',
        heroStats: [
            { label: 'Procedure Time', value: '10', unit: 'min' },
            { label: 'Anaesthesia', value: 'Zero' },
            { label: 'Typical Attempts', value: '3–4', unit: ' cycles' },
            { label: 'Cost', value: 'Lowest' },
        ],
        videoId: 'nmkvMS2at_0',
        sections: [
            {
                kind: 'text',
                heading: 'The Most Misunderstood Treatment',
                paragraphs: [
                    'IUI is often overused past the point it can help, and underused for problems it could solve cheaply. Washed sperm is placed inside the uterus through a soft catheter, timed to ovulation.'
                ]
            },
            {
                kind: 'points',
                heading: 'Who IUI Genuinely Helps',
                items: [
                    { title: 'Mild male factor infertility', description: 'Where washing concentrates enough good sperm.' },
                    { title: 'Cervical factor issues', description: 'Where mucus blocks natural sperm progression.' },
                    { title: 'Ovulation problems', description: 'Combined with induction medicines for perfect timing.' },
                    { title: 'Unexplained infertility', description: 'Especially early in the journey for younger couples.' },
                ]
            },
        ],
        benefits: ['Cost-effective first step', 'Non-surgical, 10 minute procedure', 'Increases sperm concentration at the egg', 'Can be synced with ovulation medications'],
        faq: [
            { q: 'How many IUI cycles should we try before moving to IVF?', a: 'Evidence shows most IUI successes happen within the first 3 to 4 properly monitored cycles. Beyond that, the chance per cycle drops and IVF usually becomes a much wiser investment of your time and money.' },
        ],
        cta: {
            heading: 'Ready to Take the Gentle First Step?',
            paragraph: 'One consultation and a few targeted tests will tell you honestly if IUI fits your case.',
            primary: 'Book an IUI Consultation',
            secondary: 'WhatsApp Your Reports',
        },
    },
    'ovulation-induction': {
        eyebrow: 'Ovulation Induction',
        title: 'Often, the only treatment you need.',
        seo: {
            title: 'Ovulation Induction Treatment in Gurgaon',
            description: 'Ovulation induction and cycle monitoring in Gurugram for PCOS and irregular ovulation. Medication and tracking scans with Dr. Rashmi Agarwal.',
        },
        heroDesc: 'Dosed medication and tracking scans pinpoint your exact fertile window, cycle after cycle.',
        heroStats: [
            { label: 'Monitoring', value: 'USG + Bloods' },
            { label: 'Suited For', value: 'PCOS' },
            { label: 'Invasiveness', value: 'Zero' },
            { label: 'Cycle', value: '1', unit: ' month' },
        ],
        videoId: 'rux07h3arf0',
        sections: [
            {
                kind: 'text',
                heading: 'Overview',
                paragraphs: [
                    'Hormonal medication stimulates the ovaries to release a mature egg — mainly for women who don\'t ovulate regularly, like those with PCOS. Scans and blood tests track follicle growth to pinpoint your exact fertile window.'
                ]
            },
        ],
        benefits: ['Restores normal ovulation', 'Non-invasive PCOS management', 'Ultrasound and blood test monitoring', 'Optimizes timing for conception'],
        faq: [
            { q: 'What medications are used?', a: 'Common medications include Letrozole, Clomid, or injectable gonadotropins, tailored to your specific hormonal profile.' },
            { q: 'Are there side effects?', a: 'Side effects are generally mild and may include hot flashes, mood swings, or bloating. We monitor you closely to ensure safety.' }
        ],
        cta: {
            heading: 'Often, This Is the Only Treatment You Need',
            paragraph: 'For many young couples with an ovulation problem, careful monitoring alone is enough.',
            primary: 'Book a Consultation',
        },
    },
    'endometrial-biopsy-era': {
        eyebrow: 'Advanced Diagnostics',
        title: 'Stop guessing your transfer day.',
        seo: {
            title: 'Endometrial Biopsy & ERA Test in Gurgaon',
            description: 'Endometrial biopsy and ERA (endometrial receptivity analysis) in Gurugram after repeated IVF implantation failure. Consult Dr. Rashmi Agarwal.',
        },
        heroDesc: 'Pinpoints your uterine lining\'s exact receptive window after repeated implantation failure.',
        heroStats: [
            { label: 'Purpose', value: 'Timing Window' },
            { label: 'Suited For', value: 'Repeated Failure' },
            { label: 'Setting', value: 'Outpatient' },
            { label: 'Result', value: 'Personalised Day' },
        ],
        videoId: 'dQw4w9WgXcQ',
        sections: [
            {
                kind: 'text',
                heading: 'Overview',
                paragraphs: [
                    'If good-quality embryos haven\'t implanted, an Endometrial Biopsy or ERA checks for hidden inflammation and pinpoints the exact day your lining is most receptive to a transfer.'
                ]
            },
            {
                kind: 'points',
                heading: 'Recommended For',
                items: [
                    { title: 'Repeated implantation failure', description: 'With embryos graded as good quality.' },
                    { title: 'Evaluating the uterine environment', description: 'Before your next embryo transfer.' },
                ]
            },
        ],
        benefits: ['Personalised implantation window', 'Screens for chronic hidden infection', 'Reduces guesswork on transfer timing', 'Guides the next IVF attempt precisely'],
        faq: [
            { q: 'What is an ERA or Endometrial Biopsy used for?', a: 'If you have experienced repeated IVF transfer failures with good embryos, an Endometrial Biopsy or ERA helps us check for hidden inflammation and pinpoints the exact day your uterine lining is most receptive to an embryo.' },
        ],
        cta: {
            heading: 'Stop Guessing on Your Next Transfer',
            paragraph: 'If good-quality embryos haven\'t implanted, this diagnostic step is often the missing piece.',
            primary: 'Book a Consultation',
        },
    },
};

export function generateStaticParams() {
    return Object.keys(treatmentData).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = treatmentData[slug];
    if (!data) return {};

    return {
        title: data.seo.title,
        description: data.seo.description,
        alternates: { canonical: `/treatments/${slug}` },
        openGraph: {
            title: data.seo.title,
            description: data.seo.description,
            url: `/treatments/${slug}`,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: data.seo.title,
            description: data.seo.description,
        },
    };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = treatmentData[slug];

    if (!data) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* HERO SECTION */}
            <section className="cond-hero edge" data-bg="#f8fafc" data-theme="light">
                <div className="cond-hero-bg"></div>
                <div className="container-x relative">
                    <div className="cond-breadcrumb">
                        <Link href="/">Home</Link>
                        <ChevronRight style={{ width: '14px', height: '14px' }} />
                        <Link href="/treatments">Treatments</Link>
                        <ChevronRight style={{ width: '14px', height: '14px' }} />
                        <span>{data.eyebrow}</span>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-7">
                            <div className="chip mb-6"><span className="chip-dot"></span>{data.eyebrow}</div>
                            <h1 className="display mb-6 font-black!">{data.title}</h1>
                            <p className="body-lg max-w-2xl mb-8">{data.heroDesc}</p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {data.heroStats.map((stat, i) => (
                                    <div key={i} className="card" style={{ padding: '1.25rem' }}>
                                        <div className="body-sm">{stat.label}</div>
                                        <div className="text-3xl font-semibold mt-1" style={{ letterSpacing: '-0.02em' }}>
                                            {stat.value}<span className="mark">{stat.unit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="video-frame shadow-2xl border border-slate-100">
                                <iframe
                                    src={`https://www.youtube.com/embed/${data.videoId}`}
                                    title="Treatment overview video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="section edge">
                <div className="container-x">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Left Content */}
                        <div className="lg:col-span-8">
                            {data.sections.map((section, si) => {
                                if (section.kind === 'text') {
                                    return (
                                        <div key={si} className="mb-12">
                                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{section.heading}</h2>
                                            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                                                {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                                            </div>
                                        </div>
                                    );
                                }
                                if (section.kind === 'points') {
                                    return (
                                        <div key={si} className="mb-12">
                                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{section.heading}</h2>
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                                        <h4 className="text-base font-bold text-slate-900 mb-2">{item.title}</h4>
                                                        <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                                if (section.kind === 'steps') {
                                    return (
                                        <div key={si} className="mb-12">
                                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">{section.heading}</h2>
                                            <div className="space-y-5">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="flex gap-5 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                                        <div className="shrink-0 w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center font-bold text-sm">
                                                            {item.step}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h4>
                                                            <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }
                                if (section.kind === 'cost') {
                                    return (
                                        <div key={si} className="mb-12 bg-pink-50 border border-pink-100 rounded-3xl p-8">
                                            <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4">{section.heading}</h2>
                                            <p className="text-slate-600 text-base leading-relaxed">{section.paragraph}</p>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                {/* Benefits Card */}
                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
                                    <h3 className="text-xl font-black text-slate-900 mb-6">Key Benefits</h3>
                                    <ul className="space-y-4">
                                        {data.benefits.map((b, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                                                <span className="text-slate-600 font-medium">{b}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA Card */}
                                <div className="bg-slate-900 p-8 rounded-[2rem] text-white overflow-hidden relative">
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-500 rounded-full blur-3xl opacity-30" />
                                    <h3 className="text-xl font-black mb-3 relative z-10">{data.cta.heading}</h3>
                                    <p className="text-slate-400 text-sm mb-6 relative z-10">
                                        {data.cta.paragraph}
                                    </p>
                                    <div className="flex flex-col gap-3 relative z-10">
                                        <a href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold transition-colors">
                                            <Calendar className="w-4 h-4" />
                                            {data.cta.primary}
                                        </a>
                                        {data.cta.secondary && (
                                            <a href="https://wa.me/918800263884" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold transition-colors">
                                                <MessageCircle className="w-4 h-4" />
                                                {data.cta.secondary}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            {data.faq.length > 0 && (
                <section className="section-tight edge" data-bg="#f5f7ff" data-theme="light">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'FAQPage',
                                mainEntity: data.faq.map((f) => ({
                                    '@type': 'Question',
                                    name: f.q,
                                    acceptedAnswer: { '@type': 'Answer', text: f.a },
                                })),
                            }).replace(/</g, '\\u003c'),
                        }}
                    />
                    <div className="container-x">
                        <div className="max-w-3xl mb-10">
                            <div className="chip mb-4"><span className="chip-dot"></span>Questions</div>
                            <h2 className="heading">About {data.eyebrow.toLowerCase()}.</h2>
                        </div>
                        <div className="max-w-3xl">
                            <FaqAccordion items={data.faq} />
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
