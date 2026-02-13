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
  'i-byco': {
    en: {
      challenge: 'I Byco, a growing e-commerce brand, struggled with managing high volumes of customer inquiries across multiple platforms while trying to scale their revenue.',
      solution: 'Implemented a multi-channel AI assistant that handles product inquiries, order tracking, and technical support across WhatsApp, Facebook, and their website simultaneously.',
      results: [
        '+85% Revenue Growth',
        '24/7 Technical Support',
        'Customer inquiries handled 5x faster',
        'Reduced support team workload by 60%',
        'Seamless multi-platform integration',
      ],
      testimonial: {
        text: 'DK-OctoBot helped us scale our customer support without hiring more staff. Our revenue grew by 85% because customers get instant answers and can purchase anytime.',
        author: 'Ahmed Ibrahim',
        position: 'CEO',
      },
      technologies: ['WhatsApp Business API', 'Facebook Messenger', 'Web Chat', 'E-commerce Integration'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    },
    ar: {
      challenge: 'واجهت أي بايكو صعوبة في إدارة حجم كبير من استفسارات العملاء عبر منصات متعددة أثناء محاولة زيادة إيراداتها.',
      solution: 'تم تطبيق مساعد ذكاء اصطناعي متعدد القنوات يتعامل مع استفسارات المنتجات وتتبع الطلبات والدعم الفني عبر واتساب وفيسبوك والموقع الإلكتروني.',
      results: [
        'زيادة الإيرادات بنسبة 85%',
        'دعم فني على مدار الساعة',
        'معالجة الاستفسارات أسرع 5 مرات',
        'تقليل عبء فريق الدعم بنسبة 60%',
        'تكامل سلس عبر المنصات',
      ],
      testimonial: {
        text: 'ساعدنا DK-OctoBot في توسيع دعم العملاء دون توظيف المزيد من الموظفين. نمت إيراداتنا بنسبة 85% لأن العملاء يحصلون على إجابات فورية.',
        author: 'أحمد إبراهيم',
        position: 'الرئيس التنفيذي',
      },
      technologies: ['واجهة واتساب للأعمال', 'فيسبوك ماسنجر', 'دردشة الويب', 'تكامل التجارة الإلكترونية'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
    },
  },
  'smart-technology': {
    en: {
      challenge: 'Smart Technology needed to manage communications with over 10,000 annual trainees and scale their educational services efficiently.',
      solution: 'Deployed an AI-powered communication hub that manages trainee registrations, course scheduling, progress tracking, and automated follow-ups.',
      results: [
        '10K+ Annual Trainees managed',
        '85% Customer Growth',
        'Automated registration process',
        'Real-time progress tracking',
        'Personalized learning recommendations',
      ],
      testimonial: {
        text: 'Managing 10,000+ trainees manually was impossible. DK-OctoBot automated our entire communication flow, from registration to certificate delivery.',
        author: 'Eng. Mahmoud Ali',
        position: 'General Manager',
      },
      technologies: ['WhatsApp Business', 'CRM Integration', 'Automated Scheduling', 'Progress Tracking'],
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاجت سمارت تكنولوجي لإدارة التواصل مع أكثر من 10,000 متدرب سنوياً وتوسيع خدماتها التعليمية بكفاءة.',
      solution: 'تم نشر مركز اتصالات مدعوم بالذكاء الاصطناعي لإدارة تسجيلات المتدربين وجدولة الدورات وتتبع التقدم والمتابعات الآلية.',
      results: [
        'إدارة أكثر من 10 آلاف متدرب سنوياً',
        'نمو العملاء بنسبة 85%',
        'أتمتة عملية التسجيل',
        'تتبع التقدم لحظياً',
        'توصيات تعلم مخصصة',
      ],
      testimonial: {
        text: 'إدارة أكثر من 10,000 متدرب يدوياً كانت مستحيلة. أتمت DK-OctoBot تدفق الاتصالات بالكامل من التسجيل إلى تسليم الشهادة.',
        author: 'م. محمود علي',
        position: 'المدير العام',
      },
      technologies: ['واتساب للأعمال', 'تكامل CRM', 'جدولة آلية', 'تتبع التقدم'],
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80',
    },
  },
  'outbox-places': {
    en: {
      challenge: 'OutBox Places travel agency faced challenges in handling booking inquiries, providing instant travel recommendations, and managing customer communications during peak seasons.',
      solution: 'Implemented an AI travel assistant that handles trip inquiries, provides destination recommendations, manages bookings, and sends automated travel updates.',
      results: [
        '+85% Increase in Bookings',
        '15K+ Happy Travelers served',
        'Instant response to travel inquiries',
        'Automated booking confirmations',
        'Personalized travel recommendations',
      ],
      testimonial: {
        text: 'Our booking rate increased by 85% since implementing DK-OctoBot. Travelers get instant responses about destinations and packages, even at 3 AM.',
        author: 'Mohamed Samir',
        position: 'Founder',
      },
      technologies: ['WhatsApp Business', 'Facebook Messenger', 'Booking System Integration', 'Payment Gateway'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
    },
    ar: {
      challenge: 'واجهت أوت بوكس بلايسز تحديات في التعامل مع استفسارات الحجز وتقديم توصيات سفر فورية وإدارة اتصالات العملاء في مواسم الذروة.',
      solution: 'تم تطبيق مساعد سفر ذكي يتعامل مع استفسارات الرحلات ويقدم توصيات الوجهات ويدير الحجوزات ويرسل تحديثات السفر الآلية.',
      results: [
        'زيادة الحجوزات بنسبة 85%',
        'خدمة أكثر من 15 ألف مسافر سعيد',
        'استجابة فورية لاستفسارات السفر',
        'تأكيدات حجز آلية',
        'توصيات سفر مخصصة',
      ],
      testimonial: {
        text: 'زاد معدل الحجز لدينا بنسبة 85% منذ تطبيق DK-OctoBot. يحصل المسافرون على ردود فورية حول الوجهات والباقات حتى في الساعة 3 صباحاً.',
        author: 'محمد سمير',
        position: 'المؤسس',
      },
      technologies: ['واتساب للأعمال', 'فيسبوك ماسنجر', 'تكامل نظام الحجز', 'بوابة الدفع'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
    },
  },
  'mps-academy': {
    en: {
      challenge: 'MPS Academy System needed to efficiently track and manage over 5,000 teachers while improving institutional communication and reporting.',
      solution: 'Built an AI-powered academy management system that tracks teacher performance, automates reporting, and streamlines communication across the institution.',
      results: [
        '+90% Higher Tracking Efficiency',
        '5K+ Teachers managed',
        'Automated performance reports',
        'Streamlined institutional communication',
        'Real-time analytics dashboard',
      ],
      testimonial: {
        text: 'Managing 5,000+ teachers across multiple locations was a nightmare. DK-OctoBot gave us 90% better tracking efficiency and automated our entire reporting system.',
        author: 'Dr. Khaled Mostafa',
        position: 'Academic Director',
      },
      technologies: ['Management System', 'Analytics Dashboard', 'WhatsApp Integration', 'Automated Reporting'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاج نظام أكاديمية MPS لتتبع وإدارة أكثر من 5,000 معلم بكفاءة مع تحسين الاتصال المؤسسي وإعداد التقارير.',
      solution: 'تم بناء نظام إدارة أكاديمية مدعوم بالذكاء الاصطناعي يتتبع أداء المعلمين ويؤتمت التقارير ويسلس الاتصالات عبر المؤسسة.',
      results: [
        'كفاءة تتبع أعلى بنسبة 90%',
        'إدارة أكثر من 5 آلاف معلم',
        'تقارير أداء آلية',
        'تسليس الاتصالات المؤسسية',
        'لوحة تحليلات لحظية',
      ],
      testimonial: {
        text: 'إدارة أكثر من 5,000 معلم عبر مواقع متعددة كانت كابوساً. أعطانا DK-OctoBot كفاءة تتبع أفضل بنسبة 90% وأتمتة نظام التقارير بالكامل.',
        author: 'د. خالد مصطفى',
        position: 'المدير الأكاديمي',
      },
      technologies: ['نظام إدارة', 'لوحة تحليلات', 'تكامل واتساب', 'تقارير آلية'],
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80',
    },
  },
  'f-brakes': {
    en: {
      challenge: 'F.Brakes automotive parts store struggled with customer acquisition, managing product inquiries, and competing in the digital marketplace.',
      solution: 'Deployed an AI sales assistant specialized in automotive parts that handles product searches, compatibility checks, pricing inquiries, and order processing.',
      results: [
        '+75% Growth in new customers',
        '4.9 Star Rating achieved',
        'Instant part compatibility checks',
        'Automated pricing and availability',
        'Increased customer loyalty',
      ],
      testimonial: {
        text: 'Our customer base grew by 75% and we achieved a 4.9 rating. The AI assistant knows every part in our catalog and helps customers find exactly what they need.',
        author: 'Fady Mounir',
        position: 'Owner',
      },
      technologies: ['WhatsApp Business', 'Product Catalog Integration', 'Inventory Sync', 'Order Processing'],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
    },
    ar: {
      challenge: 'واجه معرض إف بريكس لقطع غيار السيارات صعوبة في اكتساب العملاء وإدارة استفسارات المنتجات والمنافسة في السوق الرقمي.',
      solution: 'تم نشر مساعد مبيعات ذكي متخصص في قطع غيار السيارات يتعامل مع البحث عن المنتجات وفحص التوافق واستفسارات الأسعار ومعالجة الطلبات.',
      results: [
        'نمو العملاء الجدد بنسبة 75%',
        'تحقيق تقييم 4.9 نجوم',
        'فحص فوري لتوافق القطع',
        'أسعار ومدى توفر آلي',
        'زيادة ولاء العملاء',
      ],
      testimonial: {
        text: 'نمت قاعدة عملائنا بنسبة 75% وحققنا تقييم 4.9. المساعد الذكي يعرف كل قطعة في الكتالوج ويساعد العملاء في إيجاد ما يحتاجونه.',
        author: 'فادي منير',
        position: 'المالك',
      },
      technologies: ['واتساب للأعمال', 'تكامل كتالوج المنتجات', 'مزامنة المخزون', 'معالجة الطلبات'],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80',
    },
  },
  'focus-ix': {
    en: {
      challenge: 'Focus ix supplies company needed to handle a rapidly growing order volume while maintaining quality customer communication and order accuracy.',
      solution: 'Implemented an AI-powered order management system that processes orders, tracks deliveries, manages supplier communications, and provides real-time updates to customers.',
      results: [
        '+97% Sales increase',
        '+1,200 monthly successful orders',
        'Automated order processing',
        'Real-time delivery tracking',
        'Zero order mix-ups',
      ],
      testimonial: {
        text: 'We went from struggling with orders to processing 1,200+ monthly orders seamlessly. Our sales increased by 97% thanks to the instant response capability.',
        author: 'Osama Farouk',
        position: 'Managing Director',
      },
      technologies: ['WhatsApp Business', 'Order Management', 'Delivery Tracking', 'CRM Integration'],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاجت شركة فوكس إكس للتوريدات للتعامل مع حجم طلبات متزايد بسرعة مع الحفاظ على جودة التواصل مع العملاء ودقة الطلبات.',
      solution: 'تم تطبيق نظام إدارة طلبات مدعوم بالذكاء الاصطناعي يعالج الطلبات ويتتبع التوصيلات ويدير اتصالات الموردين ويوفر تحديثات لحظية.',
      results: [
        'زيادة المبيعات بنسبة 97%',
        'أكثر من 1,200 طلب ناجح شهرياً',
        'معالجة طلبات آلية',
        'تتبع توصيل لحظي',
        'صفر أخطاء في الطلبات',
      ],
      testimonial: {
        text: 'انتقلنا من المعاناة مع الطلبات إلى معالجة أكثر من 1,200 طلب شهريًا بسلاسة. زادت مبيعاتنا 97% بفضل القدرة على الاستجابة الفورية.',
        author: 'أسامة فاروق',
        position: 'المدير التنفيذي',
      },
      technologies: ['واتساب للأعمال', 'إدارة الطلبات', 'تتبع التوصيل', 'تكامل CRM'],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
    },
  },
  'healthy-dental': {
    en: {
      challenge: 'Healthy Dental Clinic faced challenges with appointment scheduling, patient follow-ups, and managing a growing patient base while maintaining personalized care.',
      solution: 'Deployed an AI-powered dental assistant that handles appointment booking, sends treatment reminders, answers common dental questions, and manages patient follow-ups automatically.',
      results: [
        '+90% Faster appointment scheduling',
        '500+ Beautiful new smiles',
        'Automated appointment reminders',
        'Reduced no-show rate by 60%',
        '24/7 patient inquiry handling',
      ],
      testimonial: {
        text: 'DK-OctoBot transformed our clinic operations. Patients can book appointments instantly via WhatsApp, and our no-show rate dropped dramatically. We can focus on what we do best — creating beautiful smiles.',
        author: 'Dr. Hassan',
        position: 'Clinic Director',
      },
      technologies: ['WhatsApp Business', 'Appointment Scheduling', 'Patient CRM', 'Automated Reminders'],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
    },
    ar: {
      challenge: 'واجهت عيادة هيلثي لطب الأسنان تحديات في جدولة المواعيد ومتابعة المرضى وإدارة قاعدة مرضى متنامية مع الحفاظ على الرعاية الشخصية.',
      solution: 'تم نشر مساعد أسنان مدعوم بالذكاء الاصطناعي يتعامل مع حجز المواعيد وإرسال تذكيرات العلاج والإجابة على أسئلة الأسنان الشائعة وإدارة متابعات المرضى تلقائياً.',
      results: [
        'سرعة أكبر بنسبة 90% في حجز المواعيد',
        'أكثر من 500 ابتسامة جديدة جميلة',
        'تذكيرات مواعيد آلية',
        'انخفاض معدل عدم الحضور بنسبة 60%',
        'التعامل مع استفسارات المرضى على مدار الساعة',
      ],
      testimonial: {
        text: 'حوّل DK-OctoBot عمليات عيادتنا. يمكن للمرضى حجز المواعيد فوراً عبر واتساب، وانخفض معدل عدم الحضور بشكل كبير. يمكننا التركيز على ما نتقنه — صنع ابتسامات جميلة.',
        author: 'د. حسن',
        position: 'مدير العيادة',
      },
      technologies: ['واتساب للأعمال', 'جدولة المواعيد', 'إدارة علاقات المرضى', 'تذكيرات آلية'],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80',
    },
  },
  'egy-bird-tours': {
    en: {
      challenge: 'Egy Bird Tours needed to manage high volumes of travel inquiries and bookings across multiple channels during peak tourism seasons.',
      solution: 'Implemented an AI travel consultant that handles destination inquiries, trip planning, booking management, and provides real-time travel updates.',
      results: [
        '+80% Increase in bookings',
        '10K+ Happy Travelers',
        'Instant travel consultation',
        'Multi-language support',
        'Automated itinerary generation',
      ],
      testimonial: {
        text: 'DK-OctoBot handles thousands of inquiries during peak season effortlessly. Our bookings increased 80% and travelers love the instant responses.',
        author: 'Travel Operations Team',
        position: 'Management',
      },
      technologies: ['WhatsApp Business', 'Booking Integration', 'Multi-language AI', 'Payment Processing'],
      image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاجت ايجي بيرد تورز لإدارة حجم كبير من استفسارات السفر والحجوزات عبر قنوات متعددة خلال مواسم السياحة الذروة.',
      solution: 'تم تطبيق مستشار سفر ذكي يتعامل مع استفسارات الوجهات وتخطيط الرحلات وإدارة الحجوزات وتقديم تحديثات السفر لحظياً.',
      results: [
        'زيادة الحجوزات بنسبة 80%',
        'أكثر من 10 آلاف مسافر سعيد',
        'استشارة سفر فورية',
        'دعم متعدد اللغات',
        'إنشاء برامج رحلات آلية',
      ],
      testimonial: {
        text: 'يتعامل DK-OctoBot مع آلاف الاستفسارات خلال موسم الذروة بسهولة. زادت حجوزاتنا 80% والمسافرون يحبون الردود الفورية.',
        author: 'فريق عمليات السفر',
        position: 'الإدارة',
      },
      technologies: ['واتساب للأعمال', 'تكامل الحجز', 'ذكاء اصطناعي متعدد اللغات', 'معالجة المدفوعات'],
      image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80',
    },
  },
  'codepill-academy': {
    en: {
      challenge: 'CodePill Academy needed to manage growing student enrollment, answer technical questions, and provide support for aspiring developers.',
      solution: 'Deployed an AI educational assistant that handles enrollment, answers programming questions, tracks student progress, and provides personalized learning paths.',
      results: [
        '+60% Student Growth',
        '1K+ Future Developers trained',
        'Instant technical support',
        'Automated enrollment process',
        'Personalized learning recommendations',
      ],
      testimonial: {
        text: 'The AI assistant answers programming questions 24/7 and helps students stay on track. Our enrollment grew 60% with minimal additional staff.',
        author: 'Academy Team',
        position: 'Management',
      },
      technologies: ['WhatsApp Business', 'Learning Management', 'Progress Tracking', 'Code Review AI'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاجت أكاديمية CodePill لإدارة تسجيل الطلاب المتزايد والإجابة على الأسئلة التقنية وتقديم الدعم للمطورين الطموحين.',
      solution: 'تم نشر مساعد تعليمي ذكي يتعامل مع التسجيل ويجيب على أسئلة البرمجة ويتتبع تقدم الطلاب ويقدم مسارات تعلم مخصصة.',
      results: [
        'نمو الطلاب بنسبة 60%',
        'تدريب أكثر من 1000 مبرمج مستقبلي',
        'دعم تقني فوري',
        'أتمتة عملية التسجيل',
        'توصيات تعلم مخصصة',
      ],
      testimonial: {
        text: 'المساعد الذكي يجيب على أسئلة البرمجة على مدار الساعة ويساعد الطلاب في البقاء على المسار الصحيح. نما تسجيلنا 60% بأقل عدد من الموظفين.',
        author: 'فريق الأكاديمية',
        position: 'الإدارة',
      },
      technologies: ['واتساب للأعمال', 'إدارة التعلم', 'تتبع التقدم', 'مراجعة الكود بالذكاء الاصطناعي'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80',
    },
  },
  'epico-chemicals': {
    en: {
      challenge: 'EPICO Chemicals needed to manage complex B2B client relationships, handle product specification inquiries, and scale their sales operations.',
      solution: 'Implemented an AI sales assistant specialized in chemical products that handles technical inquiries, provides product specifications, and manages client follow-ups.',
      results: [
        '+70% Sales Growth',
        '500+ Satisfied Clients',
        'Instant product specification lookup',
        'Automated client follow-ups',
        'Streamlined order management',
      ],
      testimonial: {
        text: 'The AI assistant knows our entire product catalog and handles technical inquiries that used to take hours. Sales grew 70% in the first year.',
        author: 'EPICO Team',
        position: 'Management',
      },
      technologies: ['WhatsApp Business', 'Product Database', 'CRM Integration', 'Order Management'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاجت EPICO Chemicals لإدارة علاقات عملاء B2B المعقدة والتعامل مع استفسارات مواصفات المنتجات وتوسيع عمليات المبيعات.',
      solution: 'تم تطبيق مساعد مبيعات ذكي متخصص في المنتجات الكيميائية يتعامل مع الاستفسارات التقنية ويوفر مواصفات المنتجات ويدير متابعات العملاء.',
      results: [
        'نمو المبيعات بنسبة 70%',
        'أكثر من 500 عميل راضي',
        'بحث فوري عن مواصفات المنتجات',
        'متابعات عملاء آلية',
        'تبسيط إدارة الطلبات',
      ],
      testimonial: {
        text: 'المساعد الذكي يعرف كتالوج منتجاتنا بالكامل ويتعامل مع الاستفسارات التقنية التي كانت تستغرق ساعات. نمت المبيعات 70% في السنة الأولى.',
        author: 'فريق EPICO',
        position: 'الإدارة',
      },
      technologies: ['واتساب للأعمال', 'قاعدة بيانات المنتجات', 'تكامل CRM', 'إدارة الطلبات'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80',
    },
  },
  'lam7': {
    en: {
      challenge: 'Lam7 car showroom needed to handle high volumes of customer inquiries about vehicles, pricing, and availability while converting leads into sales.',
      solution: 'Deployed an AI sales consultant that provides vehicle details, handles pricing negotiations, schedules test drives, and follows up with potential buyers.',
      results: [
        '+85% Sales increase',
        '+250K Clients served',
        'Instant vehicle availability checks',
        'Automated test drive scheduling',
        '24/7 lead engagement',
      ],
      testimonial: {
        text: 'The AI handles hundreds of inquiries daily about our cars. Sales increased 85% because every lead gets an instant, knowledgeable response.',
        author: 'Lam7 Team',
        position: 'Management',
      },
      technologies: ['WhatsApp Business', 'Vehicle Database', 'CRM Integration', 'Lead Management'],
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاج معرض لمح للسيارات للتعامل مع حجم كبير من استفسارات العملاء حول المركبات والأسعار والمتاحية وتحويل العملاء المحتملين إلى مبيعات.',
      solution: 'تم نشر مستشار مبيعات ذكي يوفر تفاصيل المركبات ويتعامل مع مفاوضات الأسعار ويجدول تجارب القيادة ويتابع مع المشترين المحتملين.',
      results: [
        'زيادة المبيعات بنسبة 85%',
        'خدمة أكثر من 250 ألف عميل',
        'فحص فوري لتوفر المركبات',
        'جدولة آلية لتجارب القيادة',
        'تفاعل مع العملاء المحتملين على مدار الساعة',
      ],
      testimonial: {
        text: 'يتعامل المساعد الذكي مع مئات الاستفسارات يومياً عن سياراتنا. زادت المبيعات 85% لأن كل عميل محتمل يحصل على رد فوري ومعلوماتي.',
        author: 'فريق لمح',
        position: 'الإدارة',
      },
      technologies: ['واتساب للأعمال', 'قاعدة بيانات المركبات', 'تكامل CRM', 'إدارة العملاء المحتملين'],
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&q=80',
    },
  },
  'folo': {
    en: {
      challenge: 'FOLO men\'s clothing store needed to scale their online sales, handle sizing inquiries, and provide personalized fashion recommendations.',
      solution: 'Implemented an AI fashion consultant that handles product inquiries, provides size recommendations, manages orders, and sends personalized style suggestions.',
      results: [
        '+92% Sales Growth',
        '1000+ Satisfied Clients',
        'Instant size recommendations',
        'Automated order tracking',
        'Personalized style suggestions',
      ],
      testimonial: {
        text: 'Our sales grew 92% because the AI assistant helps customers find their perfect size and style. Returns dropped significantly too.',
        author: 'FOLO Team',
        position: 'Management',
      },
      technologies: ['WhatsApp Business', 'E-commerce Integration', 'Product Catalog', 'Order Management'],
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاج متجر FOLO للملابس الرجالية لتوسيع مبيعاته عبر الإنترنت والتعامل مع استفسارات المقاسات وتقديم توصيات أزياء مخصصة.',
      solution: 'تم تطبيق مستشار أزياء ذكي يتعامل مع استفسارات المنتجات ويقدم توصيات المقاسات ويدير الطلبات ويرسل اقتراحات أسلوب مخصصة.',
      results: [
        'نمو المبيعات بنسبة 92%',
        'أكثر من 1000 عميل راضي',
        'توصيات مقاسات فورية',
        'تتبع طلبات آلي',
        'اقتراحات أسلوب مخصصة',
      ],
      testimonial: {
        text: 'نمت مبيعاتنا 92% لأن المساعد الذكي يساعد العملاء في إيجاد مقاسهم وأسلوبهم المثالي. انخفضت المرتجعات بشكل كبير أيضاً.',
        author: 'فريق FOLO',
        position: 'الإدارة',
      },
      technologies: ['واتساب للأعمال', 'تكامل التجارة الإلكترونية', 'كتالوج المنتجات', 'إدارة الطلبات'],
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80',
    },
  },
  'dr-salah-sharawy': {
    en: {
      challenge: 'Dr. Salah Sharawy\'s dental clinic needed to manage a growing patient base of 5,000+ while maintaining personalized care and efficient scheduling.',
      solution: 'Implemented an AI dental assistant that manages appointments, sends treatment reminders, handles patient inquiries, and provides post-treatment care instructions.',
      results: [
        '+5K Patients managed',
        'Specialized dental care support',
        'Automated appointment scheduling',
        'Treatment follow-up reminders',
        'Patient satisfaction improved significantly',
      ],
      testimonial: {
        text: 'Managing 5,000+ patients is seamless now. The AI handles scheduling and reminders, letting me focus entirely on providing the best dental care.',
        author: 'Dr. Salah Sharawy',
        position: 'Clinic Owner',
      },
      technologies: ['WhatsApp Business', 'Appointment System', 'Patient Management', 'Automated Reminders'],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاجت عيادة د. صلاح شعراوي لطب الأسنان لإدارة قاعدة مرضى متنامية تتجاوز 5,000 مريض مع الحفاظ على الرعاية الشخصية والجدولة الفعالة.',
      solution: 'تم تطبيق مساعد أسنان ذكي يدير المواعيد ويرسل تذكيرات العلاج ويتعامل مع استفسارات المرضى ويقدم تعليمات الرعاية بعد العلاج.',
      results: [
        'إدارة أكثر من 5000 مريض',
        'دعم رعاية أسنان متخصصة',
        'جدولة مواعيد آلية',
        'تذكيرات متابعة العلاج',
        'تحسن كبير في رضا المرضى',
      ],
      testimonial: {
        text: 'إدارة أكثر من 5,000 مريض أصبحت سلسة الآن. يتعامل المساعد الذكي مع الجدولة والتذكيرات ويتركني أركز بالكامل على تقديم أفضل رعاية.',
        author: 'د. صلاح شعراوي',
        position: 'صاحب العيادة',
      },
      technologies: ['واتساب للأعمال', 'نظام المواعيد', 'إدارة المرضى', 'تذكيرات آلية'],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80',
    },
  },
  'al-qamash': {
    en: {
      challenge: 'Al-Qāmāsh online fabric store needed to manage bridal fabric inquiries, showcase their premium collection, and handle custom orders efficiently.',
      solution: 'Deployed an AI shopping assistant that helps brides find the perfect fabric, provides detailed product information, manages custom orders, and facilitates the purchasing process.',
      results: [
        '+1000 Brides served',
        'Premium fabric consultation',
        'Instant fabric availability checks',
        'Custom order management',
        'Personalized recommendations',
      ],
      testimonial: {
        text: 'Our AI assistant helps brides find their dream fabric instantly. We served over 1,000 happy brides with personalized recommendations.',
        author: 'Al-Qāmāsh Team',
        position: 'Management',
      },
      technologies: ['WhatsApp Business', 'Product Catalog', 'Order Management', 'Payment Integration'],
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاج متجر ٱلْقَمَاشْ للأقمشة عبر الإنترنت لإدارة استفسارات أقمشة الزفاف وعرض مجموعته الفاخرة والتعامل مع الطلبات المخصصة بكفاءة.',
      solution: 'تم نشر مساعد تسوق ذكي يساعد العرائس في إيجاد القماش المثالي ويوفر معلومات تفصيلية ويدير الطلبات المخصصة ويسهل عملية الشراء.',
      results: [
        'خدمة أكثر من 1000 عروسة',
        'استشارة أقمشة فاخرة',
        'فحص فوري لتوفر الأقمشة',
        'إدارة الطلبات المخصصة',
        'توصيات مخصصة',
      ],
      testimonial: {
        text: 'مساعدنا الذكي يساعد العرائس في إيجاد قماش أحلامهن فوراً. خدمنا أكثر من 1,000 عروسة سعيدة بتوصيات مخصصة.',
        author: 'فريق ٱلْقَمَاشْ',
        position: 'الإدارة',
      },
      technologies: ['واتساب للأعمال', 'كتالوج المنتجات', 'إدارة الطلبات', 'تكامل الدفع'],
      image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80',
    },
  },
  'shahbander': {
    en: {
      challenge: 'Shahbander online store needed to manage 15K+ orders, handle product inquiries at scale, and maintain their top-rated store status.',
      solution: 'Implemented an AI-powered e-commerce assistant that handles product searches, processes orders, manages returns, and provides personalized shopping experiences.',
      results: [
        '+15K Orders processed',
        'Top Rated Store maintained',
        'Instant product search',
        'Automated order processing',
        'Customer satisfaction maintained',
      ],
      testimonial: {
        text: 'Processing 15,000+ orders while maintaining our top rating would be impossible without DK-OctoBot. Every customer gets instant, accurate responses.',
        author: 'Shahbander Team',
        position: 'Management',
      },
      technologies: ['WhatsApp Business', 'E-commerce Platform', 'Order Processing', 'Customer Support AI'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاج متجر شهبندر الإلكتروني لإدارة أكثر من 15 ألف طلب والتعامل مع استفسارات المنتجات على نطاق واسع والحفاظ على تصنيفه كأعلى متجر تقييماً.',
      solution: 'تم تطبيق مساعد تجارة إلكترونية مدعوم بالذكاء الاصطناعي يتعامل مع البحث عن المنتجات ومعالجة الطلبات وإدارة المرتجعات وتقديم تجارب تسوق مخصصة.',
      results: [
        'معالجة أكثر من 15 ألف طلب',
        'الحفاظ على تصنيف الأعلى تقييماً',
        'بحث فوري عن المنتجات',
        'معالجة طلبات آلية',
        'الحفاظ على رضا العملاء',
      ],
      testimonial: {
        text: 'معالجة أكثر من 15,000 طلب مع الحفاظ على تصنيفنا الأعلى كان مستحيلاً بدون DK-OctoBot. كل عميل يحصل على ردود فورية ودقيقة.',
        author: 'فريق شهبندر',
        position: 'الإدارة',
      },
      technologies: ['واتساب للأعمال', 'منصة التجارة الإلكترونية', 'معالجة الطلبات', 'دعم عملاء ذكي'],
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80',
    },
  },
  'itc-egypt': {
    en: {
      challenge: 'ITC Egypt needed to handle complex financial consulting inquiries about credit scores, loan qualifications, and financial planning efficiently.',
      solution: 'Deployed an AI financial consultant that handles credit inquiries, provides preliminary assessments, schedules consultations, and follows up with potential clients.',
      results: [
        'Credit Score Repair services automated',
        'Financial Solutions consultation 24/7',
        'Instant preliminary assessments',
        'Automated client follow-ups',
        'Improved lead conversion rate',
      ],
      testimonial: {
        text: 'The AI handles initial consultations and assessments, allowing our financial experts to focus on complex cases. Client satisfaction improved significantly.',
        author: 'ITC Egypt Team',
        position: 'Management',
      },
      technologies: ['WhatsApp Business', 'CRM Integration', 'Financial Assessment Tools', 'Lead Management'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاجت ITC Egypt للتعامل مع استفسارات الاستشارات المالية المعقدة حول الدرجات الائتمانية ومؤهلات القروض والتخطيط المالي بكفاءة.',
      solution: 'تم نشر مستشار مالي ذكي يتعامل مع الاستفسارات الائتمانية ويقدم تقييمات أولية ويجدول المشاورات ويتابع مع العملاء المحتملين.',
      results: [
        'أتمتة خدمات تصحيح الملف الائتماني',
        'استشارات حلول مالية على مدار الساعة',
        'تقييمات أولية فورية',
        'متابعات عملاء آلية',
        'تحسين معدل تحويل العملاء المحتملين',
      ],
      testimonial: {
        text: 'يتعامل المساعد الذكي مع المشاورات والتقييمات الأولية مما يتيح لخبرائنا الماليين التركيز على الحالات المعقدة. تحسن رضا العملاء بشكل كبير.',
        author: 'فريق ITC Egypt',
        position: 'الإدارة',
      },
      technologies: ['واتساب للأعمال', 'تكامل CRM', 'أدوات التقييم المالي', 'إدارة العملاء المحتملين'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80',
    },
  },
  'future-leading-schools': {
    en: {
      challenge: 'Future Leading Private Schools needed to streamline parent communication, manage enrollment inquiries, and provide instant information about programs from KG to Preparatory.',
      solution: 'Implemented an AI school assistant that handles enrollment inquiries, provides program details, manages parent-teacher communication, and sends automated school updates.',
      results: [
        'Complete KG-Preparatory coverage',
        'Instant enrollment consultation',
        'Automated parent notifications',
        'Streamlined admission process',
        'Enhanced parent satisfaction',
      ],
      testimonial: {
        text: 'Parents get instant answers about enrollment, schedules, and programs at any time. Our admission team can now focus on welcoming families instead of answering repetitive questions.',
        author: 'School Administration',
        position: 'Management',
      },
      technologies: ['WhatsApp Business', 'School Management System', 'Parent Portal', 'Automated Notifications'],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80',
    },
    ar: {
      challenge: 'احتاجت مدارس طلائع المستقبل الخاصة لتبسيط التواصل مع أولياء الأمور وإدارة استفسارات التسجيل وتقديم معلومات فورية عن البرامج من رياض الأطفال إلى الإعدادية.',
      solution: 'تم تطبيق مساعد مدرسة ذكي يتعامل مع استفسارات التسجيل ويوفر تفاصيل البرامج ويدير التواصل بين أولياء الأمور والمعلمين ويرسل تحديثات المدرسة الآلية.',
      results: [
        'تغطية كاملة من رياض الأطفال إلى الإعدادية',
        'استشارة تسجيل فورية',
        'إشعارات آلية لأولياء الأمور',
        'تبسيط عملية القبول',
        'تحسين رضا أولياء الأمور',
      ],
      testimonial: {
        text: 'أولياء الأمور يحصلون على إجابات فورية عن التسجيل والجداول والبرامج في أي وقت. فريق القبول الآن يركز على الترحيب بالعائلات بدلاً من الإجابة على الأسئلة المتكررة.',
        author: 'إدارة المدرسة',
        position: 'الإدارة',
      },
      technologies: ['واتساب للأعمال', 'نظام إدارة المدرسة', 'بوابة أولياء الأمور', 'إشعارات آلية'],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80',
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
