import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = `Contact from ${formData.name} - Portfolio Inquiry`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:byiringiroheritier8@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto min-h-[60vh] flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h1 className="text-5xl md:text-7xl mb-12 leading-none">
            SAY HELLO.
          </h1>
          <section className="space-y-12">
            <div>
              <p className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase mb-4">Inquiries</p>
              <a 
                href="mailto:byiringiroheritier8@gmail.com" 
                className="text-xl md:text-3xl font-serif hover:text-accent transition-colors underline underline-offset-8 decoration-1"
              >
                byiringiroheritier8@gmail.com
              </a>
            </div>
            
            <div>
              <p className="text-[10px] tracking-[0.4em] font-bold text-accent uppercase mb-4">Location</p>
              <p className="text-lg font-serif">Kigali, Rwanda</p>
              <p className="text-[10px] tracking-widest text-accent uppercase mt-1">Available for global remote collaboration</p>
            </div>

            <div className="flex gap-8">
              <a href="https://www.instagram.com/__________ysl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] tracking-[0.3em] font-bold hover:text-accent transition-colors">
                INSTAGRAM
              </a>
              <a href="https://soundcloud.com/your-username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] tracking-[0.3em] font-bold hover:text-accent transition-colors">
                SOUNDCLOUD
              </a>
            </div>
          </section>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="space-y-1 border-b border-gray-700 py-2">
            <label className="text-[9px] tracking-[0.3em] font-bold text-accent uppercase">Name</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-none outline-none py-2 text-sm font-light tracking-wide placeholder:text-gray-300"
              placeholder="YOUR NAME"
            />
          </div>
          <div className="space-y-1 border-b border-gray-700 py-2">
            <label className="text-[9px] tracking-[0.3em] font-bold text-accent uppercase">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-none outline-none py-2 text-sm font-light tracking-wide placeholder:text-gray-300"
              placeholder="YOUR EMAIL"
            />
          </div>
          <div className="space-y-1 border-b border-gray-700 py-2">
            <label className="text-[9px] tracking-[0.3em] font-bold text-accent uppercase">Message</label>
            <textarea 
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-none outline-none py-2 text-sm font-light tracking-wide placeholder:text-gray-300 resize-none"
              placeholder="HOW CAN I HELP?"
            />
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-green-400 text-[10px] tracking-[0.3em] font-medium">
              ✓ Email client opened with your message ready to send!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-400 text-[10px] tracking-[0.3em] font-medium">
              ✗ Please try again or email directly
            </div>
          )}
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-4 text-[10px] tracking-[0.5em] font-bold uppercase hover:translate-x-2 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Opening Email...' : 'Send Message'}
            <Send size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}

