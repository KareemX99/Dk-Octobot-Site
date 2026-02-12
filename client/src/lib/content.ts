import { Language } from './i18n';

// Industries data
export const industries = [
  {
    slug: 'logistics',
    icon: 'Truck',
    features: ['Real-time Tracking', 'Smart Delivery', 'Returns Management'],
    featuresAr: ['تتبع لحظي', 'توصيل ذكي', 'إدارة المرتجعات'],
  },
  {
    slug: 'healthcare',
    icon: 'Hospital',
    features: ['Smart Appointments', 'Medication Reminders', 'Emergency Protocols'],
    featuresAr: ['مواعيد ذكية', 'تذكير بالأدوية', 'بروتوكولات الطوارئ'],
  },
  {
    slug: 'customer-service',
    icon: 'Headphones',
    features: ['AI Response System', 'Multi-language Support', 'Performance Analytics'],
    featuresAr: ['نظام رد آلي', 'دعم متعدد اللغات', 'تحليلات الأداء'],
  },
  {
    slug: 'inventory',
    icon: 'Package',
    features: ['24/7 Monitoring', 'Smart Predictions', 'Space Optimization'],
    featuresAr: ['مراقبة على مدار الساعة', 'توقعات ذكية', 'تحسين المساحة'],
  },
  {
    slug: 'hospitality',
    icon: 'Hotel',
    features: ['Smart Booking', 'Mobile Check-in', 'AI Concierge'],
    featuresAr: ['حجز ذكي', 'تسجيل دخول عبر الموبيل', 'مساعد شخصي ذكي'],
  },
  {
    slug: 'banking',
    icon: 'Building2',
    features: ['Fraud Protection', 'Smart Transactions', 'Instant Verification'],
    featuresAr: ['حماية من الاحتيال', 'معاملات ذكية', 'تحقق فوري'],
  },
  {
    slug: 'ecommerce',
    icon: 'ShoppingCart',
    features: ['Smart Personalization', 'Inventory Sync', 'Sales Analytics'],
    featuresAr: ['تخصيص ذكي', 'مزامنة المخزون', 'تحليلات المبيعات'],
  },
  {
    slug: 'education',
    icon: 'GraduationCap',
    features: ['Adaptive Learning', 'Smart Assessment', 'AI Tutoring'],
    featuresAr: ['تعلم تكيفي', 'تقييم ذكي', 'مدرس خصوصي ذكي'],
  },
];

export const industryNames: Record<string, Record<Language, string>> = {
  logistics: { en: 'Logistics & Shipping', ar: 'اللوجستيات والشحن' },
  healthcare: { en: 'Healthcare Services', ar: 'الخدمات الصحية' },
  'customer-service': { en: 'Customer Service', ar: 'خدمة العملاء' },
  inventory: { en: 'Inventory Management', ar: 'إدارة المخزون' },
  hospitality: { en: 'Hotels & Hospitality', ar: 'الفنادق والضيافة' },
  banking: { en: 'Banking & Finance', ar: 'البنوك والتمويل' },
  ecommerce: { en: 'E-commerce', ar: 'التجارة الإلكترونية' },
  education: { en: 'Education', ar: 'التعليم' },
};

// Case studies data
export const caseStudies = [
  {
    slug: 'qadroon-foundation',
    category: 'Foundation for People with Special Needs',
    metrics: ['95% faster response to customers', '99% customer happiness rate'],
    categoryAr: 'مؤسسات',
    metricsAr: ['استجابة أسرع بنسبة 95% للعملاء', 'معدل سعادة العملاء 99%'],
    logo: '/images/qadroon-logo.png',
    logoBg: 'bg-white',
  },
  {
    slug: 'hira-learning',
    category: 'Education',
    metrics: ['+44% Enrollments', '92% Satisfaction'],
    categoryAr: 'التعليم',
    metricsAr: ['+44% زيادة في التسجيل', '92% نسبة رضا'],
    logo: '/images/hira-logo.jpg',
    logoBg: 'bg-[#131b1e]', // Very dark teal from logo background
  },
  {
    slug: 'i-byco',
    category: 'E-Commerce',
    metrics: ['+85% Revenue', '24/7 Support'],
    categoryAr: 'تجارة إلكترونية',
    metricsAr: ['+85% زيادة في الإيرادات', 'دعم فني 24/7'],
    logo: '/images/ibyco-logo.jpg',
  },
  {
    slug: 'smart-technology',
    category: 'Software Company',
    metrics: ['10K+ Annual Trainees', '85% Customer Growth'],
    categoryAr: 'شركة برمجيات',
    metricsAr: ['+10 آلاف متدرب سنوياً', '85% نمو العملاء'],
    logo: '/images/smart-technology-logo.png',
  },
  {
    slug: 'outbox-places',
    category: 'Travel agency',
    metrics: ['+85% Bookings', '15k+ Happy Travelers'],
    categoryAr: 'وكالة سفر',
    metricsAr: ['+85% حجوزات', '+15 ألف مسافر سعيد'],
    logo: '/images/outbox-places-logo.jpg',
  },
  {
    slug: 'mps-academy',
    category: 'Software Company',
    metrics: ['+90% Higher Tracking Efficiency', '5k+ Teacher'],
    categoryAr: 'شركة برمجيات',
    metricsAr: ['+90% كفاءة تتبع أعلى', '+5 آلاف معلم'],
    logo: '/images/mps-academy-logo.jpg',
  },
  {
    slug: 'f-brakes',
    category: 'Automotive Parts Store',
    metrics: ['+75% growth in new customers', '4.9 Rating'],
    categoryAr: 'متجر قطع غيار سيارات',
    metricsAr: ['+75% نمو في العملاء الجدد', 'تقييم 4.9'],
    logo: '/images/fbrakes-logo.jpg',
  },
  {
    slug: 'focus-ix',
    category: 'Supplies Company',
    metrics: ['+97% Sales', '+1,200 monthly successful orders'],
    categoryAr: 'شركة توريدات',
    metricsAr: ['+97% مبيعات', '+1,200 طلب ناجح شهرياً'],
    logo: '/images/focus-ix-logo.jpg',
  },
  {
    slug: 'healthy-dental',
    category: 'General Dentist',
    metrics: ['+90% faster appointment scheduling', '500+ beautiful new smiles'],
    categoryAr: 'عيادات',
    metricsAr: ['+90% سرعة في حجز المواعيد', '+500 ابتسامة جديدة جميلة'],
    logo: '/images/healthy-dental-logo.png',
  },
  {
    slug: 'egy-bird-tours',
    category: 'Travel agency',
    metrics: ['+80% Bookings', '10K+ Happy Travelers'],
    categoryAr: 'وكالة سفر',
    metricsAr: ['+80% حجوزات', '+10 آلاف مسافر سعيد'],
    logo: '/images/egy-bird-tours-logo.jpg',
  },
  {
    slug: 'codepill-academy',
    category: 'Education',
    metrics: ['+60% Student Growth', '1K+ Future Developers'],
    categoryAr: 'التعليم',
    metricsAr: ['+60% نمو الطلاب', '+1000 مبرمج مستقبلي'],
    logo: '/images/codepill-academy-logo.jpg',
    logoBg: 'bg-[#e63946]',
  },
  {
    slug: 'epico-chemicals',
    category: 'Agricultural Raw Materials',
    metrics: ['+70% Sales Growth', '500+ Satisfied Clients'],
    categoryAr: 'مواد خام زراعية',
    metricsAr: ['+70% نمو في المبيعات', '+500 عميل راضي'],
    logo: '/images/epico-chemicals-logo.jpg',
  },
  {
    slug: 'lam7',
    category: 'Car Showroom',
    metrics: ['+85% Sales', '+250K Clients'],
    categoryAr: 'معرض سيارات',
    metricsAr: ['+85% مبيعات', '+250 ألف عميل'],
    logo: '/images/lam7-logo.jpg',
  },
  {
    slug: 'folo',
    category: 'Men\'s Clothing Store',
    metrics: ['+92% Sales Growth', '1000+ Satisfied Clients'],
    categoryAr: 'متجر ملابس رجالي',
    metricsAr: ['+92% نمو مبيعات', '+1000 عميل راضي'],
    logo: '/images/folo-logo.jpg',
  },
  {
    slug: 'dr-salah-sharawy',
    category: 'Immunity & Allergy Center',
    metrics: ['+5K Patients', 'Specialized Care'],
    categoryAr: 'مركز مناعة وحساسية',
    metricsAr: ['+5000 مريض', 'رعاية متخصصة'],
    logo: '/images/dr-salah-sharawy-logo.jpg',
  },
  {
    slug: 'al-qamash',
    category: 'Fabrics & Bridal Trousseau',
    metrics: ['+1000 Brides', 'Premium Fabrics'],
    categoryAr: 'أقمشة وتجهيز عرائس',
    metricsAr: ['+1000 عروسة', 'أقمشة فاخرة'],
    logo: '/images/al-qamash-logo.jpg',
  },
  {
    slug: 'shahbander',
    category: 'Online Store',
    metrics: ['+15K Orders', 'Top Rated Store'],
    categoryAr: 'متجر إلكتروني',
    metricsAr: ['+15 ألف طلب', 'الأعلى تقييماً'],
    logo: '/images/shahbander-logo.jpg',
  },
  {
    slug: 'itc-egypt',
    category: 'Credit & Financial Consulting',
    metrics: ['Credit Score Repair', 'Financial Solutions'],
    categoryAr: 'استشارات ائتمانية ومصرفية',
    metricsAr: ['تصحيح الملف الائتماني', 'حلول تمويلية'],
    logo: '/images/itc-egypt-logo.png',
  },
];

export const caseStudyNames: Record<string, Record<Language, string>> = {
  'qadroon-foundation': { en: 'Qadroon Foundation', ar: 'مؤسسة قادرون' },
  'hira-learning': { en: 'Hira Learning', ar: 'هيرا للتعلم' },
  'i-byco': { en: 'I Byco', ar: 'أي بايكو' },
  'smart-technology': { en: 'Smart Technology', ar: 'سمارت تكنولوجي' },
  'outbox-places': { en: 'OutBox Places', ar: 'أوت بوكس بلايسز' },
  'mps-academy': { en: 'MPS Academy System', ar: 'نظام أكاديمية MPS' },
  'f-brakes': { en: 'F.Brakes', ar: 'إف بريكس' },
  'focus-ix': { en: 'Focus ix', ar: 'فوكس إكس' },
  'healthy-dental': { en: 'Healthy Dental Clinic', ar: 'عيادة هيلثي لطب الأسنان' },
  'egy-bird-tours': { en: 'Egy Bird Tours', ar: 'ايجي بيرد تورز' },
  'codepill-academy': { en: 'CodePill Academy', ar: 'CodePill Academy' },
  'epico-chemicals': { en: 'EPICO Chemicals', ar: 'EPICO Chemicals' },
  'lam7': { en: 'Lam7', ar: 'لمح لتسويق السيارات' },
  'folo': { en: 'FOLO', ar: 'FOLO' },
  'dr-salah-sharawy': { en: 'Dr. Salah Sharawy', ar: 'د. صلاح شعراوي' },
  'al-qamash': { en: 'Al-Qāmāsh', ar: 'ٱلْقَمَاشْ' },
  'shahbander': { en: 'Shahbander', ar: 'شهبندر' },
  'itc-egypt': { en: 'ITC Egypt', ar: 'ITC Egypt' },
};

// Detailed Industry Data
export const industryDetails: Record<string, any> = {
  logistics: {
    en: {
      description: "Transform your logistics operations with AI-powered tracking, automated dispatch, and intelligent route optimization.",
      challenges: [
        "Inaccurate delivery time estimates",
        "High volume of 'Where is my order?' calls",
        "Complex return processes",
        "Inefficient route planning"
      ],
      solutions: [
        "Real-time predictive tracking updates",
        "Automated WhatsApp status notifications",
        "Self-service return portal via chat",
        "AI-driven route optimization suggestions"
      ],
      features: [
        { title: "Smart Tracking", desc: "Real-time location updates sent automatically to customers" },
        { title: "Instant Dispatch", desc: "Automated driver assignment based on location and load" },
        { title: "Route AI", desc: "Smart route planning to minimize fuel and time" }
      ],
      stats: [
        { value: "40%", label: "Cost Reduction" },
        { value: "90%", label: "Fewer Inquiries" },
        { value: "2x", label: "Faster Delivery" },
        { value: "24/7", label: "Support" }
      ]
    },
    ar: {
      description: "حسّن عملياتك اللوجستية مع التتبع المدعوم بالذكاء الاصطناعي، والإرسال الآلي، وتحسين المسارات الذكي.",
      challenges: [
        "تقديرات غير دقيقة لأوقات التوصيل",
        "حجم كبير من مكالمات 'أين طلبي؟'",
        "عمليات استرجاع معقدة",
        "تخطيط مسارات غير فعال"
      ],
      solutions: [
        "تحديثات تتبع تنبؤية لحظية",
        "إشعارات واتساب تلقائية بالحالة",
        "بوابة استرجاع ذاتية عبر الشات",
        "اقتراحات تحسين المسار بالذكاء الاصطناعي"
      ],
      features: [
        { title: "تتبع ذكي", desc: "تحديثات الموقع اللحظية ترسل تلقائياً للعملاء" },
        { title: "إرسال فوري", desc: "تعيين السائقين تلقائياً بناءً على الموقع والحمولة" },
        { title: "ذكاء المسار", desc: "تخطيط ذكي للمسار لتقليل الوقود والوقت" }
      ],
      stats: [
        { value: "40%", label: "خفص التكاليف" },
        { value: "90%", label: "استفسارات أقل" },
        { value: "2x", label: "توصيل أسرع" },
        { value: "24/7", label: "دعم فني" }
      ]
    }
  },
  healthcare: {
    en: {
      description: "Enhance patient care with smart scheduling, medication reminders, and instant medical inquiries support.",
      challenges: [
        "Missed appointments and no-shows",
        "Overwhelmed reception staff",
        "Patient confusion about medication",
        "Delayed emergency responses"
      ],
      solutions: [
        "Automated appointment reminders & rescheduling",
        "AI receptionist to handle bookings",
        "Smart medication schedules via WhatsApp",
        "Instant triage and emergency routing"
      ],
      features: [
        { title: "Smart Booking", desc: "24/7 appointment scheduling without human intervention" },
        { title: "Care Alerts", desc: "Automated reminders for medication and check-ups" },
        { title: "Triage AI", desc: "Basic symptom assessment to prioritize cases" }
      ],
      stats: [
        { value: "30%", label: "Reduce No-shows" },
        { value: "60%", label: "Admin Time Saved" },
        { value: "24/7", label: "Patient Support" },
        { value: "95%", label: "Satisfaction" }
      ]
    },
    ar: {
      description: "ارتقِ برعاية المرضى مع الجدولة الذكية، وتذكيرات الأدوية، ودعم الاستفسارات الطبية الفوري.",
      challenges: [
        "تفويت المواعيد وعدم الحضور",
        "ضغط كبير على موظفي الاستقبال",
        "ارتباك المرضى بشأن الأدوية",
        "تأخر الاستجابة للحالات الطارئة"
      ],
      solutions: [
        "تذكيرات وتأكيد المواعيد تلقائياً",
        "موظف استقبال ذكي لإدارة الحجوزات",
        "جداول أدوية ذكية عبر واتساب",
        "فرز فوري وتوجيه لحالات الطوارئ"
      ],
      features: [
        { title: "حجز ذكي", desc: "جدولة المواعيد على مدار الساعة دون تدخل بشري" },
        { title: "تنبيهات الرعاية", desc: "تذكيرات تلقائية للأدوية والمراجعات" },
        { title: "فرز بالذكاء الاصطناعي", desc: "تقييم أولي للأعراض لتحديد الأولويات" }
      ],
      stats: [
        { value: "30%", label: "غياب أقل" },
        { value: "60%", label: "توفير وقت الإدارة" },
        { value: "24/7", label: "دعم المرضى" },
        { value: "95%", label: "نسبة الرضا" }
      ]
    }
  },
  'customer-service': {
    en: {
      description: "Deliver exceptional support experiences with instant responses, multi-language capability, and sentiment analysis.",
      challenges: [
        "Slow response times",
        "Inconsistent support quality",
        "Limited support hours",
        "Language barriers"
      ],
      solutions: [
        "Instant AI responses (< 2 seconds)",
        "Standardized knowledge base answers",
        "24/7 support availability",
        "Real-time translation in 50+ languages"
      ],
      features: [
        { title: "Instant Reply", desc: "Never keep a customer waiting again" },
        { title: "Sentiment Analysis", desc: "Detect angry customers and escalate immediately" },
        { title: "Omnichannel", desc: "Consistent experience across all platforms" }
      ],
      stats: [
        { value: "0s", label: "Wait Time" },
        { value: "70%", label: "Cost Savings" },
        { value: "50+", label: "Languages" },
        { value: "100%", label: "Uptime" }
      ]
    },
    ar: {
      description: "قدم تجارب دعم استثنائية مع ردود فورية، وقدرات متعددة اللغات، وتحليل مشاعر العملاء.",
      challenges: [
        "بطء أوقات الاستجابة",
        "تفاوت جودة الدعم",
        "ساعات عمل محدودة للدعم",
        "حواجز اللغة"
      ],
      solutions: [
        "ردود ذكاء اصطناعي فورية (< 2 ثانية)",
        "إجابات موحدة من قاعدة المعرفة",
        "توفر الدعم على مدار 24/7",
        "ترجمة فورية لأكثر من 50 لغة"
      ],
      features: [
        { title: "رد فوري", desc: "لا تجعل العميل ينتظر أبداً" },
        { title: "تحليل المشاعر", desc: "اكتشاف العملاء الغاضبين والتصعيد فوراً" },
        { title: "متعدد القنوات", desc: "تجربة موحدة عبر جميع المنصات" }
      ],
      stats: [
        { value: "0ث", label: "وقت الانتظار" },
        { value: "70%", label: "توفير التكاليف" },
        { value: "50+", label: "لغة مدعومة" },
        { value: "100%", label: "وقت التشغيل" }
      ]
    }
  },
  inventory: {
    en: {
      description: "Optimize your stock levels with predictive analytics and automated reordering systems.",
      challenges: [
        "Stockouts of popular items",
        "Overstocking and waste",
        "Manual counting errors",
        "Supply chain visibility issues"
      ],
      solutions: [
        "Demand forecasting AI",
        "Auto-replenishment triggers",
        "Real-time inventory sync",
        "Supplier integration updates"
      ],
      features: [
        { title: "Demand Forecast", desc: "Predict what will sell before it runs out" },
        { title: "Auto Reorder", desc: "Automatically place orders with suppliers" },
        { title: "Sync Everywhere", desc: "Unified stock levels across all sales channels" }
      ],
      stats: [
        { value: "25%", label: "Less Inventory" },
        { value: "50%", label: "Fewer Stockouts" },
        { value: "30%", label: "Cash Flow Up" },
        { value: "99%", label: "Accuracy" }
      ]
    },
    ar: {
      description: "حسّن مستويات مخزونك مع التحليلات التنبؤية وأنظمة إعادة الطلب الآلية.",
      challenges: [
        "نفاذ المخزون للأصناف الرائجة",
        "تكدس المخزون والهدر",
        "أخطاء الجرد اليدوي",
        "مشاكل رؤية سلسلة التوريد"
      ],
      solutions: [
        "ذكاء اصطناعي لتوقع الطلب",
        "مؤشرات إعادة التزويد التلقائي",
        "مزامنة المخزون لحظياً",
        "تحديثات تكامل الموردين"
      ],
      features: [
        { title: "توقع الطلب", desc: "تنبأ بما سيباع قبل نفاذه" },
        { title: "إعادة طلب آلي", desc: "إرسال طلبات الشراء للموردين تلقائياً" },
        { title: "مزامنة شاملة", desc: "مستويات مخزون موحدة عبر جميع القنوات" }
      ],
      stats: [
        { value: "25%", label: "مخزون أقل" },
        { value: "50%", label: "نقص أقل" },
        { value: "30%", label: "سيولة أفضل" },
        { value: "99%", label: "دقة" }
      ]
    }
  },
  hospitality: {
    en: {
      description: "Elevate guest experiences with AI concierges, mobile check-ins, and personalized service recommendations.",
      challenges: [
        "Long check-in queues",
        "Overburdened front desk",
        "Missed upsell opportunities",
        "Slow room service response"
      ],
      solutions: [
        "Mobile self-check-in via WhatsApp",
        "Virtual concierge for common requests",
        "Automated personalized offers",
        "Instant service request routing"
      ],
      features: [
        { title: "Virtual Concierge", desc: "Book tours, dining, and spa instantly" },
        { title: "Seamless Check-in", desc: "Verify ID and get room key digitally" },
        { title: "Smart Upsell", desc: "Personalized room upgrades and packages" }
      ],
      stats: [
        { value: "40%", label: "Faster Check-in" },
        { value: "20%", label: "More Revenue" },
        { value: "5⭐", label: "Guest Reviews" },
        { value: "24/7", label: "Service" }
      ]
    },
    ar: {
      description: "ارتقِ بتجربة الضيوف مع الكونسيرج الذكي، وتسجيل الدخول عبر الموبايل، وتوصيات الخدمة المخصصة.",
      challenges: [
        "طوابير تسجيل الدخول الطويلة",
        "ضغط العمل في الاستقبال",
        "فرص بيع إضافي ضائعة",
        "استجابة بطيئة لخدمة الغرف"
      ],
      solutions: [
        "تسجيل دخول ذاتي عبر واتساب",
        "كونسيرج افتراضي للطلبات الشائعة",
        "عروض مخصصة تلقائية",
        "توجيه فوري لطلبات الخدمة"
      ],
      features: [
        { title: "كونسيرج افتراضي", desc: "حجز جولات، مطاعم، وسبا فورياً" },
        { title: "دخول سلس", desc: "تحقق من الهوية واستلم المفتاح رقمياً" },
        { title: "بيع ذكي", desc: "ترقيات غرف وباقات مخصصة" }
      ],
      stats: [
        { value: "40%", label: "دخول أسرع" },
        { value: "20%", label: "أرباح أكثر" },
        { value: "5⭐", label: "تقييمات" },
        { value: "24/7", label: "خدمة" }
      ]
    }
  },
  banking: {
    en: {
      description: "Secure and modernize banking operations with fraud detection, automated verification, and smart transaction alerts.",
      challenges: [
        "Increasing fraud attempts",
        "Slow KYC/Verification processes",
        "Complex transaction queries",
        "Customer trust issues"
      ],
      solutions: [
        "Real-time AI fraud pattern detection",
        "Instant document verification",
        "Natural language transaction search",
        "Proactive security alerts"
      ],
      features: [
        { title: "Fraud Guard", desc: "Stop suspicious transactions instantly" },
        { title: "Instant KYC", desc: "Verify customer identity in seconds" },
        { title: "Smart Alerts", desc: "Notify customers of unusual activity" }
      ],
      stats: [
        { value: "99%", label: "Fraud Blocked" },
        { value: "80%", label: "Faster KYC" },
        { value: "24/7", label: "Monitoring" },
        { value: "100%", label: "Secure" }
      ]
    },
    ar: {
      description: "أمّن وطوّر العمليات البنكية مع كشف الاحتيال، والتحقق الآلي، وتنبيهات المعاملات الذكية.",
      challenges: [
        "تزايد محاولات الاحتيال",
        "بطء إجراءات التحقق من الهوية",
        "استفسارات المعاملات المعقدة",
        "مشاكل ثقة العملاء"
      ],
      solutions: [
        "كشف أنماط الاحتيال لحظياً بالذكاء الاصطناعي",
        "تحقق فوري من المستندات",
        "بحث عن المعاملات باللغة الطبيعية",
        "تنبيهات أمنية استباقية"
      ],
      features: [
        { title: "حارس الاحتيال", desc: "إيقاف المعاملات المشبوهة فوراً" },
        { title: "تحقق فوري", desc: "تأكد من هوية العميل في ثوانٍ" },
        { title: "تنبيهات ذكية", desc: "إشعار العملاء بالأنشطة غير المعتادة" }
      ],
      stats: [
        { value: "99%", label: "احتيال ممنوع" },
        { value: "80%", label: "تحقق أسرع" },
        { value: "24/7", label: "مراقبة" },
        { value: "100%", label: "أمان" }
      ]
    }
  },
  ecommerce: {
    en: {
      description: "Boost online sales with personalized recommendations, cart abandonment recovery, and automated support.",
      challenges: [
        "High cart abandonment rates",
        "Low customer retention",
        "Generic shopping experience",
        "Customer support overload"
      ],
      solutions: [
        "Automated abandoned cart messages",
        "AI product recommendations",
        "Personalized marketing campaigns",
        "Instant order status updates"
      ],
      features: [
        { title: "Recovery Bot", desc: "Bring back customers who left items" },
        { title: "Smart Recommender", desc: "Suggest products they'll love" },
        { title: "Order Tracker", desc: "Automated shipping updates" }
      ],
      stats: [
        { value: "25%", label: "More Sales" },
        { value: "40%", label: "Less Abandonment" },
        { value: "3x", label: "ROI" },
        { value: "24/7", label: "Selling" }
      ]
    },
    ar: {
      description: "عزز المبيعات أونلاين مع التوصيات الشخصية، واستعادة السلات المتروكة، والدعم الآلي.",
      challenges: [
        "معدلات عالية لترك السلة",
        "ضعف الاحتفاظ بالعملاء",
        "تجربة تسوق عامة غير مخصصة",
        "ضغط على خدمة العملاء"
      ],
      solutions: [
        "رسائل آلية للسلات المتروكة",
        "توصيات منتجات بالذكاء الاصطناعي",
        "حملات تسويقية مخصصة",
        "تحديثات حالة الطلب الفورية"
      ],
      features: [
        { title: "بوت الاستعادة", desc: "استرجع العملاء الذين تركوا منتجات" },
        { title: "موصي ذكي", desc: "اقترح منتجات سيحبونها" },
        { title: "متبع الطلبات", desc: "تحديثات شحن آلية" }
      ],
      stats: [
        { value: "25%", label: "مبيعات أكثر" },
        { value: "40%", label: "ترك أقل للسلة" },
        { value: "3x", label: "عائد استثمار" },
        { value: "24/7", label: "بيع مستمر" }
      ]
    }
  },
  education: {
    en: {
      description: "Revolutionize learning with adaptive tutoring, automated assessments, and student support systems.",
      challenges: [
        "One-size-fits-all teaching",
        "Delayed feedback on assignments",
        "Student disengagement",
        "Administrative burden on teachers"
      ],
      solutions: [
        "Personalized learning paths AI",
        "Instant grading and feedback",
        "Interactive learning assistants",
        "Automated administrative tasks"
      ],
      features: [
        { title: "AI Tutor", desc: "Personalized help available 24/7" },
        { title: "Smart Grading", desc: "Instant assessment of quizzes and assignments" },
        { title: "Engagement Tracker", desc: "Identify students needing help early" }
      ],
      stats: [
        { value: "30%", label: "Better Grades" },
        { value: "50%", label: "Time Saved" },
        { value: "85%", label: "Engagement" },
        { value: "24/7", label: "Learning" }
      ]
    },
    ar: {
      description: "أحدث ثورة في التعليم مع التدريس التكيفي، والتقييمات الآلية، وأنظمة دعم الطلاب.",
      challenges: [
        "طريقة تدريس واحدة للجميع",
        "تأخر الملاحظات على الواجبات",
        "عدم تفاعل الطلاب",
        "العبء الإداري على المعلمين"
      ],
      solutions: [
        "مسارات تعلم مخصصة بالذكاء الاصطناعي",
        "تصحيح وملاحظات فورية",
        "مساعدين تعليميين تفاعليين",
        "أتمتة المهام الإدارية"
      ],
      features: [
        { title: "مدرس ذكي", desc: "مساعدة شخصية متاحة 24/7" },
        { title: "تصحيح ذكي", desc: "تقييم فوري للاختبارات والواجبات" },
        { title: "متبع التفاعل", desc: "تحديد الطلاب المحتاجين للمساعدة مبكراً" },
      ],
      stats: [
        { value: "30%", label: "درجات أفضل" },
        { value: "50%", label: "توفير وقت" },
        { value: "85%", label: "تفاعل" },
        { value: "24/7", label: "تعلم" }
      ]
    }
  }
};

// Pricing data
export const platforms = [
  { id: 'facebook', name: 'Facebook', nameAr: 'فيسبوك', icon: 'Facebook' },
  { id: 'whatsapp', name: 'WhatsApp', nameAr: 'واتساب', icon: 'MessageCircle' },
  { id: 'instagram', name: 'Instagram', nameAr: 'إنستجرام', icon: 'Instagram' },
  { id: 'telegram', name: 'Telegram', nameAr: 'تيليجرام', icon: 'Send' },
  { id: 'website', name: 'Website', nameAr: 'موقع ويب', icon: 'Globe' },
  { id: 'custom', name: 'Custom', nameAr: 'مخصص', icon: 'Settings' },
];

export const durations = [
  { id: '1month', label: '1 Month', labelAr: 'شهر واحد', discount: 0 },
  { id: '3months', label: '3 Months', labelAr: '3 أشهر', discount: 0 },
  { id: '6months', label: '6 Months', labelAr: '6 أشهر', discount: 10 },
  { id: '1year', label: '1 Year', labelAr: 'سنة واحدة', discount: 10 },
];

export const pricingItems = [
  {
    id: 'smart-sales-messenger',
    nameEn: 'Smart Sales Messenger',
    nameAr: 'مراسل المبيعات الذكي',
    descEn: 'Instant response & customer persuasion',
    descAr: 'رد فوري وإقناع العملاء',
    price: 1500,
    features: [
      'Full understanding of products/services',
      'Automatic deal closing',
      'Admin WhatsApp notifications',
    ],
    featuresAr: [
      'فهم كامل للمنتجات/الخدمات',
      'إغلاق الصفقات تلقائياً',
      'إشعارات واتساب للمسؤول',
    ],
  },
  {
    id: 'comment-replies',
    nameEn: 'Comment Replies',
    nameAr: 'الرد على التعليقات',
    descEn: 'Smart comment management',
    descAr: 'إدارة ذكية للتعليقات',
    price: 500,
    features: [
      'Auto-reply to comments',
      'Hide negative comments',
      'Full comment control',
    ],
    featuresAr: [
      'رد تلقائي على التعليقات',
      'إخفاء التعليقات السلبية',
      'تحكم كامل في التعليقات',
    ],
  },
  {
    id: 'customer-analysis',
    nameEn: 'Customer Analysis & Retargeting',
    nameAr: 'تحليل العملاء وإعادة الاستهداف',
    descEn: 'Deep understanding of each customer',
    descAr: 'فهم عميق لكل عميل',
    price: 1500,
    featured: true,
    features: [
      'Comprehensive customer analysis',
      'Understand customer interests',
      'Personalized follow-up messages',
    ],
    featuresAr: [
      'تحليل شامل للعملاء',
      'فهم اهتمامات العملاء',
      'رسائل متابعة مخصصة',
    ],
  },
];

export const bundleOffer = {
  nameEn: 'Complete Facebook Bundle',
  nameAr: 'باقة فيسبوك الكاملة',
  originalPrice: 7499,
  discountedPrice: 5499,
  includes: 'Messenger Sales + Comment Replies + WhatsApp Sales + Instagram Sales + voice-image-analysis',
};

// Testimonials
export const testimonials = [
  {
    name: 'Mr. Hesham Emam',
    role: 'Owner, Men\'s clothing store',
    quote: 'OctoBot transformed our customer service completely. Response times are down 80% and satisfaction is through the roof!',
  },
  {
    name: 'Mr. Razik',
    role: 'Founder, ARM-GROUP',
    quote: 'As long as there\'s a professional team like yours, I\'m confident the service will always be exceptional.',
  },
  {
    name: 'Dr. Hassan',
    role: 'Founder, Healthy Dental Clinic',
    quote: 'Octobot has taken a huge load off me when it comes to responding to patients at my clinic.',
  },
  {
    name: 'Eng. Mohamed Ali',
    role: 'Founder, OutBox Places',
    quote: 'The real gain for me is getting to know a team that I genuinely believe will be a key part of our success.',
  },
  {
    name: 'Mr. Hossam',
    role: 'Founder, Qadroon Foundation',
    quote: 'I\'ve never experienced a technical support team like yours. The level of post-contract support is truly exceptional.',
  },
  {
    name: 'Mr. Abdelrahman',
    role: 'Founder, Focus ix',
    quote: 'The Sales Bot has been performing incredibly well. Clients are already convinced before we even contact them.',
  },
];
