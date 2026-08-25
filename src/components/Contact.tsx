import React, { useState } from 'react';
import { contactInfo, emailjsConfig } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Check, Copy, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionSuccessType, setSubmissionSuccessType] = useState<'emailjs' | 'mailto'>('emailjs');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newMessage = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toLocaleString(),
    };

    // Save locally as backup
    try {
      const existing = JSON.parse(localStorage.getItem('sent_messages_portfolio') || '[]');
      localStorage.setItem('sent_messages_portfolio', JSON.stringify([newMessage, ...existing]));
    } catch {
      // fallback
    }

    // Retrieve EmailJS keys from direct config or environment variables
    const serviceId =
      emailjsConfig.serviceId ||
      (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_SERVICE_ID) ||
      import.meta.env.REACT_APP_EMAILJS_SERVICE_ID ||
      import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      '';
    const templateId =
      emailjsConfig.mainTemplateId ||
      emailjsConfig.templateId ||
      (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_MAIN_TEMPLATE_ID) ||
      (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_TEMPLATE_ID) ||
      import.meta.env.REACT_APP_EMAILJS_MAIN_TEMPLATE_ID ||
      import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
      import.meta.env.VITE_EMAILJS_MAIN_TEMPLATE_ID ||
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      '';
    const publicKey =
      emailjsConfig.publicKey ||
      (typeof process !== 'undefined' && process.env?.REACT_APP_EMAILJS_PUBLIC_KEY) ||
      import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
      '';

    const templateParams = {
      name: formData.name,       // Maps to {{name}} in your auto-reply
      reply_to: formData.email,  // Maps to {{reply_to}} in both templates
      message: formData.message,  // Maps to {{message}} in your main alert
      time: new Date().toLocaleDateString(), // Maps to {{time}} if needed
      from_name: formData.name,
      from_email: formData.email,
      email: formData.email,
      subject: formData.subject,
      to_name: 'Sanket Kongare',
    };

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );

        setIsSubmitting(false);
        setSubmissionSuccessType('emailjs');
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        return;
      } catch (err: any) {
        console.error('Failed to send:', err);
      }
    }

    // Fallback if keys are not provided or EmailJS fails
    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccessType('mailto');
      setSubmitted(true);
      window.open(mailtoUrl, '_blank');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#168AAD]/10 border border-[#168AAD]/25 text-[#168AAD] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Mail className="w-3.5 h-3.5 text-[#168AAD]" />
            <span>Connect & Recruit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16324F] tracking-tight font-heading">
            Get in Touch with <span className="text-[#168AAD]">Sanket</span>
          </h2>
          <p className="text-[#617386] text-xs sm:text-sm leading-relaxed">
            Interested in software engineering internships, IoT project collaborations, or data analytics roles? Feel free to send a direct message or connect via email or phone.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Info Cards (Left) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <SpotlightCard className="p-5 space-y-3 border-[#D9E3E8] shadow-none">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#168AAD]/10 text-[#168AAD] border border-[#168AAD]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(contactInfo.email, 'email')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F0F4F4] hover:bg-[#E2EBEF] text-[#617386] hover:text-[#16324F] text-xs font-semibold border border-[#D9E3E8] transition-colors cursor-pointer"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#168AAD]" />
                      <span className="text-[#168AAD]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs text-[#617386] font-semibold uppercase tracking-wider font-mono">Email Address</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block text-base font-bold text-[#16324F] hover:text-[#168AAD] transition-colors mt-0.5 font-heading"
                >
                  {contactInfo.email}
                </a>
              </div>
            </SpotlightCard>

            {/* Phone Card */}
            <SpotlightCard className="p-5 space-y-3 border-[#D9E3E8] shadow-none">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-[#52B69A]/10 text-[#52B69A] border border-[#52B69A]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F0F4F4] hover:bg-[#E2EBEF] text-[#617386] hover:text-[#16324F] text-xs font-semibold border border-[#D9E3E8] transition-colors cursor-pointer"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#168AAD]" />
                      <span className="text-[#168AAD]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <span className="text-xs text-[#617386] font-semibold uppercase tracking-wider font-mono">Phone / WhatsApp</span>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="block text-base font-bold text-[#16324F] hover:text-[#168AAD] transition-colors mt-0.5 font-heading"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </SpotlightCard>

            {/* Location & Institution Card */}
            <SpotlightCard className="p-5 space-y-3 border-[#D9E3E8] shadow-none">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#168AAD]/10 text-[#168AAD] border border-[#168AAD]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#617386] font-semibold uppercase tracking-wider font-mono">Location & College</span>
                  <p className="text-sm font-bold text-[#16324F] mt-0.5 font-heading">{contactInfo.institution}</p>
                  <p className="text-xs text-[#617386]">{contactInfo.location}</p>
                </div>
              </div>
            </SpotlightCard>

          </div>

          {/* Interactive Message Form (Right) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-6 sm:p-8 space-y-6 border-[#D9E3E8] shadow-none">
              <div>
                <h3 className="text-xl font-bold text-[#16324F] tracking-tight font-heading">Send a Direct Message</h3>
                <p className="text-xs text-[#617386] mt-1">
                  Fill out this quick form and Sanket will respond promptly via email.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#168AAD]/10 border border-[#168AAD]/25 text-center space-y-4 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-[#168AAD] mx-auto" />
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-[#16324F] font-heading">
                      {submissionSuccessType === 'emailjs'
                        ? 'Message Sent Successfully!'
                        : 'Message Prepared!'}
                    </h4>
                    <p className="text-xs text-[#617386] max-w-md mx-auto leading-relaxed">
                      {submissionSuccessType === 'emailjs' ? (
                        <>
                          Thank you for reaching out! Your message was delivered directly to Sanket's email (
                          <strong className="text-[#168AAD]">{contactInfo.email}</strong>). You will receive a response shortly.
                        </>
                      ) : (
                        <>
                          Your message has been prefilled into your email client addressed to{' '}
                          <strong className="text-[#168AAD]">{contactInfo.email}</strong>.
                        </>
                      )}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    {submissionSuccessType === 'mailto' && (
                      <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#168AAD] text-white font-bold text-xs shadow-none transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Compose in Web Gmail</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-[#F0F4F4] hover:bg-[#E2EBEF] text-[#16324F] font-semibold text-xs border border-[#D9E3E8] transition-all cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#16324F]">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F7F8F3] border border-[#D9E3E8] rounded-xl px-3.5 py-2.5 text-xs text-[#16324F] placeholder-[#617386] focus:outline-none focus:border-[#168AAD] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#16324F]">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F7F8F3] border border-[#D9E3E8] rounded-xl px-3.5 py-2.5 text-xs text-[#16324F] placeholder-[#617386] focus:outline-none focus:border-[#168AAD] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#16324F]">Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Software Internship Opportunity / IoT Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#F7F8F3] border border-[#D9E3E8] rounded-xl px-3.5 py-2.5 text-xs text-[#16324F] placeholder-[#617386] focus:outline-none focus:border-[#168AAD] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#16324F]">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Sanket, I reviewed your portfolio and would like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F7F8F3] border border-[#D9E3E8] rounded-xl px-3.5 py-2.5 text-xs text-[#16324F] placeholder-[#617386] focus:outline-none focus:border-[#168AAD] transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#168AAD] hover:bg-[#137492] text-white font-semibold text-xs shadow-none transition-all duration-200 hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Sanket</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
};


