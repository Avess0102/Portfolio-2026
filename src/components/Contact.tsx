import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle, Copy, Check, Clock, AlertCircle } from 'lucide-react';
import { portfolioData } from '../portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { personal } = portfolioData;
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validations
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 8000);
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-[#1a1a1a]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="font-mono text-xs font-bold text-white tracking-[0.25em] uppercase">
            05 . INQUIRIES &amp; CONNECTIONS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Let's Build Something <span className="text-accent">Great</span>
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal info cards */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="font-display font-extrabold text-lg text-white uppercase tracking-wider">
                Drop me a message
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-sans font-light">
                I am currently open to full-time engineering opportunities, design consultations, or project collaborations. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Email card with copy mechanism - Flat Box */}
            <div className="p-6 rounded-none bg-[#111111] border border-[#222222] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-black text-white border border-[#222222]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">DIRECT EMAIL</span>
                  <span className="text-white font-mono text-xs sm:text-sm">{personal.email}</span>
                </div>
              </div>
              <button
                id="contact-copy-email-btn"
                onClick={handleCopyEmail}
                className="w-full py-2.5 px-4 rounded-none bg-black hover:bg-white text-slate-400 hover:text-black border border-[#222222] hover:border-white text-[10px] font-mono font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-black" />
                    <span className="text-black">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy to clipboard</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct specs cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-slate-400 font-mono text-[10px] uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-white flex-shrink-0" />
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400 font-mono text-[10px] uppercase tracking-wider">
                <Clock className="w-4 h-4 text-white flex-shrink-0" />
                <span>Response: Under 24 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="md:col-span-7">
            <div className="bg-[#111111] rounded-none border border-[#222222] p-6 sm:p-8">
              
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    id="contact-success-banner"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-12 h-12 bg-black border border-accent flex items-center justify-center mx-auto text-accent">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-mono font-bold text-xs uppercase tracking-widest text-white">Message Dispatched!</h4>
                      <p className="text-slate-400 text-xs max-w-sm mx-auto leading-relaxed font-light">
                        Thank you for reaching out. Your message has been simulated successfully! I will get back to you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-5 py-2.5 rounded-none bg-white hover:bg-transparent text-black hover:text-white font-mono font-bold text-[10px] uppercase tracking-widest border border-white cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Error Banner */}
                    {error && (
                      <div className="p-3.5 rounded-none bg-black border border-rose-900 text-rose-500 font-mono text-[10px] uppercase tracking-wider flex items-start gap-2">
                        <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Grid Inputs: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label htmlFor="contact-name" className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          placeholder="JANE DOE"
                          value={form.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-xs rounded-none bg-black border border-[#222222] text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-all font-mono uppercase tracking-wider"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-email" className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          placeholder="JANE@EXAMPLE.COM"
                          value={form.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-xs rounded-none bg-black border border-[#222222] text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-all font-mono uppercase tracking-wider"
                        />
                      </div>
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-2">
                      <label htmlFor="contact-subject" className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        name="subject"
                        placeholder="COLLABORATION PROPOSAL, JOB INQUIRY, ETC."
                        value={form.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-xs rounded-none bg-black border border-[#222222] text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-all font-mono uppercase tracking-wider"
                      />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block font-bold">
                        Your Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        placeholder="HELLO, I'D LOVE TO CONNECT WITH YOU REGARDING..."
                        value={form.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 text-xs rounded-none bg-black border border-[#222222] text-white placeholder-slate-600 focus:outline-none focus:border-accent transition-all resize-none font-mono uppercase tracking-wider"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-none bg-white hover:bg-transparent text-black hover:text-white border border-white font-mono font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border border-black border-t-transparent animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
