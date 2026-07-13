import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Baby, TestTube, ScanSearch, Stethoscope, Syringe, TestTube2, CalendarRange, Calendar, CheckCircle2, FileSearch, MessageCircle, ChevronRight } from 'lucide-react';

type TextSection = { kind: 'text'; heading: string; paragraphs: string[] };
type PointsSection = { kind: 'points'; heading: string; items: { title: string; description: string }[] };
type StepsSection = { kind: 'steps'; heading: string; items: { step: string; title: string; description: string }[] };
type CostSection = { kind: 'cost'; heading: string; paragraph: string };
type Section = TextSection | PointsSection | StepsSection | CostSection;

interface TreatmentEntry {
    eyebrow: string;
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    heroDesc: string;
    sections: Section[];
    benefits: string[];
    faq: { q: string; a: string }[];
    cta: { heading: string; paragraph: string; primary: string; secondary?: string };
}

const treatmentData: Record<string, TreatmentEntry> = {
    'ivf': {
        eyebrow: 'In Vitro Fertilisation',
        title: 'IVF Treatment in Gurgaon',
        icon: Baby,
        heroDesc: 'One doctor supervising every step, an advanced embryology lab, transparent written pricing from ₹1,20,000, and counselling that respects your intelligence. This is IVF the way it should be done.',
        sections: [
            {
                kind: 'text',
                heading: 'Before You Read Anything Else',
                paragraphs: [
                    'If you are reading this page, you have probably already been through a lot of trying, testing, and conflicting advice. Let us begin with the essentials. IVF is highly effective. It is safe when done properly. It is not painful the way people fear. And it is not the right first step for everyone.',
                    'This guide walks you through exactly what IVF is, who genuinely needs it, what the process feels like week by week, what determines success, and what it costs at our centre. No jargon, no pressure, just the same explanation Dr. Rashmi gives across the consultation table.'
                ]
            },
            {
                kind: 'text',
                heading: 'What Is IVF, Really?',
                paragraphs: [
                    'In natural conception, an egg and sperm must meet inside the fallopian tube, fertilise, grow into an embryo, travel to the uterus and implant. In Vitro Fertilisation moves the most fragile links of that chain into a controlled laboratory. Your eggs are collected, combined with sperm in the embryology lab, and grown for three to five days under conditions that mimic the human body. The healthiest embryo is then placed gently into your uterus.',
                    'A child conceived through IVF is your biological child in every sense, carried in your womb, sharing your genes. The laboratory only helps at the meeting point; biology does everything else.'
                ]
            },
            {
                kind: 'points',
                heading: 'Who Genuinely Needs IVF',
                items: [
                    { title: 'Blocked or damaged fallopian tubes', description: 'IVF bypasses the tubes entirely.' },
                    { title: 'Low ovarian reserve or low AMH', description: 'When egg numbers are declining, IVF makes the most of every remaining cycle.' },
                    { title: 'Moderate to severe endometriosis', description: 'Especially when ovarian reserve is affected.' },
                    { title: 'Male factor infertility', description: 'Low count, poor motility or abnormal morphology, usually with ICSI added.' },
                    { title: 'Failed IUI cycles', description: 'After three to four well conducted IUIs, IVF offers a substantially better per cycle chance.' },
                    { title: 'Unexplained infertility', description: 'IVF is both the most effective treatment and the test that finally reveals the hidden cause.' },
                ]
            },
            {
                kind: 'steps',
                heading: 'The IVF Process Step by Step',
                items: [
                    { step: '01', title: 'Consultation and Workup', description: 'A detailed evaluation of both partners to finalise your personalised protocol and written cost estimate.' },
                    { step: '02', title: 'Ovarian Stimulation', description: 'Daily hormone injections given with fine pen devices encourage multiple follicles to grow. You visit for 3 to 4 short ultrasound checks.' },
                    { step: '03', title: 'Trigger Injection', description: 'A final injection matures the eggs precisely 34 to 36 hours before retrieval.' },
                    { step: '04', title: 'Egg Retrieval', description: 'A 20 to 30 minute daycare procedure under short anaesthesia. You rest for a couple of hours and go home the same day. The male partner provides a semen sample the same morning.' },
                    { step: '05', title: 'Fertilisation and Embryo Culture', description: 'Eggs and sperm are combined in the lab, and the resulting embryos grow in incubators for 3 to 5 days.' },
                    { step: '06', title: 'Embryo Transfer', description: 'A gentle, painless procedure taking a few minutes, done without anaesthesia. The selected embryo is placed in the uterus. Surplus good embryos are frozen.' },
                    { step: '07', title: 'The Two Week Wait and Pregnancy Test', description: 'Around 14 days after transfer, a blood test confirms the result. We stay in close contact through this fortnight.' },
                ]
            },
            {
                kind: 'cost',
                heading: 'What IVF Costs Here',
                paragraph: 'IVF packages at our centre start from ₹1,20,000. The final figure depends on your medicine doses and whether your case needs ICSI, blastocyst culture, embryo freezing or genetic testing. Each add on is quoted separately and explained. Before you start, you receive a complete written estimate. Cashless insurance support is available where policies cover fertility treatment.'
            },
        ],
        benefits: ['Transparent pricing from ₹1,20,000', 'ICSI, blastocyst culture & PGT available', 'One doctor supervises every step', 'Written cost estimate before you begin'],
        faq: [
            { q: 'How much does IVF cost at your centre?', a: 'IVF packages start from ₹1,20,000. You receive a written, itemised estimate before starting, so there are no mid cycle surprises.' },
            { q: 'Are IVF injections painful?', a: 'Much less than feared. Daily injections use fine pen devices most women self administer painlessly. Egg retrieval is done under short anaesthesia so you sleep through it.' },
            { q: 'How many IUI cycles should we try before moving to IVF?', a: 'Evidence shows most IUI successes happen within the first 3 to 4 properly monitored cycles. Beyond that, the chance per cycle drops and IVF usually becomes a much wiser investment of your time and money.' },
        ],
        cta: {
            heading: 'Ready for Real Answers About IVF?',
            paragraph: 'Bring your reports or WhatsApp them ahead, and leave your first consultation with a personalised protocol, a realistic success estimate, and a complete written cost.',
            primary: 'Book a Free IVF Consultation',
            secondary: 'WhatsApp Reports: +91 88002 63884',
        },
    },
    'insemination': {
        eyebrow: 'Artificial Insemination',
        title: 'Artificial Insemination : The Simple Treatment, Explained Simply',
        icon: TestTube,
        heroDesc: 'Prepared sperm, placed in the right spot at the perfect moment. This page explains what insemination involves, the difference between partner and donor cycles, and how it compares with IVF.',
        sections: [
            {
                kind: 'text',
                heading: 'What Artificial Insemination Involves',
                paragraphs: [
                    'Artificial insemination is the umbrella concept for placing laboratory prepared sperm into the woman’s reproductive tract without intercourse, so fertilisation can happen naturally inside the body. A semen sample is processed in the andrology lab. Washing separates the strongest, most motile sperm and concentrates them into a small volume.',
                    'This prepared sample is then placed into the uterus through a soft catheter, timed precisely to ovulation using ultrasound monitoring. Because fertilisation occurs naturally, insemination requires at least one open tube and reasonable sperm quality.'
                ]
            },
            {
                kind: 'points',
                heading: 'Who Insemination Helps',
                items: [
                    { title: 'Mild male factor or timing issues', description: 'Couples with mild male factor or timing and cervical problems.' },
                    { title: 'Difficulty with intercourse', description: 'Couples where intercourse is difficult due to medical or anatomical issues.' },
                    { title: 'Donor sperm for azoospermia', description: 'When no sperm can be retrieved surgically, donor insemination offers a path to pregnancy the couple carries and delivers themselves.' },
                    { title: 'As permitted under Indian law', description: 'Donor insemination at our centre strictly follows the ART Act 2021: sperm is sourced only from registered ART banks, donors are screened, anonymity is maintained, and both partners provide written informed consent.' },
                ]
            },
        ],
        benefits: ['Minimally invasive', 'Lower cost than IVF', 'Natural conception process', 'Strictly ART Act 2021 compliant'],
        faq: [
            { q: 'Can we consult online before visiting Gurugram?', a: 'Yes. WhatsApp your reports to +91 88002 63884 for a preliminary review, and we can arrange a video consultation. Many outstation couples plan their entire protocol remotely and travel only for essential visits.' },
        ],
        cta: {
            heading: 'A Gentle Treatment Deserves a Careful Plan',
            paragraph: 'Whether you are considering a partner cycle or working through the emotions of donor insemination, start with one honest conversation. Dr. Rashmi will map your options clearly and kindly.',
            primary: 'Book a Free Consultation',
            secondary: 'Read the Full IUI Guide',
        },
    },
    'hsg': {
        eyebrow: 'Diagnostic Imaging',
        title: 'Hysterosalpingography (HSG)',
        icon: ScanSearch,
        heroDesc: 'A vital diagnostic procedure to evaluate the health of your fallopian tubes and uterine cavity.',
        sections: [
            {
                kind: 'text',
                heading: 'Overview',
                paragraphs: [
                    'An HSG is an X-ray test that uses a contrast dye to outline the internal shape of the uterus and show whether the fallopian tubes are open or blocked.',
                    'This is a crucial step in the fertility evaluation process, as open fallopian tubes are necessary for natural conception and IUI treatments.',
                    'In addition to being diagnostic, the flushing of the tubes with the dye can sometimes increase fertility in the months immediately following the procedure.'
                ]
            },
        ],
        benefits: ['Clear diagnostic imaging', 'Quick outpatient procedure', 'Can flush out minor blockages', 'Guides future treatment plans'],
        faq: [
            { q: 'Does an HSG hurt?', a: 'Some women experience mild to moderate cramping during the injection of the dye. Taking over-the-counter pain medication beforehand can help.' },
            { q: 'When is the best time to have an HSG?', a: 'It is usually scheduled between days 6 and 11 of your menstrual cycle, after bleeding has stopped but before ovulation.' }
        ],
        cta: {
            heading: 'Start With a Clear Picture',
            paragraph: 'An HSG gives us the diagnostic clarity to recommend the right next step, whether that is timed intercourse, IUI, or IVF.',
            primary: 'Book a Consultation',
        },
    },
    'hysteroscopy-laparoscopy': {
        eyebrow: 'Fertility Surgeries',
        title: 'Minimally Invasive Surgery : Protecting Your Future Fertility',
        icon: Stethoscope,
        heroDesc: 'A surgeon whose first question before every procedure is how to protect your ovarian reserve. We use advanced camera guided techniques to diagnose and cure hidden fertility blockers, often in the exact same sitting.',
        sections: [
            {
                kind: 'text',
                heading: 'Surgery Rethought for Fertility',
                paragraphs: [
                    'Some causes of infertility live where no blood test or ultrasound can fully reach. Endometriosis painting the pelvis, adhesions binding tubes to ovaries, cysts distorting anatomy, or fibroids pressing where embryos should implant. Diagnostic imaging is only the first step.',
                    'Fertility surgery is a specialized discipline. Removing an endometriotic cyst is straightforward; removing it while preserving the maximum healthy ovarian tissue takes a reproductive surgeon’s precise judgement. Dr. Rashmi operates with exactly that fertility first mindset.'
                ]
            },
            {
                kind: 'points',
                heading: 'Hysteroscopy versus Laparoscopy',
                items: [
                    { title: 'Hysteroscopy : Inside the Uterus', description: 'A pencil thin camera enters the uterus through its natural opening with no cuts and no stitches. It finds and treats hidden causes of failed implantation like polyps, fibroids bulging into the cavity, or a dividing septum. Diagnosis and treatment happen simultaneously.' },
                    { title: 'Laparoscopy : Inside the Pelvis', description: 'Keyhole surgery using three or four incisions smaller than a shirt button. A high definition camera examines the uterus, ovaries, and fallopian tubes. It is the gold standard for excising endometriosis, removing persistent cysts, releasing adhesions, and repairing blocked tubes.' },
                ]
            },
            {
                kind: 'points',
                heading: 'Signs Pointing Toward Surgical Evaluation',
                items: [
                    { title: 'Repeated IVF implantation failure', description: 'With good quality embryos.' },
                    { title: 'Painful periods or pelvic pain', description: 'Progressively painful periods or chronic pelvic pain suggesting endometriosis.' },
                    { title: 'Abnormal ultrasound findings', description: 'Mentioning endometrial polyps, submucous fibroids, or a uterine septum.' },
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
            heading: 'Before Anyone Operates, Make Sure the Surgery Serves the Baby',
            paragraph: 'Fertility first surgical judgement is the difference between an operation that opens your path to pregnancy and one that merely treats a scan finding. Consult Dr. Rashmi with your reports for an honest evaluation.',
            primary: 'Book a Surgical Consultation',
            secondary: 'WhatsApp Your Scan Reports',
        },
    },
    'icsi': {
        eyebrow: 'Advanced Male Fertility Care',
        title: 'ICSI and Surgical Sperm Retrieval : When One Good Sperm Is All It Takes',
        icon: Syringe,
        heroDesc: 'Severe male factor infertility once meant no biological child. Advanced laboratory techniques and precision retrieval procedures have changed that, offering a genuine path to fatherhood for men diagnosed with azoospermia.',
        sections: [
            {
                kind: 'text',
                heading: 'A Revolution for Male Infertility',
                paragraphs: [
                    'For decades, a man with a very low sperm count or none in the ejaculate at all was told bluntly to consider donor sperm. ICSI rewrote that ending. Today it is a highly common laboratory technique in advanced fertility care worldwide.',
                    'Dr. Rashmi has a particular focus on male factor cases, including advanced Surgical Sperm Retrieval for men with azoospermia. If you have been told fatherhood is impossible, read on carefully because that verdict is very often wrong. Our clinic provides dedicated, expert care specifically for surgical retrieval cases.'
                ]
            },
            {
                kind: 'points',
                heading: 'ICSI and Surgical Sperm Retrieval Explained',
                items: [
                    { title: 'ICSI (Intracytoplasmic Sperm Injection)', description: 'In standard IVF, thousands of sperm are placed around each egg. In ICSI, the embryologist selects a single morphologically healthy sperm under high magnification and injects it directly into the centre of the egg. This guarantees the meeting of sperm and egg.' },
                    { title: 'Surgical Sperm Retrieval (SSR)', description: 'For men with zero sperm in the ejaculate (azoospermia), sperm can often be retrieved directly from the reproductive tract. We utilize advanced techniques including PESA, TESA, and Micro TESE. These are short procedures done under local or brief general anaesthesia, perfectly coordinated with the egg retrieval day.' },
                ]
            },
            {
                kind: 'points',
                heading: 'Techniques We Use',
                items: [
                    { title: 'PESA (Percutaneous Epididymal Sperm Aspiration)', description: 'A fine needle extracts fluid directly from the epididymis. This is a quick and minimally invasive procedure.' },
                    { title: 'TESA (Testicular Sperm Aspiration)', description: 'A tiny needle extracts tissue directly from the testicle. This is highly effective for many types of obstructive azoospermia.' },
                    { title: 'Micro TESE (Microsurgical Testicular Sperm Extraction)', description: 'An advanced microscopic surgery used to locate isolated pockets of sperm in the testicles. This provides an excellent chance of finding sperm in severe cases of non obstructive azoospermia.' },
                ]
            },
            {
                kind: 'points',
                heading: 'Your Reports Point Toward ICSI and Retrieval If',
                items: [
                    { title: 'Low semen parameters', description: 'Semen analysis shows count, motility, or morphology well below reference ranges.' },
                    { title: 'Zero sperm on two tests', description: 'Two semen analyses have shown zero sperm (azoospermia), requiring PESA, TESA, or Micro TESE.' },
                    { title: 'Previous fertilisation failure', description: 'A previous IVF cycle had poor or failed fertilisation.' },
                    { title: 'A frozen or limited sample', description: 'You are using a previously frozen or limited sperm sample.' },
                ]
            },
        ],
        benefits: ['Overcomes severe male infertility', 'Maximises fertilisation rates', 'PESA, TESA & Micro TESE available', 'Coordinated with the egg retrieval day'],
        faq: [
            { q: 'What is the difference between IVF and ICSI?', a: 'In IVF, thousands of sperm are placed around each egg. In ICSI, a single sperm is injected directly into the egg. ICSI is standard when sperm numbers or quality are very low.' },
            { q: 'My husband has zero sperm count. Can we still have a biological child?', a: 'Often, yes. Through Surgical Sperm Retrieval techniques like PESA, TESA, or Micro TESE, we can safely extract sperm directly from the reproductive tract to use with ICSI.' },
        ],
        cta: {
            heading: 'Get a Second Opinion Built on Numbers',
            paragraph: 'WhatsApp your semen analysis to +91 88002 63884. Dr. Rashmi will review it and tell you plainly what ICSI and Surgical Sperm Retrieval can do for your case before you spend a single rupee on treatment.',
            primary: 'Book an ICSI Consultation',
            secondary: 'WhatsApp Semen Analysis Report',
        },
    },
    'iui': {
        eyebrow: 'Intrauterine Insemination',
        title: 'IUI in Gurgaon : The Gentle First Step Done Right',
        icon: TestTube2,
        heroDesc: 'A ten minute, painless procedure that places prepared sperm exactly where it needs to be, exactly when it needs to be there. Effective for the right couples, and we will tell you honestly if you are one of them.',
        sections: [
            {
                kind: 'text',
                heading: 'The Most Misunderstood Treatment in Fertility',
                paragraphs: [
                    'IUI is frequently overused when clinics run cycle after cycle for couples whose diagnosis was never going to respond to it. It is underestimated when couples jump straight to IVF for problems a few well monitored IUI cycles could have solved at a fraction of the cost.',
                    'Your partner’s semen sample is washed in the lab to concentrate the healthiest, most motile sperm. This concentrated sample is placed directly inside the uterus through a soft, thin catheter precisely at the time of ovulation. The procedure requires no anaesthesia and feels similar to a routine gynaecological examination.'
                ]
            },
            {
                kind: 'points',
                heading: 'Who IUI Genuinely Helps',
                items: [
                    { title: 'Mild male factor infertility', description: 'Where washing concentrates enough good sperm.' },
                    { title: 'Cervical factor issues', description: 'Where hostile cervical mucus blocks natural sperm progression.' },
                    { title: 'Ovulation problems', description: 'Combined with induction medicines to ensure perfect timing.' },
                    { title: 'Unexplained infertility', description: 'Especially early in the fertility journey for younger couples.' },
                ]
            },
        ],
        benefits: ['Cost-effective first step', 'Non-surgical, 10 minute procedure', 'Increases sperm concentration at the egg', 'Can be synced with ovulation medications'],
        faq: [
            { q: 'How many IUI cycles should we try before moving to IVF?', a: 'Evidence shows most IUI successes happen within the first 3 to 4 properly monitored cycles. Beyond that, the chance per cycle drops and IVF usually becomes a much wiser investment of your time and money.' },
        ],
        cta: {
            heading: 'Ready to Take the Gentle First Step?',
            paragraph: 'One consultation and a few targeted tests will tell you honestly whether IUI genuinely fits your case, and for how many cycles it is worth trying.',
            primary: 'Book an IUI Consultation',
            secondary: 'WhatsApp Your Reports',
        },
    },
    'ovulation-induction': {
        eyebrow: 'Ovulation Induction',
        title: 'Ovulation Induction and Cycle Monitoring',
        icon: CalendarRange,
        heroDesc: 'Regulating your cycle and identifying the perfect window for conception.',
        sections: [
            {
                kind: 'text',
                heading: 'Overview',
                paragraphs: [
                    'Ovulation induction uses hormonal medications to stimulate the ovaries to produce and release one or more mature eggs. It is primarily used for women who do not ovulate regularly, such as those with PCOS.',
                    'Cycle monitoring involves frequent ultrasound scans and blood tests to track the development of the ovarian follicles and the thickness of the uterine lining.',
                    'This precise tracking allows us to pinpoint the exact window of optimal fertility, drastically improving the chances of natural conception or the success of IUI.'
                ]
            },
        ],
        benefits: ['Restores normal ovulation', 'Highly effective for PCOS', 'Non-invasive monitoring', 'Optimizes timing for conception'],
        faq: [
            { q: 'What medications are used?', a: 'Common medications include Letrozole, Clomid, or injectable gonadotropins, tailored to your specific hormonal profile.' },
            { q: 'Are there side effects?', a: 'Side effects are generally mild and may include hot flashes, mood swings, or bloating. We monitor you closely to ensure safety.' }
        ],
        cta: {
            heading: 'Often, This Is the Only Treatment You Need',
            paragraph: 'For many young couples with an ovulation problem, careful monitoring alone is enough. Let’s find out where you stand.',
            primary: 'Book a Consultation',
        },
    },
    'endometrial-biopsy-era': {
        eyebrow: 'Advanced Diagnostics',
        title: 'Endometrial Biopsy and ERA',
        icon: FileSearch,
        heroDesc: 'Advanced diagnostic evaluation of the uterine lining to identify chronic hidden infections or determine the exact personalized window of implantation for IVF transfers.',
        sections: [
            {
                kind: 'text',
                heading: 'Overview',
                paragraphs: [
                    'If you have experienced repeated IVF transfer failures with good quality embryos, an Endometrial Biopsy or ERA (Endometrial Receptivity Analysis) helps us check the uterine lining for hidden inflammation and pinpoints the exact day your uterine lining is most receptive to an embryo.',
                    'This targeted diagnostic testing removes the guesswork from your next embryo transfer by personalising the timing to your body rather than a standard calendar day.'
                ]
            },
            {
                kind: 'points',
                heading: 'Recommended For',
                items: [
                    { title: 'Repeated IVF implantation failure', description: 'Especially with embryos that were graded as good quality.' },
                    { title: 'Evaluating the uterine environment', description: 'Before committing to another embryo transfer.' },
                ]
            },
        ],
        benefits: ['Personalised implantation window', 'Screens for chronic hidden infection', 'Reduces guesswork on transfer timing', 'Guides the next IVF attempt precisely'],
        faq: [
            { q: 'What is an ERA or Endometrial Biopsy used for?', a: 'If you have experienced repeated IVF transfer failures with good embryos, an Endometrial Biopsy or ERA helps us check for hidden inflammation and pinpoints the exact day your uterine lining is most receptive to an embryo.' },
        ],
        cta: {
            heading: 'Stop Guessing on Your Next Transfer',
            paragraph: 'If previous good-quality embryos have not implanted, this diagnostic step is often the missing piece. Let’s review your cycle history together.',
            primary: 'Book a Consultation',
        },
    },
};

export function generateStaticParams() {
    return Object.keys(treatmentData).map((slug) => ({
        slug: slug,
    }));
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = treatmentData[slug];

    if (!data) {
        notFound();
    }

    const Icon = data.icon;

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
                        <span>{data.title}</span>
                    </div>
                    <div className="max-w-3xl">
                        <div className="chip mb-6 w-fit">
                            <Icon className="w-4 h-4" />
                            {data.eyebrow}
                        </div>
                        <h1 className="display-sm text-slate-900 mb-6">
                            {data.title}
                        </h1>
                        <p className="body-lg text-slate-600 max-w-2xl">
                            {data.heroDesc}
                        </p>
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
                                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{section.heading}</h2>
                                            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                                                {section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                                            </div>
                                        </div>
                                    );
                                }
                                if (section.kind === 'points') {
                                    return (
                                        <div key={si} className="mb-12">
                                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{section.heading}</h2>
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
                                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{section.heading}</h2>
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
                                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
                                            <p className="text-slate-600 text-base leading-relaxed">{section.paragraph}</p>
                                        </div>
                                    );
                                }
                                return null;
                            })}

                            {data.faq.length > 0 && (
                                <>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                                    <div className="space-y-4">
                                        {data.faq.map((f, i) => (
                                            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                                <h4 className="text-lg font-bold text-slate-900 mb-2">{f.q}</h4>
                                                <p className="text-slate-500 leading-relaxed">{f.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                {/* Benefits Card */}
                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h3>
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
                                    <h3 className="text-xl font-bold mb-3 relative z-10">{data.cta.heading}</h3>
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
        </main>
    );
}
