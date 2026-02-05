import { Language } from './i18n';

// Industries data
export const industries = [
  {
    slug: 'logistics',
    icon: 'Truck',
    features: ['Real-time Tracking', 'Smart Delivery', 'Returns Management'],
  },
  {
    slug: 'healthcare',
    icon: 'Hospital',
    features: ['Smart Appointments', 'Medication Reminders', 'Emergency Protocols'],
  },
  {
    slug: 'customer-service',
    icon: 'Headphones',
    features: ['AI Response System', 'Multi-language Support', 'Performance Analytics'],
  },
  {
    slug: 'inventory',
    icon: 'Package',
    features: ['24/7 Monitoring', 'Smart Predictions', 'Space Optimization'],
  },
  {
    slug: 'hospitality',
    icon: 'Hotel',
    features: ['Smart Booking', 'Mobile Check-in', 'AI Concierge'],
  },
  {
    slug: 'banking',
    icon: 'Building2',
    features: ['Fraud Protection', 'Smart Transactions', 'Instant Verification'],
  },
  {
    slug: 'ecommerce',
    icon: 'ShoppingCart',
    features: ['Smart Personalization', 'Inventory Sync', 'Sales Analytics'],
  },
  {
    slug: 'education',
    icon: 'GraduationCap',
    features: ['Adaptive Learning', 'Smart Assessment', 'AI Tutoring'],
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
  },
  {
    slug: 'hira-learning',
    category: 'Education',
    metrics: ['+44% Enrollments', '92% Satisfaction'],
  },
  {
    slug: 'i-byco',
    category: 'E-Commerce',
    metrics: ['+85% Revenue', '24/7 Support'],
  },
  {
    slug: 'smart-technology',
    category: 'Software Company',
    metrics: ['10K+ Annual Trainees', '85% Customer Growth'],
  },
  {
    slug: 'outbox-places',
    category: 'Travel agency',
    metrics: ['+85% Bookings', '15k+ Happy Travelers'],
  },
  {
    slug: 'mps-academy',
    category: 'Software Company',
    metrics: ['+90% Higher Tracking Efficiency', '5k+ Teacher'],
  },
  {
    slug: 'f-brakes',
    category: 'Automotive Parts Store',
    metrics: ['+75% growth in new customers', '4.9 Rating'],
  },
  {
    slug: 'focus-ix',
    category: 'Supplies Company',
    metrics: ['+97% Sales', '+1,200 monthly successful orders'],
  },
  {
    slug: 'healthy-dental',
    category: 'General Dentist',
    metrics: ['+90% faster appointment scheduling', '500+ beautiful new smiles'],
  },
];

export const caseStudyNames: Record<string, Record<Language, string>> = {
  'qadroon-foundation': { en: 'Qadroon Foundation', ar: 'مؤسسة قدرون' },
  'hira-learning': { en: 'Hira Learning', ar: 'هيرا للتعلم' },
  'i-byco': { en: 'I Byco', ar: 'أي بايكو' },
  'smart-technology': { en: 'Smart Technology', ar: 'سمارت تكنولوجي' },
  'outbox-places': { en: 'OutBox Places', ar: 'أوت بوكس بلايسز' },
  'mps-academy': { en: 'MPS Academy System', ar: 'نظام أكاديمية MPS' },
  'f-brakes': { en: 'F.Brakes', ar: 'إف بريكس' },
  'focus-ix': { en: 'Focus ix', ar: 'فوكس إكس' },
  'healthy-dental': { en: 'Healthy Dental Clinic', ar: 'عيادة هيلثي لطب الأسنان' },
};

// Pricing data
export const platforms = [
  { id: 'facebook', name: 'Facebook', icon: 'Facebook' },
  { id: 'whatsapp', name: 'WhatsApp', icon: 'MessageCircle' },
  { id: 'instagram', name: 'Instagram', icon: 'Instagram' },
  { id: 'telegram', name: 'Telegram', icon: 'Send' },
  { id: 'website', name: 'Website', icon: 'Globe' },
  { id: 'custom', name: 'Custom', icon: 'Settings' },
];

export const durations = [
  { id: '1month', label: '1 Month', discount: 0 },
  { id: '3months', label: '3 Months', discount: 0 },
  { id: '6months', label: '6 Months', discount: 10 },
  { id: '1year', label: '1 Year', discount: 10 },
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
