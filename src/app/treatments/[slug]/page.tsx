import React from 'react';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Baby, TestTube, ScanSearch, Stethoscope, Syringe, TestTube2, CalendarRange, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

const treatmentData: Record<string, any> = {
    'ivf': {
        title: 'In Vitro Fertilization (IVF)',
        icon: Baby,
        heroDesc: 'Advanced reproductive technology to help you build your family when natural conception is challenging.',
        details: [
            'In Vitro Fertilization (IVF) is one of the most effective forms of assisted reproductive technology available today. The process involves stimulating the ovaries to produce multiple eggs, retrieving them, and fertilizing them with sperm in a specialized laboratory.',
            'Once fertilized, the resulting embryos are closely monitored for quality and development. The healthiest embryo is then carefully transferred back into the uterus.',
            'Our clinic utilizes state-of-the-art incubation and genetic screening technologies to maximize the chances of a successful and healthy pregnancy.'
        ],
        benefits: ['High success rates', 'Option for genetic screening (PGT)', 'Suitable for unexplained infertility', 'Bypasses fallopian tube issues'],
        faq: [
            { q: 'How long does one IVF cycle take?', a: 'A typical IVF cycle takes about 4 to 6 weeks from the start of ovarian stimulation to the pregnancy test.' },
            { q: 'Is IVF painful?', a: 'Most patients experience only mild discomfort. The egg retrieval is performed under light sedation, so you won\'t feel pain during the procedure.' }
        ]
    },
    'insemination': {
        title: 'Insemination',
        icon: TestTube,
        heroDesc: 'A straightforward, minimally invasive treatment to increase the chances of fertilization.',
        details: [
            'Insemination is a fertility treatment that involves placing concentrated sperm directly into a woman\'s reproductive tract to facilitate fertilization. This procedure is timed perfectly with ovulation.',
            'It is often recommended as a first-line treatment for couples facing mild male factor infertility, cervical mucus problems, or unexplained infertility.',
            'The procedure is quick, virtually painless, and is performed right in our clinic without the need for anesthesia.'
        ],
        benefits: ['Minimally invasive', 'Lower cost than IVF', 'Natural conception process', 'Quick recovery time'],
        faq: [
            { q: 'Do I need medication for insemination?', a: 'It depends on your specific case. It can be done during a natural cycle or with medications to stimulate ovulation.' },
            { q: 'What is the success rate?', a: 'Success rates vary depending on age and underlying fertility issues, typically ranging from 10% to 20% per cycle.' }
        ]
    },
    'hsg': {
        title: 'Hysterosalpingography (HSG)',
        icon: ScanSearch,
        heroDesc: 'A vital diagnostic procedure to evaluate the health of your fallopian tubes and uterine cavity.',
        details: [
            'An HSG is an X-ray test that uses a contrast dye to outline the internal shape of the uterus and show whether the fallopian tubes are open or blocked.',
            'This is a crucial step in the fertility evaluation process, as open fallopian tubes are necessary for natural conception and IUI treatments.',
            'In addition to being diagnostic, the flushing of the tubes with the dye can sometimes increase fertility in the months immediately following the procedure.'
        ],
        benefits: ['Clear diagnostic imaging', 'Quick outpatient procedure', 'Can flush out minor blockages', 'Guides future treatment plans'],
        faq: [
            { q: 'Does an HSG hurt?', a: 'Some women experience mild to moderate cramping during the injection of the dye. Taking over-the-counter pain medication beforehand can help.' },
            { q: 'When is the best time to have an HSG?', a: 'It is usually scheduled between days 6 and 11 of your menstrual cycle, after bleeding has stopped but before ovulation.' }
        ]
    },
    'hysteroscopy-laproscopy': {
        title: 'Hysteroscopy & Laparoscopy',
        icon: Stethoscope,
        heroDesc: 'Minimally invasive surgical techniques to diagnose and correct structural fertility issues.',
        details: [
            'Hysteroscopy allows us to look inside the uterus to diagnose and treat causes of abnormal bleeding, repeated miscarriages, or infertility, such as polyps or fibroids.',
            'Laparoscopy is used to examine the pelvic organs. It is the gold standard for diagnosing and treating endometriosis, pelvic adhesions, and ovarian cysts.',
            'Both procedures are minimally invasive, utilizing tiny cameras and instruments, leading to less pain, minimal scarring, and much faster recovery times compared to open surgery.'
        ],
        benefits: ['Corrects physical barriers to pregnancy', 'Minimally invasive', 'Fast recovery', 'Highly precise targeted treatment'],
        faq: [
            { q: 'Will I need to stay in the hospital?', a: 'No, these are typically performed as day-case surgeries. Most patients go home the same day.' },
            { q: 'How long is the recovery?', a: 'Recovery from a hysteroscopy is very fast (1-2 days). Laparoscopy may require a few days to a week of rest before returning to normal activities.' }
        ]
    },
    'icsi': {
        title: 'Intracytoplasmic Sperm Injection (ICSI)',
        icon: Syringe,
        heroDesc: 'A highly specialized IVF technique designed to overcome severe male infertility.',
        details: [
            'ICSI is an advanced laboratory procedure used alongside IVF. Instead of mixing sperm and eggs in a dish, a single, healthy sperm is carefully selected and injected directly into the center of the egg.',
            'This technique is revolutionary for couples dealing with low sperm count, poor sperm motility, or abnormally shaped sperm.',
            'With ICSI, the fertilization rates are significantly improved, offering a powerful solution for male-factor infertility.'
        ],
        benefits: ['Overcomes severe male infertility', 'Maximizes fertilization rates', 'Requires very few healthy sperm', 'Can be used with surgically extracted sperm'],
        faq: [
            { q: 'Is ICSI safe?', a: 'Yes, ICSI is a safe and well-established procedure that has been used successfully for decades to help millions of couples.' },
            { q: 'Does ICSI increase the chance of twins?', a: 'The risk of multiples depends on the number of embryos transferred, not the ICSI procedure itself.' }
        ]
    },
    'iui': {
        title: 'Intrauterine Insemination (IUI)',
        icon: TestTube2,
        heroDesc: 'A targeted fertility treatment that gives sperm a head start in the fertilization process.',
        details: [
            'IUI involves placing specially washed and concentrated sperm directly into the uterus right around the time the ovary releases one or more eggs.',
            'By bypassing the cervix, IUI ensures a higher number of sperm reach the fallopian tubes, increasing the chance of the sperm meeting the egg.',
            'It is a highly accessible, less invasive, and cost-effective first step for couples dealing with unexplained infertility or mild male factor issues.'
        ],
        benefits: ['Cost-effective first step', 'Non-surgical procedure', 'Increases sperm concentration at the egg', 'Can be synced with ovulation medications'],
        faq: [
            { q: 'How is the sperm prepared?', a: 'The semen sample is "washed" in the lab to separate the active, healthy sperm from the seminal fluid and sluggish sperm.' },
            { q: 'Can IUI guarantee a pregnancy?', a: 'While it significantly increases the chances over natural conception, success depends on various factors. Multiple cycles may be recommended.' }
        ]
    },
    'ovulation-induction': {
        title: 'Ovulation Induction & Monitoring',
        icon: CalendarRange,
        heroDesc: 'Regulating your cycle and identifying the perfect window for conception.',
        details: [
            'Ovulation induction uses hormonal medications to stimulate the ovaries to produce and release one or more mature eggs. It is primarily used for women who do not ovulate regularly, such as those with PCOS.',
            'Cycle monitoring involves frequent ultrasound scans and blood tests to track the development of the ovarian follicles and the thickness of the uterine lining.',
            'This precise tracking allows us to pinpoint the exact window of optimal fertility, drastically improving the chances of natural conception or the success of IUI.'
        ],
        benefits: ['Restores normal ovulation', 'Highly effective for PCOS', 'Non-invasive monitoring', 'Optimizes timing for conception'],
        faq: [
            { q: 'What medications are used?', a: 'Common medications include Letrozole, Clomid, or injectable gonadotropins, tailored to your specific hormonal profile.' },
            { q: 'Are there side effects?', a: 'Side effects are generally mild and may include hot flashes, mood swings, or bloating. We monitor you closely to ensure safety.' }
        ]
    }
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
            <Nav />
            
            {/* HERO SECTION */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden border-b border-slate-100">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <div className="container mx-auto px-5 md:px-12 lg:px-20 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 border border-pink-100 mb-6">
                            <Icon className="w-4 h-4 text-pink-600" />
                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-pink-600">
                                Treatment Profile
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                            {data.title}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl">
                            {data.heroDesc}
                        </p>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-5 md:px-12 lg:px-20">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        
                        {/* Left Content */}
                        <div className="lg:col-span-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed mb-12">
                                {data.details.map((p: string, i: number) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {data.faq.map((f: any, i: number) => (
                                    <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{f.q}</h4>
                                        <p className="text-slate-500 leading-relaxed">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                {/* Benefits Card */}
                                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8">
                                    <h3 className="text-xl font-bold text-slate-900 mb-6">Key Benefits</h3>
                                    <ul className="space-y-4">
                                        {data.benefits.map((b: string, i: number) => (
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
                                    <h3 className="text-xl font-bold mb-3 relative z-10">Start Your Journey</h3>
                                    <p className="text-slate-400 text-sm mb-6 relative z-10">
                                        Schedule a consultation with Dr. Rashmi Agarwal to discuss if {data.title} is right for you.
                                    </p>
                                    <a href="/#book" className="flex items-center justify-center gap-2 w-full py-4 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-bold transition-colors relative z-10">
                                        <Calendar className="w-4 h-4" />
                                        Book Consultation
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
