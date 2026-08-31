import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, CheckCircle2, MessageCircle, ChevronRight } from 'lucide-react';
import FaqAccordion from '@/components/FaqAccordion';
import { graph, jsonLdProps, breadcrumb, webPage, faqPage, medicalProcedure, videoObject } from '@/lib/schema';
import { OG_IMAGE } from '@/constants/site';

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
            description: 'IVF (in vitro fertilisation) in Gurugram with Dr. Rashmi Agrawal — embryology lab, ICSI support, and a written estimate before you begin. Book a free consultation.',
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
                    'IVF moves the single most fragile step of conception — the meeting of egg and sperm — out of the body and into a controlled laboratory. Instead of relying on one egg released each month finding its way down a fallopian tube, we stimulate the ovaries to mature several eggs at once, collect them in a short daycare procedure, and fertilise them in the lab. The resulting embryos are grown under monitored temperature, humidity and gas conditions for three to five days before the healthiest one is placed into the uterus.',
                    'That controlled environment is the entire point. It lets us see things that are otherwise invisible: whether the eggs are mature, whether fertilisation actually happens, whether embryos divide normally, and which one has the best chance of implanting. Couples who have spent years with unexplained infertility often get their first real answer during their first IVF cycle, simply because the process is finally observable.',
                    'A common fear deserves answering directly: a child conceived through IVF is fully and genetically your own. The egg is yours, the sperm is your partner\'s, and the laboratory only assists at the point of fertilisation. Nothing about the child\'s genetics, development or health is altered by where conception took place. Decades of follow-up data on IVF-conceived children support this.',
                    'IVF is also not a single fixed protocol. Stimulation drugs, doses, trigger timing, whether to transfer fresh or freeze all embryos, and whether to add ICSI or genetic testing are all decisions made from your own AMH, antral follicle count, age, and any previous cycle response. Two women the same age can be given quite different plans, and that is deliberate rather than inconsistent.',
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
            { q: 'What is the success rate of IVF for women over 35?', a: 'Success depends heavily on ovarian reserve and egg quality, which decline with age. We assess your AMH and antral follicle count first, then give you a realistic, case-specific estimate rather than a generic percentage.' },
            { q: 'How many IVF attempts are usually needed for a successful pregnancy?', a: 'Many couples succeed within 2 to 3 well-planned cycles, though this varies by age and diagnosis. Each cycle\'s protocol is adjusted based on how the previous one responded.' },
            { q: 'Can I work during an IVF cycle?', a: 'Yes, for most of it. Only the day of egg retrieval requires rest, since it is done under short anaesthesia. Many patients continue their normal routine through stimulation and after the transfer.' },
            { q: 'What is the difference between fresh and frozen embryo transfer in IVF?', a: 'A fresh transfer happens 3 to 5 days after retrieval in the same cycle. A frozen transfer uses a vitrified embryo in a later cycle, often with better uterine lining preparation. We recommend whichever gives your case the better chance.' },
        ],
        cta: {
            heading: 'Ready for Real Answers About IVF?',
            paragraph: 'Bring your reports and leave with a personalised protocol, a realistic estimate, and a complete written cost.',
            primary: 'Book a Free IVF Consultation',
            secondary: 'WhatsApp Reports: +91 98117 75369',
        },
    },
    'pgt': {
        eyebrow: 'Preimplantation Genetic Testing',
        title: 'Test the embryo before the transfer.',
        seo: {
            title: 'PGT (Preimplantation Genetic Testing) in Gurgaon',
            description: 'Preimplantation Genetic Testing (PGT) during IVF in Gurugram screens embryos for chromosomal and genetic conditions before transfer. Consult Dr. Rashmi Agrawal.',
        },
        heroDesc: 'A few cells are biopsied from each embryo and screened before transfer — so only a genetically healthy embryo is chosen.',
        heroStats: [
            { label: 'Biopsy Stage', value: 'Day 5–6' },
            { label: 'Cells Taken', value: '5–10' },
            { label: 'Results In', value: '1–2', unit: 'wks' },
            { label: 'Embryo Impact', value: 'None' },
        ],
        videoId: 'aTwR2M7pCMw',
        sections: [
            {
                kind: 'text',
                heading: 'What Is PGT, Really?',
                paragraphs: [
                    'Preimplantation Genetic Testing examines an embryo\'s chromosomes before it is ever transferred. On day five or six of culture, a few cells are removed from the trophectoderm — the outer layer that goes on to form the placenta, not the baby — and analysed while the embryo is safely vitrified. Only embryos with the expected chromosome count are chosen for transfer.',
                    'This matters because chromosomal abnormality is the single largest cause of embryos failing to implant and of early miscarriage. An embryo can look flawless under the microscope, grade beautifully, and still carry an extra or missing chromosome that makes ongoing pregnancy impossible. Appearance alone cannot detect this; only genetic analysis can.',
                    'The proportion of embryos affected rises steadily with maternal age, which is why PGT is discussed most often for women in their late thirties and forties, for couples with recurrent pregnancy loss, and for those whose good-looking embryos have repeatedly failed to implant. It is also used where a specific inherited condition runs in the family.',
                    'It is important to be clear about what PGT does and does not do. It does not improve an embryo — it only tells us which existing embryos are worth transferring. It cannot create a normal embryo where none exists, and if every embryo in a cycle tests abnormal, no transfer takes place. What it reliably does is reduce wasted transfers, shorten the time to a viable pregnancy, and lower the risk of a miscarriage you would otherwise have had to live through.',
                ]
            },
            {
                kind: 'points',
                heading: 'The Three Types of PGT',
                items: [
                    { title: 'PGT-A', description: 'Screens for the correct number of chromosomes — the leading cause of miscarriage and failed implantation.' },
                    { title: 'PGT-M', description: 'Tests for a specific single-gene disorder already known to run in the family.' },
                    { title: 'PGT-SR', description: 'Checks for structural chromosome rearrangements when a parent carries a balanced translocation.' },
                ]
            },
            {
                kind: 'points',
                heading: 'Who Genuinely Needs PGT',
                items: [
                    { title: 'Advanced maternal age', description: 'Chromosomal errors in eggs rise sharply after the mid-30s.' },
                    { title: 'Recurrent pregnancy loss', description: 'When two or more miscarriages remain unexplained.' },
                    { title: 'Repeated implantation failure', description: 'Good quality embryos that haven\'t implanted in prior cycles.' },
                    { title: 'A known genetic condition', description: 'Carried by either partner or seen in a previous pregnancy.' },
                ]
            },
        ],
        benefits: ['Lowers miscarriage risk from chromosomal causes', 'Identifies the embryo most likely to implant', 'Biopsy does not harm the embryo', 'Combines with ICSI and blastocyst culture'],
        faq: [
            { q: 'Does the biopsy damage the embryo?', a: 'No. Cells are taken only from the trophectoderm, the outer layer that goes on to form the placenta, not the inner cell mass that becomes the baby.' },
            { q: 'Do we need PGT for every IVF cycle?', a: 'No. It is recommended selectively — for advanced maternal age, recurrent loss, repeated implantation failure, or a known genetic condition — not as a routine add-on for every couple.' },
            { q: 'Can PGT reveal the gender of the embryo?', a: 'PGT-A does examine sex chromosomes as part of counting the full chromosome set, but disclosure or selection based on gender is strictly prohibited under India\'s PCPNDT Act. We do not disclose or select embryos on that basis.' },
            { q: 'What happens if all embryos test abnormal after PGT?', a: 'This is difficult news, but it means those specific embryos were unlikely to result in a healthy, ongoing pregnancy. We review your case and discuss whether another retrieval cycle, with an adjusted protocol, is worth attempting.' },
            { q: 'Does PGT guarantee a successful pregnancy?', a: 'No. PGT improves your odds by ruling out chromosomally abnormal embryos, but implantation still depends on uterine receptivity and other factors. It raises the chance per transfer; it does not guarantee it.' },
            { q: 'How long do we wait between embryo biopsy and transfer?', a: 'Typically 1 to 2 weeks while results come back from the genetics lab. The embryo stays safely frozen during this time, and we schedule the frozen transfer once your lining is ready.' },
        ],
        cta: {
            heading: 'Find Out If PGT Fits Your Case',
            paragraph: 'PGT is not right for every couple. Bring your history and we will tell you honestly whether it changes your odds.',
            primary: 'Book a PGT Consultation',
            secondary: 'WhatsApp Your Reports',
        },
    },
    'hsg': {
        eyebrow: 'Diagnostic Imaging',
        title: 'See what\'s blocking conception.',
        seo: {
            title: 'HSG Test in Gurgaon',
            description: 'Hysterosalpingography (HSG) in Gurugram checks for blocked fallopian tubes before IUI or IVF. A quick outpatient X-ray procedure with Dr. Rashmi Agrawal.',
        },
        heroDesc: 'A quick X-ray test that maps your fallopian tubes and uterine cavity in one visit.',
        heroStats: [
            { label: 'Procedure Time', value: '15', unit: 'min' },
            { label: 'Ideal Window', value: 'Day 6–11' },
            { label: 'Anaesthesia', value: 'Zero' },
            { label: 'Setting', value: 'Outpatient' },
        ],
        videoId: 'vCpsAUiHm38',
        sections: [
            {
                kind: 'text',
                heading: 'Overview',
                paragraphs: [
                    'A hysterosalpingogram, almost always shortened to HSG, is an X-ray study that maps the inside of the uterus and shows whether the fallopian tubes are open. A fine catheter is passed through the cervix and an iodine-based contrast dye is slowly instilled. Because the dye is visible on X-ray, we can watch in real time as it fills the uterine cavity and then spills out of each tube into the abdomen.',
                    'Two questions get answered in that one short study. First, the shape of the uterine cavity — whether there is a septum, adhesions, polyps or fibroids distorting the space an embryo would need to implant in. Second, tubal patency, meaning whether sperm and egg can physically meet at all. Blocked tubes are a common and completely silent cause of infertility; there are no symptoms, and nothing on an ultrasound will reveal them.',
                    'The test is timed deliberately to days six to eleven of the cycle: after bleeding has finished, so the view is clear, but before ovulation, so there is no risk of disturbing an early pregnancy. The whole appointment takes about fifteen minutes, needs no anaesthesia, and you can drive yourself home afterwards.',
                    'Most women feel cramping similar to strong period pain during the moments the dye is injected, easing within minutes. A simple painkiller taken about an hour beforehand makes a noticeable difference. Light spotting for a day or two afterwards is normal and expected.',
                    'There is a well-documented and welcome side effect. The pressure of the dye can flush out mucus plugs and minor debris, and studies have consistently shown a modest rise in natural conception rates in the two to three months immediately following an HSG — particularly when oil-based contrast is used. It is a diagnostic test that occasionally treats the problem it was sent to find.',
                ]
            },
            {
                kind: 'steps',
                heading: 'What Happens During the Test',
                items: [
                    { step: '01', title: 'Timing and Preparation', description: 'Booked for day 6 to 11 of your cycle. Take a simple painkiller about an hour before you arrive.' },
                    { step: '02', title: 'Positioning', description: 'You lie on an X-ray table much as you would for a routine smear. A speculum is passed to visualise the cervix.' },
                    { step: '03', title: 'Catheter Placement', description: 'A very fine catheter is guided just inside the cervical canal. No incision and no anaesthesia are involved.' },
                    { step: '04', title: 'Contrast Injection', description: 'Iodine-based dye is instilled slowly. This is the point at which cramping is felt, and it lasts under a minute.' },
                    { step: '05', title: 'Live Imaging', description: 'X-ray images are taken as the dye outlines the cavity and then spills from each tube into the abdomen.' },
                    { step: '06', title: 'Going Home', description: 'The speculum is removed and you rest briefly. No sedation is used, so you can drive yourself home.' },
                ]
            },
            {
                kind: 'points',
                heading: 'What the Results Actually Mean',
                items: [
                    { title: 'Both tubes open', description: 'Sperm and egg can meet. Attention shifts to ovulation, sperm quality, or the uterine lining.' },
                    { title: 'One tube blocked', description: 'Natural conception and IUI remain possible through the open side, often with timed monitoring.' },
                    { title: 'Both tubes blocked', description: 'IVF is the clear route, because it bypasses the tubes completely rather than trying to repair them.' },
                    { title: 'Hydrosalpinx', description: 'A fluid-filled, swollen tube. This fluid lowers IVF success and is usually treated before any transfer.' },
                    { title: 'Filling defect in the cavity', description: 'Suggests a polyp, fibroid or adhesion. Hysteroscopy both confirms and treats it in one sitting.' },
                    { title: 'Uterine septum or abnormal shape', description: 'A congenital variation in cavity shape, which may be correctable surgically where it affects implantation.' },
                ]
            },
        ],
        benefits: ['Clear diagnostic imaging', 'Quick outpatient procedure', 'Can flush out minor blockages', 'Guides future treatment plans'],
        faq: [
            { q: 'Does an HSG hurt?', a: 'Some women experience mild to moderate cramping during the injection of the dye. Taking over-the-counter pain medication beforehand can help.' },
            { q: 'When should an HSG be scheduled?', a: 'It is usually scheduled between days 6 and 11 of your menstrual cycle, after bleeding has stopped but before ovulation.' },
            { q: 'Can I get pregnant naturally after an HSG?', a: 'Some women do. The dye flush can temporarily clear minor debris or mild blockages, giving a modest fertility boost in the two to three months immediately following the test.' },
            { q: 'What does a blocked fallopian tube on HSG mean for treatment?', a: 'One blocked tube may still allow natural conception or IUI using the open side. Two blocked tubes usually mean IVF is needed, since it bypasses the tubes entirely.' },
            { q: 'Is HSG done under anaesthesia?', a: 'No. It is a quick outpatient X-ray procedure. Taking a pain reliever an hour before your appointment is usually enough.' },
            { q: 'Can I drive myself home after an HSG?', a: 'Yes. Since no sedation is used, most patients resume normal activities, including driving, the same day.' },
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
            description: 'Fertility-focused hysteroscopy and laparoscopy in Gurugram for polyps, fibroids, endometriosis, and blocked tubes. Day-case surgery with Dr. Rashmi Agrawal.',
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
                    'Both of these are keyhole procedures, and both use a camera — but they look at different things. A hysteroscopy passes a thin telescope through the cervix to inspect the inside of the uterine cavity, with no cuts at all. A laparoscopy uses small abdominal incisions to view the outside of the uterus, the ovaries, the tubes and the pelvis. They are frequently done in the same sitting, because between them they cover nearly everything an ultrasound cannot.',
                    'The distinction that matters in fertility surgery is intent. General gynaecological surgery aims to remove disease. Fertility surgery aims to remove disease while protecting every bit of ovarian reserve and healthy tissue, because that reserve is the raw material of any future pregnancy. Removing an endometriotic cyst carelessly can strip away normal ovarian tissue along with it and leave a woman with fewer eggs than she started with. The technique used, the energy settings, and how tissue planes are handled all change the outcome.',
                    'The other major advantage is that diagnosis and treatment happen together. A polyp seen on hysteroscopy is removed in the same procedure. Adhesions found on laparoscopy are divided then and there. Endometriosis is staged and excised in one anaesthetic rather than being confirmed in one operation and treated in another.',
                    'These are day-case procedures. Most patients arrive in the morning, go home the same evening, and are back to routine activity within one to seven days depending on what was done. Recovery from a diagnostic hysteroscopy is usually a matter of hours; a laparoscopy for extensive endometriosis takes longer.',
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
            { q: 'How long is the recovery?', a: 'Recovery from a hysteroscopy is very fast (1-2 days). Laparoscopy may require a few days to a week of rest before returning to normal activities.' },
            { q: 'Can hysteroscopy improve IVF success rates?', a: 'Yes, when it corrects a genuine structural problem like a polyp or septum affecting implantation. It is not recommended as a routine add-on without a specific finding on your scan.' },
            { q: 'Is laparoscopy safe for women trying to conceive?', a: 'Yes, when performed with a fertility-first approach that preserves ovarian tissue. It is often the only way to accurately diagnose and treat endometriosis, which imaging alone can miss.' },
            { q: 'How soon can we try to conceive after hysteroscopy or laparoscopy?', a: 'Usually after one full menstrual cycle for hysteroscopy, and one to two cycles for laparoscopy, to allow tissue to heal. We confirm the right timing for your specific procedure at your follow-up visit.' },
            { q: 'What are the signs of a uterine septum affecting fertility?', a: 'A septum is often silent until repeated miscarriage or failed implantation prompts an ultrasound or hysteroscopy. It is one of the few structural causes that is fully correctable in a single day-case procedure.' },
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
            description: 'ICSI in Gurugram for severe male factor infertility — one sperm injected directly into the egg, 70–85% fertilisation. Consult Dr. Rashmi Agrawal.',
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
                    'In conventional IVF, prepared sperm and eggs are placed together in a dish and fertilisation is left to happen on its own. ICSI removes that uncertainty entirely. An embryologist selects one healthy, motile sperm, immobilises it, and injects it directly into the centre of a mature egg using a glass needle finer than a human hair, under high magnification.',
                    'The reason this exists is simple: fertilisation involves several steps where sperm can fail. It must reach the egg, bind to the outer shell, penetrate it, and fuse with the inner membrane. When sperm count is very low, motility is poor, or shape is abnormal, one or more of those steps may never happen — and in a conventional IVF dish the result is no fertilised eggs at all, discovered only the following morning.',
                    'ICSI bypasses every one of those hurdles. It is why azoospermic men whose sperm has to be retrieved surgically can still father genetically their own children: even a handful of viable sperm cells is enough, because only one is needed per egg.',
                    'It is worth setting expectations honestly. ICSI reliably solves the fertilisation step, and typically achieves fertilisation in around seven to eight of every ten mature eggs injected. What it does not do is improve egg quality or guarantee a good embryo. A fertilised egg still has to divide correctly and reach blastocyst. ICSI is a precise answer to a specific problem — sperm failing to fertilise — not a general upgrade to IVF, and it is recommended when there is a reason for it rather than by default.',
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
            { q: 'Does ICSI increase the risk of birth defects?', a: 'Large studies show only a small increase in risk, largely linked to the underlying male infertility itself rather than the ICSI procedure. We discuss this openly, and genetic counselling is available where relevant.' },
            { q: 'Can ICSI be used with frozen sperm?', a: 'Yes. ICSI is often the preferred method with frozen or previously frozen sperm samples, since it only requires a single viable sperm per egg.' },
            { q: 'What sperm count is too low for conventional IVF and needs ICSI?', a: 'There is no single cutoff — motility and morphology matter as much as count. We review your full semen analysis and recommend ICSI whenever conventional fertilisation looks unreliable.' },
            { q: 'How many eggs are needed for a successful ICSI cycle?', a: 'More mature eggs improve the odds of at least one good embryo, but success has been achieved with as few as one or two. Your stimulation protocol is planned around your ovarian reserve.' },
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
            description: 'Surgical sperm retrieval in Gurugram for azoospermia — PESA, TESA, and Micro TESE, coordinated with ICSI. Consult Dr. Rashmi Agrawal for a personalised evaluation.',
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
                    'Azoospermia means no sperm at all in the ejaculate. It affects roughly one per cent of men and around ten to fifteen per cent of men presenting with infertility, and for most it comes as a complete shock — there are no symptoms, and sexual function is usually entirely normal. The diagnosis should never be made on a single sample; it requires at least two properly centrifuged semen analyses.',
                    'The critical distinction is between obstructive and non-obstructive azoospermia, because they are different problems with different solutions. In obstructive azoospermia the testes produce sperm perfectly well, but the pathway out is blocked — by a previous vasectomy, infection, injury, or congenital absence of the vas deferens. In non-obstructive azoospermia the plumbing is open, but sperm production itself is impaired.',
                    'That distinction is what decides the technique. Where there is an obstruction, sperm can usually be collected easily from the epididymis or testis with a needle, and success rates are very high. Where production is the problem, sperm may still exist in isolated pockets within the testis, and finding them requires microsurgical exploration of the tissue under an operating microscope.',
                    'Before any surgery, a proper workup is essential: hormone profile including FSH, testosterone and prolactin, testicular volume assessment, scrotal ultrasound, and karyotype with Y-chromosome microdeletion screening where indicated. These results predict both the likelihood of finding sperm and whether a genetic cause exists that should be discussed before conception.',
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
                    'Surgically retrieved sperm is never numerous and is often immotile or immature, which means it can only be used with ICSI — a single sperm injected directly into each egg. That makes timing between the andrology and IVF sides of the process critical rather than incidental.',
                    'There are two workable approaches. Retrieval can be scheduled on the same day as the female partner\'s egg collection, so fresh sperm meets fresh eggs. Or sperm can be retrieved in advance and cryopreserved, which is often the better choice: it confirms sperm actually exists before committing the female partner to a full stimulation cycle, and it avoids the distressing scenario of eggs being collected on the day only to find nothing to fertilise them with.',
                    'Recovery from retrieval itself is straightforward. It is a daycare procedure under short anaesthesia, and most men return to desk work within two to three days, with scrotal support and avoidance of heavy lifting for about a week. Mild swelling and discomfort for a few days is normal.',
                    'One point deserves emphasis for couples arriving after being told nothing can be done. A diagnosis of azoospermia is not, by itself, a diagnosis of sterility. With the right workup and the right retrieval technique, a substantial proportion of these men go on to have genetically their own children.',
                ]
            },
        ],
        benefits: ['Restores biological fatherhood in azoospermia', 'Micro TESE finds sperm in 40–60% of non-obstructive cases', 'Can be timed with retrieval or frozen in advance', 'Minimal downtime for PESA and TESA'],
        faq: [
            { q: 'My husband has zero sperm count. Can we still have a biological child?', a: 'Often, yes. Through Surgical Sperm Retrieval techniques like PESA, TESA, or Micro TESE, we can safely extract sperm directly from the reproductive tract to use with ICSI.' },
            { q: 'What is the difference between obstructive and non-obstructive azoospermia?', a: 'In obstructive azoospermia, sperm production is normal but a blockage stops sperm reaching the ejaculate, so PESA or TESA usually succeed. In non-obstructive azoospermia, the testicles produce very little sperm, so Micro TESE, which examines tissue under a microscope to find isolated productive areas, is generally recommended.' },
            { q: 'Is Micro TESE painful or does it require hospital admission?', a: 'It is performed under general or regional anaesthesia as day-case surgery. Most men experience mild scrotal discomfort for a few days, managed with routine pain relief.' },
            { q: 'Can sperm retrieved surgically be frozen for future use?', a: 'Yes. Retrieved sperm is commonly frozen immediately, so a single successful retrieval can support more than one ICSI attempt without repeat surgery.' },
            { q: 'What tests are done before recommending surgical sperm retrieval?', a: 'A hormonal profile (FSH, LH, testosterone), a physical examination, and often a genetic test for Y-chromosome microdeletions or karyotype abnormalities, to understand the cause and the realistic chance of finding sperm.' },
            { q: 'What happens if no sperm is found during Micro TESE?', a: 'This happens in some non-obstructive cases despite the procedure\'s high yield. We discuss donor sperm options at that point, always led by what you and your partner decide.' },
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
            description: 'Intrauterine insemination (IUI) in Gurugram for mild male factor, cervical issues, and unexplained infertility. A 10-minute procedure with Dr. Rashmi Agrawal.',
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
                    'Intrauterine insemination is often described as a gentler alternative to IVF, which sets the wrong expectation from the start. IUI is not a weaker IVF. It is a different intervention solving a different problem, and understanding that distinction saves couples a great deal of time and money.',
                    'What IUI actually does is shorten the journey sperm has to make and improve its quality on arrival. A semen sample is washed and concentrated in the laboratory, removing seminal fluid, dead sperm and debris, and the resulting concentrated preparation of motile sperm is placed directly into the uterine cavity with a fine catheter at the precise moment of ovulation. The cervix, which filters out the large majority of sperm in natural intercourse, is bypassed completely.',
                    'What IUI cannot do is equally important. It cannot fix blocked fallopian tubes, because sperm and egg still have to meet inside the tube. It cannot compensate for severely low sperm counts, because it concentrates what is there rather than creating more. And it cannot overcome poor egg quality. For those situations IUI is not a gentler first step — it is simply the wrong tool, and attempting it delays effective treatment.',
                    'The evidence on how many cycles to attempt is consistent and worth taking seriously. The great majority of IUI successes occur within the first three to four properly monitored cycles. Beyond that the per-cycle chance falls off sharply, and continuing becomes a poor use of both time and money. A candid conversation at that point about moving to IVF is not a failure of the treatment; it is the treatment working as intended, having ruled out what it could.',
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
            {
                kind: 'steps',
                heading: 'What an IUI Cycle Involves',
                items: [
                    { step: '01', title: 'Confirm It Is Appropriate', description: 'At least one open tube on HSG and an adequate motile sperm count. Without both, IUI is the wrong treatment.' },
                    { step: '02', title: 'Cycle Preparation', description: 'Either a natural tracked cycle, or mild stimulation with tablets to recruit one or two mature follicles.' },
                    { step: '03', title: 'Follicular Monitoring', description: 'Scans track follicle growth so the insemination lands on the day of ovulation rather than near it.' },
                    { step: '04', title: 'Trigger', description: 'An injection sets ovulation to a predictable point, usually about 36 hours ahead.' },
                    { step: '05', title: 'Sperm Preparation', description: 'The sample is washed and concentrated in the lab on the day, isolating the most motile fraction.' },
                    { step: '06', title: 'The Insemination', description: 'A soft catheter places the prepared sperm into the uterus. It takes minutes, needs no anaesthesia, and feels much like a smear.' },
                    { step: '07', title: 'Review After 3 to 4 Cycles', description: 'If IUI has not worked within that window, an honest reassessment matters more than repeating it further.' },
                ]
            },
        ],
        benefits: ['Cost-effective first step', 'Non-surgical, 10 minute procedure', 'Increases sperm concentration at the egg', 'Can be synced with ovulation medications'],
        faq: [
            { q: 'How many IUI cycles should we try before moving to IVF?', a: 'Evidence shows most IUI successes happen within the first 3 to 4 properly monitored cycles. Beyond that, the chance per cycle drops and IVF usually becomes a much wiser investment of your time and money.' },
            { q: 'What is the success rate of IUI per cycle?', a: 'It varies with age, sperm parameters, and the underlying cause. We give you a case-specific estimate rather than a generic number, since averages can be misleading for any one couple.' },
            { q: 'Is bed rest needed after IUI?', a: 'No. You can resume normal activities immediately. Some clinics suggest resting for 10 to 15 minutes afterward, but there is no evidence it changes the outcome.' },
            { q: 'Can IUI be done with frozen sperm?', a: 'Yes, including donor sperm from a registered ART bank, which is always frozen and quarantined per ART Act 2021 requirements.' },
            { q: 'What are the signs of a successful IUI before the pregnancy test?', a: 'There genuinely are not reliable early signs — implantation symptoms are too similar to normal premenstrual changes. We ask patients to wait for the blood test around day 14 rather than reading into symptoms.' },
            { q: 'Does IUI work for unexplained infertility?', a: 'It is often the first treatment tried, since it is simple and non-invasive. If 3 to 4 well-timed cycles do not succeed, we move to a more definitive option like IVF.' },
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
            description: 'Ovulation induction and cycle monitoring in Gurugram for PCOS and irregular ovulation. Medication and tracking scans with Dr. Rashmi Agrawal.',
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
                    'Ovulation induction is the simplest fertility treatment there is, and for the right patient it is the only one needed. Its purpose is narrow and specific: to help the ovaries release a mature egg in women who are not ovulating reliably, or at all. Where absent ovulation is the whole problem, restoring it restores fertility.',
                    'Irregular or absent ovulation is one of the most common causes of infertility, and polycystic ovary syndrome accounts for a large share of it. Cycles that are consistently longer than thirty-five days, wildly unpredictable, or absent for months are the usual clue. Some women ovulate occasionally rather than never, which is why conception sometimes happens spontaneously but takes far longer than expected.',
                    'Treatment usually begins with tablets taken for five days early in the cycle — letrozole or clomiphene citrate — which prompt the pituitary to drive follicle development. Letrozole has become the preferred first choice in PCOS, with better ovulation and live birth rates and a thinner effect on the endometrium than clomiphene. If tablets alone do not produce a response, low-dose injectable gonadotropins are the next step.',
                    'The part that genuinely matters, and the part most often skipped, is monitoring. Serial ultrasound scans track how many follicles are developing and how large they are, so that intercourse or IUI can be timed to the mature follicle rather than to a calendar. Monitoring also guards against the two real risks of stimulating ovaries: over-response, which can lead to ovarian hyperstimulation, and multiple pregnancy from several follicles maturing at once. Unmonitored ovulation induction is where most avoidable complications come from.',
                    'Expect this to be given a fair but finite trial. Most successes occur within the first three to six ovulatory cycles. If ovulation is being achieved consistently and pregnancy still has not happened, that itself is useful information — it means something beyond ovulation needs investigating.',
                ]
            },
            {
                kind: 'points',
                heading: 'Who This Genuinely Helps',
                items: [
                    { title: 'PCOS', description: 'The single most common indication. Ovaries hold many small follicles but rarely release a mature egg.' },
                    { title: 'Irregular cycles', description: 'Cycles consistently beyond 35 days, or unpredictable enough that timing intercourse is guesswork.' },
                    { title: 'Absent periods', description: 'No bleeding for months, once pregnancy, thyroid and prolactin causes have been excluded.' },
                    { title: 'Luteal phase concerns', description: 'Ovulation happens but the second half of the cycle is too short to support implantation.' },
                    { title: 'Unexplained infertility', description: 'Used with IUI to recruit slightly more than one follicle and improve per-cycle odds.' },
                    { title: 'Not suitable for', description: 'Blocked tubes or severe male factor. Inducing ovulation cannot help if egg and sperm still cannot meet.' },
                ]
            },
            {
                kind: 'steps',
                heading: 'How a Monitored Cycle Runs',
                items: [
                    { step: '01', title: 'Baseline Scan', description: 'A scan on day 2 or 3 confirms no residual cyst and that the lining has shed properly before starting.' },
                    { step: '02', title: 'Tablets Begin', description: 'Letrozole or clomiphene is taken for five days, typically from day 2 to day 6 of the cycle.' },
                    { step: '03', title: 'Follicular Tracking', description: 'Scans from around day 9 measure how many follicles are growing and how fast, adjusting expectations in real time.' },
                    { step: '04', title: 'Trigger Injection', description: 'Once a follicle reaches roughly 18 to 20 mm, an injection triggers release about 36 hours later.' },
                    { step: '05', title: 'Timed Intercourse or IUI', description: 'Intercourse or insemination is scheduled to that 36-hour window rather than to a calendar estimate.' },
                    { step: '06', title: 'Luteal Support and Test', description: 'Progesterone support where indicated, then a blood test about two weeks later to confirm the result.' },
                ]
            },
        ],
        benefits: ['Restores normal ovulation', 'Non-invasive PCOS management', 'Ultrasound and blood test monitoring', 'Optimizes timing for conception'],
        faq: [
            { q: 'What medications are used?', a: 'Common medications include Letrozole, Clomid, or injectable gonadotropins, tailored to your specific hormonal profile.' },
            { q: 'Are there side effects?', a: 'Side effects are generally mild and may include hot flashes, mood swings, or bloating. We monitor you closely to ensure safety.' },
            { q: 'How do I know if ovulation induction is working?', a: 'We track it directly with follicle-tracking ultrasounds and, where needed, a blood progesterone test after ovulation — rather than relying on ovulation predictor kits alone, which can be unreliable in PCOS.' },
            { q: 'Can ovulation induction cause a multiple pregnancy?', a: 'There is a modest increase in twin risk with oral medication and a higher one with injectable gonadotropins, which is exactly why we monitor follicle growth closely and adjust or cancel a cycle if too many follicles develop.' },
            { q: 'How many cycles of ovulation induction should we try?', a: 'Most pregnancies from ovulation induction happen within 3 to 6 monitored cycles. Beyond that, we re-evaluate rather than repeating the same approach indefinitely.' },
            { q: 'Does PCOS affect how ovulation induction medication is dosed?', a: 'Yes. PCOS ovaries are more sensitive to stimulation, so we typically start at a lower dose and increase gradually to avoid overstimulation.' },
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
            description: 'Endometrial biopsy and ERA (endometrial receptivity analysis) in Gurugram after repeated IVF implantation failure. Consult Dr. Rashmi Agrawal.',
        },
        heroDesc: 'Pinpoints your uterine lining\'s exact receptive window after repeated implantation failure.',
        heroStats: [
            { label: 'Purpose', value: 'Timing Window' },
            { label: 'Suited For', value: 'Repeated Failure' },
            { label: 'Setting', value: 'Outpatient' },
            { label: 'Result', value: 'Personalised Day' },
        ],
        videoId: 'lQqd21cAGHE',
        sections: [
            {
                kind: 'text',
                heading: 'Overview',
                paragraphs: [
                    'The endometrium is only receptive to an embryo for a short span of time each cycle, commonly called the window of implantation. Standard practice assumes that window falls at the same point for everyone and schedules the transfer accordingly. For most women that assumption holds. For a minority it does not, and their window is shifted earlier or later by a day or more — which means a perfectly good embryo can be transferred into a uterus that simply is not ready for it.',
                    'Endometrial Receptivity Analysis is designed to find those cases. A small sample of endometrial tissue is taken in a mock cycle that exactly mimics the hormonal preparation of a real frozen embryo transfer. The sample is analysed for the expression pattern of a large panel of genes involved in implantation, and the result reports whether the endometrium was receptive at the moment of biopsy, or whether it was pre-receptive or post-receptive.',
                    'If the window is shifted, the fix is precise rather than dramatic: the next transfer is moved forward or back by the number of hours the test indicates. This is called a personalised embryo transfer, and it converts an educated guess about timing into a measured one.',
                    'The biopsy itself is a brief outpatient procedure needing no anaesthesia, comparable to an IUD insertion, with cramping for a short period afterwards. Because the sample must be taken in a mock cycle, it does add one cycle before the transfer that follows.',
                    'This test is not part of routine IVF, and should not be. It is aimed at a specific group: women with repeated implantation failure — good-quality embryos transferred into a normal-looking cavity that have nonetheless not implanted — once the more common explanations have been excluded. Offering it to everyone adds cost and delay without benefit, and it is worth being told plainly whether your history actually fits the indication.',
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
            { q: 'Is an ERA test painful?', a: 'It feels similar to an endometrial biopsy or a Pap smear — a brief cramping sensation during the sample collection, which resolves quickly. No anaesthesia is needed.' },
            { q: 'When is ERA testing done in the cycle?', a: 'It is done in a mock cycle that mimics your actual embryo transfer protocol, so the endometrial lining is prepared exactly as it would be for a real transfer.' },
            { q: 'How many embryo transfer failures before an ERA is recommended?', a: 'Typically after two or more transfers of good-quality embryos have failed to implant, since ERA is a targeted test rather than a routine first step.' },
            { q: 'Does the ERA result change with every cycle?', a: 'No, the receptive window identified by ERA is generally stable for that patient and is used to plan future transfers without repeating the test each time.' },
            { q: 'What is checked in an endometrial biopsy besides receptivity?', a: 'We also screen for chronic endometritis, a low-grade hidden infection that can silently interfere with implantation even when embryos are healthy.' },
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
            type: 'article',
            images: [OG_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: data.seo.title,
            description: data.seo.description,
            images: [OG_IMAGE.url],
        },
    };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = treatmentData[slug];

    if (!data) {
        notFound();
    }

    const path = `/treatments/${slug}`;
    const doc = graph([
        webPage({ path, name: data.seo.title, description: data.seo.description, medical: true }),
        breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Treatments', path: '/treatments' },
            { name: data.eyebrow, path },
        ]),
        medicalProcedure({
            name: data.eyebrow,
            description: data.heroDesc,
            path,
            howPerformed: data.sections
                .filter((sec): sec is StepsSection => sec.kind === 'steps')
                .flatMap((sec) => sec.items.map((it) => `${it.title}: ${it.description}`))
                .join(' ') || undefined,
        }),
        faqPage(data.faq, path),
        // The hero video's <iframe> is always server-rendered, but without
        // VideoObject markup Google has no reliable signal to index it as
        // video content rather than just an embedded element on the page.
        videoObject({
            ytId: data.videoId,
            name: `${data.eyebrow} — Overview`,
            description: data.heroDesc,
            // No uploadDate passed: videoObject() resolves the video's real
            // upload date from constants/videoUploadDates.ts by videoId. A
            // hardcoded placeholder here previously failed Search Console
            // validation ("missing a time zone" / "invalid datetime value").
        }),
    ]);

    return (
        <main className="min-h-screen bg-slate-50">
            <script {...jsonLdProps(doc)} />
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
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black mb-6">{data.title}</h1>
                            <p className="body-lg max-w-2xl mb-8">{data.heroDesc}</p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {data.heroStats.map((stat, i) => (
                                    <div key={i} className="card" style={{ padding: '1.25rem' }}>
                                        <div className="body-sm">{stat.label}</div>
                                        <div className="text-lg md:text-xl font-semibold mt-1 text-balance" style={{ letterSpacing: '-0.02em' }}>
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
                                            <a href="https://wa.me/919811775369" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-bold transition-colors">
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
