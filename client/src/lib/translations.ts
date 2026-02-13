import { Language } from './i18n';

export interface Translations {
  nav: {
    features: string;
    industries: string;
    portfolio: string;
    pricing: string;
    about: string;
    contact: string;
    blog: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    subtitle: string;
    smartResponse: string;
    smartResponseDesc: string;
    multiPlatform: string;
    multiPlatformDesc: string;
    salesConversion: string;
    salesConversionDesc: string;
    dataOrganization: string;
    dataOrganizationDesc: string;
    multiLanguage: string;
    multiLanguageDesc: string;
    fullControl: string;
    fullControlDesc: string;
    visualTitle: string;
    visualDescription: string;
  };
  metrics: {
    conversion: string;
    available: string;
    satisfaction: string;
    clients: string;
    uptime: string;
    responseTime: string;
  };
  cta: {
    getStarted: string;
    learnMore: string;
    contactUs: string;
    bookDemo: string;
    subscribe: string;
    viewCaseStudy: string;
  };
  footer: {
    tagline: string;
    product: string;
    company: string;
    legal: string;
    contact: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      features: 'Features',
      industries: 'Industries',
      portfolio: 'Success Stories',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      blog: 'Blog',
    },
    hero: {
      title: 'Your Smart Employee That Never Sleeps',
      subtitle: 'The Perfect Virtual Employee for Your Business - Never Absent, Never Late, Never Wrong',
      cta: 'Get Started',
      ctaSecondary: 'Book a Demo',
    },
    features: {
      title: 'Powerful AI Current Features',
      subtitle: 'Everything you need to automate customer service and boost sales',
      smartResponse: '24/7 Smart Response',
      smartResponseDesc: 'Instant responses to customer inquiries around the clock',
      multiPlatform: 'Multi-Platform Support',
      multiPlatformDesc: 'Facebook, Instagram, WhatsApp, and more',
      salesConversion: 'Sales Conversion',
      salesConversionDesc: 'Transform conversations into sales opportunities',
      dataOrganization: 'Data Organization',
      dataOrganizationDesc: 'Automatically categorize and store customer data',
      multiLanguage: 'Multi-Language',
      multiLanguageDesc: 'Arabic & English with cultural adaptation',
      fullControl: 'Full Control',
      fullControlDesc: 'Visual flows and guardrails for your brand',
      visualTitle: 'Intelligent Automation for Modern Business',
      visualDescription: 'Our AI-powered platform seamlessly integrates with your existing workflows, providing intelligent automation that adapts to your business needs. From customer inquiries to sales conversions, every interaction is optimized for success.',
    },
    metrics: {
      conversion: 'Conversion',
      available: 'Available',
      satisfaction: 'Customer Satisfaction',
      clients: 'Happy Clients',
      uptime: 'Service Uptime',
      responseTime: 'Response Time',
    },
    cta: {
      getStarted: 'Get Started',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      bookDemo: 'Book a Demo',
      subscribe: 'Start Monthly Subscription',
      viewCaseStudy: 'View Case Study',
    },
    footer: {
      tagline: 'AI-powered customer service that never sleeps',
      product: 'Product',
      company: 'Company',
      legal: 'Policies & Terms',
      contact: 'Contact',
      copyright: '© 2025 DK-OctoBot. All rights reserved.',
    },
  },
  ar: {
    nav: {
      features: 'المميزات',
      industries: 'القطاعات',
      portfolio: 'قصص النجاح',
      pricing: 'الأسعار',
      about: 'من نحن',
      contact: 'تواصل معنا',
      blog: 'المدونة',
    },
    hero: {
      title: 'موظفك الذكي الذي لا ينام أبداً',
      subtitle: 'الموظف الافتراضي المثالي لعملك - لا يتغيب، لا يتأخر، لا يخطئ',
      cta: 'ابدأ الآن',
      ctaSecondary: 'احجز ديمو',
    },
    features: {
      title: 'مميزات الذكاء الاصطناعي القوية',
      subtitle: 'كل ما تحتاجه لأتمتة خدمة العملاء وزيادة المبيعات',
      smartResponse: 'رد ذكي على مدار الساعة',
      smartResponseDesc: 'ردود فورية على استفسارات العملاء في أي وقت',
      multiPlatform: 'دعم متعدد المنصات',
      multiPlatformDesc: 'فيسبوك، انستجرام، واتساب، والمزيد',
      salesConversion: 'تحويل المبيعات',
      salesConversionDesc: 'حوّل المحادثات إلى فرص مبيعات',
      dataOrganization: 'تنظيم البيانات',
      dataOrganizationDesc: 'تصنيف وتخزين بيانات العملاء تلقائياً',
      multiLanguage: 'متعدد اللغات',
      multiLanguageDesc: 'العربية والإنجليزية مع التكيف الثقافي',
      fullControl: 'تحكم كامل',
      fullControlDesc: 'تدفقات مرئية وضوابط لعلامتك التجارية',
      visualTitle: 'أتمتة ذكية للأعمال الحديثة',
      visualDescription: 'منصتنا المدعومة بالذكاء الاصطناعي تتكامل بسلاسة مع سير عملك الحالي، وتوفر أتمتة ذكية تتكيف مع احتياجات عملك. من استفسارات العملاء إلى تحويلات المبيعات، كل تفاعل مُحسّن لتحقيق النجاح.',
    },
    metrics: {
      conversion: 'معدل التحويل',
      available: 'متاح',
      satisfaction: 'رضا العملاء',
      clients: 'عملاء سعداء',
      uptime: 'وقت التشغيل',
      responseTime: 'وقت الاستجابة',
    },
    cta: {
      getStarted: 'ابدأ الآن',
      learnMore: 'اعرف المزيد',
      contactUs: 'تواصل معنا',
      bookDemo: 'احجز ديمو',
      subscribe: 'اشترك شهرياً',
      viewCaseStudy: 'اطلع على دراسة الحالة',
    },
    footer: {
      tagline: 'خدمة عملاء مدعومة بالذكاء الاصطناعي لا تنام أبداً',
      product: 'المنتج',
      company: 'الشركة',
      legal: 'السياسات والشروط',
      contact: 'تواصل',
      copyright: '© 2025 DK-OctoBot. جميع الحقوق محفوظة.',
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
