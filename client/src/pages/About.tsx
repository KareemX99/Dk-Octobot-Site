/* 
 * Organic Tech Fluidity Design:
 * - Story section with organic flow
 * - Metrics cards with blob shapes
 * - Team values with warm gradients
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Zap, Heart } from 'lucide-react';
import SEO from '@/components/SEO';
import { seoContent } from '@/lib/seo';

export default function About() {
  const { language } = useLanguage();

  const metrics = [
    { value: '95%', label: language === 'en' ? 'Customer Satisfaction' : 'رضا العملاء' },
    { value: '1000+', label: language === 'en' ? 'Happy Clients' : 'عملاء سعداء' },
    { value: '24/7', label: language === 'en' ? 'Service Uptime' : 'وقت التشغيل' },
    { value: '<2s', label: language === 'en' ? 'Response Time' : 'وقت الاستجابة' },
  ];

  const values = [
    {
      icon: Users,
      title: language === 'en' ? 'Customer First' : 'العميل أولاً',
      desc: language === 'en' 
        ? 'Every decision we make is centered around delivering value to our customers.'
        : 'كل قرار نتخذه يتمحور حول تقديم قيمة لعملائنا.',
    },
    {
      icon: Target,
      title: language === 'en' ? 'Innovation' : 'الابتكار',
      desc: language === 'en'
        ? 'We constantly push boundaries to bring cutting-edge AI solutions to businesses.'
        : 'نسعى باستمرار لتجاوز الحدود لتقديم حلول ذكاء اصطناعي متطورة للشركات.',
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Speed' : 'السرعة',
      desc: language === 'en'
        ? 'Fast implementation, instant responses, and rapid results for your business.'
        : 'تنفيذ سريع، ردود فورية، ونتائج سريعة لعملك.',
    },
    {
      icon: Heart,
      title: language === 'en' ? 'Reliability' : 'الموثوقية',
      desc: language === 'en'
        ? 'Our platform is built to work 24/7 without fail, just like a dedicated team member.'
        : 'منصتنا مصممة للعمل على مدار الساعة دون توقف، مثل عضو فريق مخصص.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blob-shape blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              <span className="bg-gradient-to-r from-accent via-primary to-coral bg-clip-text text-transparent">
                {language === 'en' ? 'Our Story' : 'قصتنا'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === 'en' 
                ? 'Revolutionizing customer service with AI that understands, learns, and delivers exceptional experiences 24/7.'
                : 'إحداث ثورة في خدمة العملاء بالذكاء الاصطناعي الذي يفهم ويتعلم ويقدم تجارب استثنائية على مدار الساعة.'}
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-3xl bg-card border border-border shadow-organic hover:shadow-organic-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <p className="text-xl leading-relaxed">
              {language === 'en'
                ? 'DK-OctoBot is purpose-built for commerce and education brands, offering seamless integration across all major platforms. We understand that modern businesses need more than just automation—they need intelligent solutions that adapt to their unique challenges.'
                : 'تم تصميم DK-OctoBot خصيصاً للعلامات التجارية التجارية والتعليمية، مع تقديم تكامل سلس عبر جميع المنصات الرئيسية. نحن نفهم أن الشركات الحديثة تحتاج إلى أكثر من مجرد أتمتة - فهي تحتاج إلى حلول ذكية تتكيف مع تحدياتها الفريدة.'}
            </p>
            <p className="leading-relaxed">
              {language === 'en'
                ? 'Our journey began with a simple observation: businesses were losing customers due to slow response times and inconsistent service quality. We set out to create an AI-powered solution that could handle customer interactions with the same care and attention as a dedicated team member—but available 24/7, never taking a break, and constantly learning to improve.'
                : 'بدأت رحلتنا بملاحظة بسيطة: كانت الشركات تفقد العملاء بسبب أوقات الاستجابة البطيئة وجودة الخدمة غير المتسقة. لقد شرعنا في إنشاء حل مدعوم بالذكاء الاصطناعي يمكنه التعامل مع تفاعلات العملاء بنفس العناية والاهتمام كعضو فريق مخصص - ولكنه متاح على مدار الساعة، ولا يأخذ استراحة أبداً، ويتعلم باستمرار للتحسين.'}
            </p>
            <p className="leading-relaxed">
              {language === 'en'
                ? 'Today, DK-OctoBot serves businesses across multiple industries in Egypt, the GCC region, and globally. From e-commerce stores to healthcare providers, from educational institutions to logistics companies—our AI assistant adapts to each industry\'s unique needs while maintaining the highest standards of service quality.'
                : 'اليوم، يخدم DK-OctoBot الشركات في مختلف الصناعات في مصر ومنطقة الخليج وعلى مستوى العالم. من متاجر التجارة الإلكترونية إلى مقدمي الرعاية الصحية، ومن المؤسسات التعليمية إلى شركات اللوجستيات - يتكيف مساعدنا الذكي مع الاحتياجات الفريدة لكل صناعة مع الحفاظ على أعلى معايير جودة الخدمة.'}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {language === 'en' ? 'Our Values' : 'قيمنا'}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'The principles that guide everything we do'
                : 'المبادئ التي توجه كل ما نقوم به'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-card border border-border shadow-organic hover:shadow-organic-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 blob-shape">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
