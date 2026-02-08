/* 
 * Organic Tech Fluidity Design:
 * - FAQ accordion with organic shapes
 * - Warm gradient backgrounds
 * - Smooth expand/collapse animations
 */

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const { language } = useLanguage();

  const faqs = language === 'en' ? [
    {
      question: 'What is DK-OctoBot?',
      answer: 'DK-OctoBot is an AI-powered chatbot platform that automates customer service and sales across multiple channels including WhatsApp, Facebook Messenger, Instagram, Telegram, and websites. It works 24/7 to respond to customer inquiries, close sales, and improve customer satisfaction.',
    },
    {
      question: 'Which platforms does DK-OctoBot support?',
      answer: 'DK-OctoBot integrates seamlessly with Facebook Messenger, WhatsApp, Instagram, Telegram, and websites. We also offer custom integrations for specific business needs.',
    },
    {
      question: 'How long does it take to set up?',
      answer: 'Setup typically takes 3-5 business days. Our team handles the entire integration process, including connecting your platforms, training the AI on your products/services, and testing before going live.',
    },
    {
      question: 'Is the pricing monthly or annual?',
      answer: 'We offer flexible monthly subscriptions with discounts for longer commitments. Choose from 1 month, 3 months, 6 months (10% discount), or 1 year (10% discount) plans.',
    },
    {
      question: 'Can DK-OctoBot speak Arabic and English?',
      answer: 'Yes! DK-OctoBot is fully bilingual and can communicate in both Arabic and English with cultural adaptation. It automatically detects the customer\'s language and responds accordingly.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including e-commerce, healthcare, education, logistics, hospitality, banking, customer service, and inventory management. Our AI adapts to each industry\'s specific needs.',
    },
    {
      question: 'How does pricing work?',
      answer: 'Pricing is based on the platforms you choose and the features you need. Each platform (Facebook, WhatsApp, Instagram, etc.) has specific pricing for features like sales automation, comment management, and customer analysis. We also offer bundle packages for multiple platforms.',
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes! We provide comprehensive customer support during business hours (Sunday-Thursday, 9 AM - 6 PM GMT+2). Our team is available via email, phone, and WhatsApp to help you get the most out of DK-OctoBot.',
    },
    {
      question: 'Can I customize the bot\'s responses?',
      answer: 'Absolutely! You have full control over the bot\'s behavior, responses, and workflows. We provide visual flow builders and guardrails to ensure the bot represents your brand perfectly.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take data security seriously. All customer data is encrypted and stored securely. We comply with international data protection standards and never share your data with third parties.',
    },
  ] : [
    {
      question: 'ما هو DK-OctoBot؟',
      answer: 'DK-OctoBot هو منصة شات بوت مدعومة بالذكاء الاصطناعي تعمل على أتمتة خدمة العملاء والمبيعات عبر قنوات متعددة بما في ذلك واتساب وفيسبوك ماسنجر وانستجرام وتيليجرام والمواقع الإلكترونية. يعمل على مدار الساعة للرد على استفسارات العملاء وإتمام المبيعات وتحسين رضا العملاء.',
    },
    {
      question: 'ما هي المنصات التي يدعمها DK-OctoBot؟',
      answer: 'يتكامل DK-OctoBot بسلاسة مع فيسبوك ماسنجر وواتساب وانستجرام وتيليجرام والمواقع الإلكترونية. نقدم أيضاً تكاملات مخصصة لاحتياجات العمل المحددة.',
    },
    {
      question: 'كم من الوقت يستغرق الإعداد؟',
      answer: 'يستغرق الإعداد عادةً من 3 إلى 5 أيام عمل. يتولى فريقنا عملية التكامل بأكملها، بما في ذلك ربط منصاتك وتدريب الذكاء الاصطناعي على منتجاتك/خدماتك والاختبار قبل البدء.',
    },
    {
      question: 'هل الأسعار شهرية أم سنوية؟',
      answer: 'نقدم اشتراكات شهرية مرنة مع خصومات للالتزامات الأطول. اختر من بين خطط شهر واحد أو 3 أشهر أو 6 أشهر (خصم 10٪) أو سنة واحدة (خصم 10٪).',
    },
    {
      question: 'هل يتحدث DK-OctoBot العربية والإنجليزية؟',
      answer: 'نعم! DK-OctoBot ثنائي اللغة بالكامل ويمكنه التواصل باللغتين العربية والإنجليزية مع التكيف الثقافي. يكتشف تلقائياً لغة العميل ويستجيب وفقاً لذلك.',
    },
    {
      question: 'ما هي الصناعات التي تخدمونها؟',
      answer: 'نخدم مجموعة واسعة من الصناعات بما في ذلك التجارة الإلكترونية والرعاية الصحية والتعليم واللوجستيات والضيافة والخدمات المصرفية وخدمة العملاء وإدارة المخزون. يتكيف الذكاء الاصطناعي لدينا مع الاحتياجات المحددة لكل صناعة.',
    },
    {
      question: 'كيف يعمل التسعير؟',
      answer: 'يعتمد التسعير على المنصات التي تختارها والميزات التي تحتاجها. كل منصة (فيسبوك، واتساب، انستجرام، إلخ) لها أسعار محددة لميزات مثل أتمتة المبيعات وإدارة التعليقات وتحليل العملاء. نقدم أيضاً باقات شاملة لمنصات متعددة.',
    },
    {
      question: 'هل تقدمون دعم العملاء؟',
      answer: 'نعم! نقدم دعماً شاملاً للعملاء خلال ساعات العمل (الأحد-الخميس، 9 صباحاً - 6 مساءً بتوقيت GMT+2). فريقنا متاح عبر البريد الإلكتروني والهاتف وواتساب لمساعدتك في الحصول على أقصى استفادة من DK-OctoBot.',
    },
    {
      question: 'هل يمكنني تخصيص ردود البوت؟',
      answer: 'نعم، نأخذ أمان البيانات على محمل الجد. يتم تشفير جميع بيانات العملاء وتخزينها بشكل آمن. نلتزم بمعايير حماية البيانات الدولية ولا نشارك بياناتك مع أطراف ثالثة.',
    },
  ];

  // Add FAQPage structured data for rich results
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };

    let scriptTag = document.querySelector('script[data-schema="faq"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script') as HTMLScriptElement;
      scriptTag.type = 'application/ld+json';
      scriptTag.setAttribute('data-schema', 'faq');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(faqSchema);

    return () => {
      scriptTag?.remove();
    };
  }, [faqs, language]);

  return (
    <div className="min-h-screen">
      <SEO
        title={language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
        description={language === 'en'
          ? 'Find answers to common questions about DK-OctoBot AI chatbot platform, pricing, setup, and features.'
          : 'اعثر على إجابات للأسئلة الشائعة حول منصة شات بوت DK-OctoBot، الأسعار، الإعداد، والميزات.'}
        keywords="FAQ, frequently asked questions, DK-OctoBot, AI chatbot, pricing, setup, أسئلة شائعة, شات بوت"
      />
      <LocalBusinessSchema />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent/10 rounded-full blob-shape blur-3xl" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              <span className="bg-gradient-to-r from-accent via-primary to-coral bg-clip-text text-transparent">
                {language === 'en' ? 'Frequently Asked Questions' : 'الأسئلة الشائعة'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === 'en'
                ? 'Find answers to common questions about DK-OctoBot'
                : 'اعثر على إجابات للأسئلة الشائعة حول DK-OctoBot'}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 bg-card shadow-organic hover:shadow-organic-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-bold text-lg hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            {language === 'en' ? 'Still have questions?' : 'لا تزال لديك أسئلة؟'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {language === 'en'
              ? 'Our team is here to help. Contact us and we\'ll get back to you as soon as possible.'
              : 'فريقنا هنا للمساعدة. اتصل بنا وسنعود إليك في أقرب وقت ممكن.'}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
