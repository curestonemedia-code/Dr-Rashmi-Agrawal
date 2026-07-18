'use client';
import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import {
    cleanText,
    normalizeIndianPhone,
    validateIndianPhone,
    validateName,
    validateOptionalDescription,
    validateOptionalEmail,
} from '@/utils/formValidation';
import { sendCrmLead } from '@/utils/crmWebhook';

type FormField = 'name' | 'phone' | 'email' | 'message';
type FormErrors = Partial<Record<FormField, string>>;

const baseFieldClass =
    'w-full px-4 py-3 bg-white border rounded-xl outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-500/30 transition text-slate-900';

function getFieldClass(field: FormField, errors: FormErrors) {
    return `${baseFieldClass} ${errors[field] ? 'border-red-300 bg-red-50 focus:border-red-500' : 'border-slate-200'}`;
}

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="mt-1.5 text-xs font-bold text-red-600" role="alert">{message}</p>;
}

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [whatsappHref, setWhatsappHref] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const phone = normalizeIndianPhone(form.get('phone'));
        const data = {
            name: cleanText(form.get('name')),
            phone,
            email: cleanText(form.get('email')),
            city: cleanText(form.get('city')),
            message: cleanText(form.get('message')),
            callback: cleanText(form.get('callback')),
        };

        const nextErrors: FormErrors = {
            name: validateName(data.name),
            phone: validateIndianPhone(phone),
            email: validateOptionalEmail(data.email),
            message: validateOptionalDescription(data.message),
        };
        const activeErrors = Object.fromEntries(Object.entries(nextErrors).filter(([, v]) => v));
        if (Object.keys(activeErrors).length > 0) {
            setErrors(activeErrors);
            const firstField = Object.keys(activeErrors)[0];
            e.currentTarget.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
            return;
        }

        setErrors({});
        setLoading(true);

        const whatsappText = [
            'New enquiry from the website contact form:',
            `Name: ${data.name}`,
            `Phone: ${phone}`,
            data.email ? `Email: ${data.email}` : null,
            data.city ? `City: ${data.city}` : null,
            data.callback ? `Preferred callback time: ${data.callback}` : null,
            data.message ? `Message: ${data.message}` : null,
        ].filter(Boolean).join('\n');
        setWhatsappHref(`https://wa.me/918800263884?text=${encodeURIComponent(whatsappText)}`);

        const description = [
            data.message || null,
            data.callback ? `Preferred callback: ${data.callback}` : null,
        ].filter(Boolean).join(' | ') || 'No description';

        try {
            await sendCrmLead({
                form_type: 'book_appointment',
                name: data.name,
                phone,
                state: data.city || 'Not Specified',
                stoneSize: 'Not Applicable',
                consultationType: 'General Enquiry (Contact Page)',
                email: data.email || undefined,
                description,
            });
            setSubmitted(true);
        } catch {
            alert('There was a connection issue. Please try again or call us directly.');
        } finally {
            setLoading(false);
        }
    }

    if (submitted) {
        return (
            <div className="flex flex-col items-center text-center py-10">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                </div>
                <p className="font-bold text-slate-900 mb-2">Thank you — we&apos;ve received your enquiry</p>
                <p className="text-slate-500 text-sm max-w-sm mb-6">
                    Our coordinator will call or WhatsApp you within 24 hours to confirm your consultation.
                </p>
                <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all"
                >
                    <MessageCircle className="w-4 h-4" /> Also Send on WhatsApp
                </a>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Name *</label>
                    <input required id="name" name="name" type="text" minLength={2} maxLength={80} aria-invalid={Boolean(errors.name)} className={getFieldClass('name', errors)} />
                    <FieldError message={errors.name} />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone *</label>
                    <input required id="phone" name="phone" type="tel" inputMode="numeric" placeholder="10-digit mobile number" maxLength={10} aria-invalid={Boolean(errors.phone)} className={getFieldClass('phone', errors)} />
                    <FieldError message={errors.phone} />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                    <input id="email" name="email" type="email" maxLength={120} aria-invalid={Boolean(errors.email)} className={getFieldClass('email', errors)} />
                    <FieldError message={errors.email} />
                </div>
                <div>
                    <label htmlFor="city" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">City</label>
                    <input id="city" name="city" type="text" className={baseFieldClass + ' border-slate-200'} />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Brief message or question</label>
                <textarea id="message" name="message" rows={4} maxLength={500} aria-invalid={Boolean(errors.message)} className={getFieldClass('message', errors) + ' resize-none'} />
                <FieldError message={errors.message} />
            </div>
            <div>
                <label htmlFor="callback" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Preferred time for callback</label>
                <input id="callback" name="callback" type="text" placeholder="e.g. Weekdays after 5 PM" className={baseFieldClass + ' border-slate-200'} />
            </div>
            <button
                disabled={loading}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#ef8b92] text-white text-sm font-bold hover:bg-pink-700 disabled:opacity-70 transition-all"
            >
                {loading ? 'Sending...' : (<><Send className="w-4 h-4" /> Request Free Consultation</>)}
            </button>
        </form>
    );
}
