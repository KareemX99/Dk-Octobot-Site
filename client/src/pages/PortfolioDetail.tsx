/**
 * Modern Tech-Inspired Design:
 * - Detailed case study layout
 * - Metrics showcase
 * - Before/After comparison
 * - Testimonial section
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, TrendingUp, Users, Clock, Star, CheckCircle } from 'lucide-react';
import { caseStudies, caseStudyNames } from '@/lib/content';

// Detailed case study data
const caseStudyDetails: Record<string, any> = {
  'qadroon-foundation': {
    en: {
      challenge: 'Qadroon Foundation needed to handle thousands of inquiries from people with special needs and their families efficiently while maintaining high-quality, empathetic responses.',
      solution: 'Implemented DK-OctoBot with specialized training for handling sensitive inquiries, multi-channel support (WhatsApp, Facebook, Website), and integration with their case management system.',
      results: [
        'Response time reduced from 4 hours to under 2 seconds',
        '99% customer satisfaction rate',
        '95% faster response to customers',
        'Handled 10,000+ monthly inquiries automatically',
        'Staff able to focus on complex cases requiring human empathy',
      ],
      testimonial: {
        text: 'DK-OctoBot transformed how we serve our community. The AI understands the sensitivity required when working with people with special needs and their families. Response times improved dramatically while maintaining the compassionate tone our organization is known for.',
        author: 'Sarah Ahmed',
        position: 'Director of Operations',
      },
      technologies: ['WhatsApp Business API', 'Facebook Messenger', 'Web Chat', 'CRM Integration', 'Arabic NLP'],
      image: '/images/qadroon-volunteer.png',
    },
    ar: {
      challenge: 'احتاجت مؤسسة قادرون إلى التعامل مع آلاف الاستفسارات من ذوي الاحتياجات الخاصة وعائلاتهم بكفاءة مع الحفاظ على ردود عالية الجودة ومتعاطفة.',
      solution: 'تم تطبيق DK-OctoBot مع تدريب متخصص للتعامل مع الاستفسارات الحساسة، ودعم متعدد القنوات (واتساب، فيسبوك، الموقع الإلكتروني)، والتكامل مع نظام إدارة الحالات الخاص بهم.',
      results: [
        'انخفض وقت الاستجابة من 4 ساعات إلى أقل من ثانيتين',
        'معدل رضا العملاء 99%',
        'استجابة أسرع بنسبة 95% للعملاء',
        'معالجة أكثر من 10,000 استفسار شهريًا تلقائيًا',
        'تمكن الموظفون من التركيز على الحالات المعقدة التي تتطلب تعاطفًا بشريًا',
      ],
      testimonial: {
        text: 'حوّل DK-OctoBot طريقة خدمتنا لمجتمعنا. يفهم الذكاء الاصطناعي الحساسية المطلوبة عند العمل مع ذوي الاحتياجات الخاصة وعائلاتهم. تحسنت أوقات الاستجابة بشكل كبير مع الحفاظ على النبرة الرحيمة التي تشتهر بها منظمتنا.',
        author: 'سارة أحمد',
        position: 'مديرة العمليات',
      },
      technologies: ['واجهة برمجة تطبيقات واتساب للأعمال', 'فيسبوك ماسنجر', 'دردشة الويب', 'تكامل CRM', 'معالجة اللغة العربية الطبيعية'],
      image: '/images/qadroon-volunteer.png',
    },
  },
  'hira-learning': {
    en: {
      challenge: 'Hira Learning Academy struggled with manual enrollment processes, delayed responses to student inquiries, and difficulty managing course schedules across multiple programs.',
      solution: 'Deployed an AI-powered enrollment assistant that handles course inquiries, processes registrations, sends automated reminders, and provides instant answers to frequently asked questions about programs, schedules, and fees.',
      results: [
        '+44% increase in enrollments',
        '92% student satisfaction rate',
        'Enrollment time reduced from 15 minutes to 3 minutes',
        '24/7 availability for student inquiries',
        'Automated follow-ups increased conversion by 35%',
      ],
      testimonial: {
        text: 'The chatbot handles everything from initial inquiry to enrollment completion. Students love the instant responses, and our team can now focus on delivering quality education instead of administrative tasks.',
        author: 'Dr. Mohamed Hassan',
        position: 'Academy Director',
      },
      technologies: ['WhatsApp Business', 'Payment Gateway Integration', 'Calendar Sync', 'Student Database Integration'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
    },
    ar: {
      challenge: 'واجهت أكاديمية هيرا للتعلم صعوبة في عمليات التسجيل اليدوية، والردود المتأخرة على استفسارات الطلاب، وصعوبة إدارة جداول الدورات عبر برامج متعددة.',
      solution: 'تم نشر مساعد تسجيل مدعوم بالذكاء الاصطناعي يتعامل مع استفسارات الدورات، ومعالجة التسجيلات، وإرسال تذكيرات تلقائية، وتقديم إجابات فورية على الأسئلة الشائعة حول البرامج والجداول والرسوم.',
      results: [
        'زيادة بنسبة 44% في التسجيلات',
        'معدل رضا الطلاب 92%',
        'انخفض وقت التسجيل من 15 دقيقة إلى 3 دقائق',
        'توفر على مدار الساعة للاستفسارات الطلابية',
        'زادت المتابعات التلقائية من التحويل بنسبة 35%',
      ],
      testimonial: {
        text: 'يتعامل الشات بوت مع كل شيء من الاستفسار الأولي إلى إكمال التسجيل. يحب الطلاب الردود الفورية، ويمكن لفريقنا الآن التركيز على تقديم تعليم عالي الجودة بدلاً من المهام الإدارية.',
        author: 'د. محمد حسن',
        position: 'مدير الأكاديمية',
      },
      technologies: ['واتساب للأعمال', 'تكامل بوابة الدفع', 'مزامنة التقويم', 'تكامل قاعدة بيانات الطلاب'],
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80',
    },
  },
};

export default function PortfolioDetail() {
  const { language } = useLanguage();
  const [, params] = useRoute('/:lang/portfolio/:slug');
  const slug = params?.slug || '';

  const caseStudy = caseStudies.find(cs => cs.slug === slug);
  const details = caseStudyDetails[slug]?.[language];
  const name = caseStudyNames[slug]?.[language];

  if (!caseStudy || !details || !name) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">
            {language === 'en' ? 'Case Study Not Found' : 'دراسة الحالة غير موجودة'}
          </h1>
          <Link href={`/${language}/portfolio`}>
            <a className="text-primary hover:underline">
              {language === 'en' ? 'Back to Portfolio' : 'العودة إلى المحفظة'}
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title={`${name} - Case Study`}
        description={details.challenge}
        image={details.image}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />

        <div className="container relative">
          <div className="max-w-5xl mx-auto flex flex-col gap-6 items-start">
            {/* Back Button */}
            <Link href={`/${language}/portfolio`}>
              <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                {language === 'en' ? 'Back to Portfolio' : 'أعمالنا'}
              </a>
            </Link>

            {/* Category */}
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              {language === 'ar' && caseStudy.categoryAr ? caseStudy.categoryAr : caseStudy.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              {name}
            </h1>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {caseStudy.metrics.map((metric: string, index: number) => (
                <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                  <div className="p-4 rounded-xl bg-card/30 backdrop-blur-sm border border-border/50">
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'en' ? 'Result' : 'النتيجة'} {index + 1}
                    </p>
                    <p className="text-lg font-bold text-primary">{metric}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <ScrollAnimation direction="up">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <img
                  src={details.image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <ScrollAnimation direction="up">
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold">
                  {language === 'en' ? 'The Challenge' : 'التحدي'}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {details.challenge}
                </p>
              </div>
            </ScrollAnimation>

            {/* Solution */}
            <ScrollAnimation direction="up">
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold">
                  {language === 'en' ? 'Our Solution' : 'حلنا'}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {details.solution}
                </p>
              </div>
            </ScrollAnimation>

            {/* Results */}
            <ScrollAnimation direction="up">
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold">
                  {language === 'en' ? 'Results & Impact' : 'النتائج والتأثير'}
                </h2>
                <div className="grid gap-4">
                  {details.results.map((result: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/50">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-lg">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Technologies */}
            <ScrollAnimation direction="up">
              <div className="space-y-4">
                <h2 className="text-3xl font-display font-bold">
                  {language === 'en' ? 'Technologies Used' : 'التقنيات المستخدمة'}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {details.technologies.map((tech: string, index: number) => (
                    <div key={index} className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Testimonial */}
            <ScrollAnimation direction="up">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-cyan/10 border border-primary/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                  "{details.testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-bold">{details.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{details.testimonial.position}</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
