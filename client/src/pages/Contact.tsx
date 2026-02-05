/* 
 * Organic Tech Fluidity Design:
 * - Contact form with organic shapes
 * - Warm gradient backgrounds
 * - Soft input fields with rounded corners
 */

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import { seoContent } from '@/lib/seo';
import { toast } from 'sonner';

export default function Contact() {
  const { language, t } = useLanguage();
  const seo = seoContent.contact[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'الاسم مطلوب';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email format' : 'صيغة البريد الإلكتروني غير صحيحة';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = language === 'en' ? 'Message is required' : 'الرسالة مطلوبة';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === 'en' ? 'Message must be at least 10 characters' : 'يجب أن تكون الرسالة 10 أحرف على الأقل';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error(language === 'en' ? 'Please fix the errors in the form' : 'يرجى تصحيح الأخطاء في النموذج');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In production, you would send to an API endpoint:
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      toast.success(language === 'en' 
        ? 'Message sent successfully! We\'ll get back to you soon.' 
        : 'تم إرسال الرسالة بنجاح! سنعاود الاتصال بك قريبًا.');
      
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error(language === 'en' 
        ? 'Failed to send message. Please try again.' 
        : 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blob-shape blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              <span className="bg-gradient-to-r from-primary via-coral to-accent bg-clip-text text-transparent">
                {language === 'en' ? 'Get In Touch' : 'تواصل معنا'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === 'en' 
                ? 'Ready to transform your customer service? Let\'s talk about how DK-OctoBot can help your business grow.'
                : 'مستعد لتحويل خدمة العملاء؟ دعنا نتحدث عن كيف يمكن لـ DK-OctoBot مساعدة عملك على النمو.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  {language === 'en' ? 'Contact Information' : 'معلومات الاتصال'}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'en'
                    ? 'Reach out to us through any of these channels. Our team is ready to help you get started.'
                    : 'تواصل معنا من خلال أي من هذه القنوات. فريقنا جاهز لمساعدتك على البدء.'}
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:octobotchatbot@gmail.com"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-organic transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-coral flex items-center justify-center group-hover:scale-110 transition-transform duration-300 blob-shape">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</div>
                    <div className="text-muted-foreground">octobotchatbot@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+201505354810"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-organic transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 blob-shape">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">{language === 'en' ? 'Phone' : 'الهاتف'}</div>
                    <div className="text-muted-foreground">+(20) 1505354810</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/201505354810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 hover:shadow-organic-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 blob-shape">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">WhatsApp</div>
                    <div className="text-muted-foreground">
                      {language === 'en' ? 'Chat with us directly' : 'تحدث معنا مباشرة'}
                    </div>
                  </div>
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-coral/5 to-primary/5 border border-border">
                <h3 className="font-display font-bold text-lg mb-2">
                  {language === 'en' ? 'Business Hours' : 'ساعات العمل'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'en' 
                    ? 'Sunday - Thursday: 9:00 AM - 6:00 PM (GMT+2)'
                    : 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً (GMT+2)'}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-card border border-border shadow-organic-lg space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Name' : 'الاسم'} <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`rounded-xl ${errors.name ? 'border-destructive' : ''}`}
                    placeholder={language === 'en' ? 'Your name' : 'اسمك'}
                    disabled={isSubmitting}
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Email' : 'البريد الإلكتروني'} <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`rounded-xl ${errors.email ? 'border-destructive' : ''}`}
                    placeholder={language === 'en' ? 'your@email.com' : 'بريدك@الإلكتروني.com'}
                    disabled={isSubmitting}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Phone' : 'الهاتف'}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="rounded-xl"
                    placeholder={language === 'en' ? '+20 123 456 7890' : '+20 123 456 7890'}
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {language === 'en' ? 'Message' : 'الرسالة'} <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    className={`rounded-xl min-h-[150px] ${errors.message ? 'border-destructive' : ''}`}
                    placeholder={language === 'en' ? 'Tell us about your project...' : 'أخبرنا عن مشروعك...'}
                    disabled={isSubmitting}
                  />
                  {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-gradient-to-r from-primary to-cyan hover:shadow-tech-lg transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting 
                    ? (language === 'en' ? 'Sending...' : 'جاري الإرسال...')
                    : (language === 'en' ? 'Send Message' : 'إرسال الرسالة')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
