/* 
 * Organic Tech Fluidity Design:
 * - Clean legal document layout
 * - Warm gradient backgrounds
 * - Easy-to-read typography
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLocation } from 'wouter';

export default function Legal() {
  const { language } = useLanguage();
  const [location] = useLocation();

  const pageType = location.includes('privacy') ? 'privacy'
    : location.includes('terms') ? 'terms'
      : 'security';

  const content = {
    privacy: {
      title: language === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية',
      sections: language === 'en' ? [
        {
          title: 'Information We Collect',
          content: 'We collect information you provide directly to us when using DK-OctoBot services, including contact information, business details, and usage data to improve our services.',
        },
        {
          title: 'How We Use Your Information',
          content: 'We use collected information to provide, maintain, and improve our services, communicate with you, and ensure the security of our platform.',
        },
        {
          title: 'Data Security',
          content: 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.',
        },
        {
          title: 'Your Rights',
          content: 'You have the right to access, correct, or delete your personal information. Contact us at octobotchatbot@gmail.com for any privacy-related requests.',
        },
      ] : [
        {
          title: 'المعلومات التي نجمعها',
          content: 'نجمع المعلومات التي تقدمها لنا مباشرة عند استخدام خدمات DK-OctoBot، بما في ذلك معلومات الاتصال وتفاصيل العمل وبيانات الاستخدام لتحسين خدماتنا.',
        },
        {
          title: 'كيف نستخدم معلوماتك',
          content: 'نستخدم المعلومات المجمعة لتوفير خدماتنا وصيانتها وتحسينها، والتواصل معك، وضمان أمان منصتنا.',
        },
        {
          title: 'أمان البيانات',
          content: 'نطبق التدابير التقنية والتنظيمية المناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف أو التدمير.',
        },
        {
          title: 'حقوقك',
          content: 'لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. اتصل بنا على octobotchatbot@gmail.com لأي طلبات متعلقة بالخصوصية.',
        },
      ],
    },
    terms: {
      title: language === 'en' ? 'Terms of Service' : 'شروط الخدمة',
      sections: language === 'en' ? [
        {
          title: 'Acceptance of Terms',
          content: 'By accessing and using DK-OctoBot services, you accept and agree to be bound by these Terms of Service and our Privacy Policy.',
        },
        {
          title: 'Service Description',
          content: 'DK-OctoBot provides AI-powered chatbot services for customer service automation across multiple platforms. We reserve the right to modify or discontinue services with notice.',
        },
        {
          title: 'User Responsibilities',
          content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        },
        {
          title: 'Payment Terms',
          content: 'Subscription fees are billed monthly or according to your chosen plan. Payments are non-refundable except as required by law.',
        },
        {
          title: 'Limitation of Liability',
          content: 'DK-OctoBot shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.',
        },
      ] : [
        {
          title: 'قبول الشروط',
          content: 'من خلال الوصول إلى خدمات DK-OctoBot واستخدامها، فإنك تقبل وتوافق على الالتزام بشروط الخدمة هذه وسياسة الخصوصية الخاصة بنا.',
        },
        {
          title: 'وصف الخدمة',
          content: 'يوفر DK-OctoBot خدمات شات بوت مدعومة بالذكاء الاصطناعي لأتمتة خدمة العملاء عبر منصات متعددة. نحتفظ بالحق في تعديل الخدمات أو إيقافها مع الإشعار.',
        },
        {
          title: 'مسؤوليات المستخدم',
          content: 'أنت مسؤول عن الحفاظ على سرية بيانات اعتماد حسابك وعن جميع الأنشطة التي تحدث تحت حسابك.',
        },
        {
          title: 'شروط الدفع',
          content: 'يتم إصدار فواتير رسوم الاشتراك شهرياً أو وفقاً للخطة التي اخترتها. المدفوعات غير قابلة للاسترداد إلا كما يقتضي القانون.',
        },
        {
          title: 'حدود المسؤولية',
          content: 'لن يكون DK-OctoBot مسؤولاً عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية ناشئة عن استخدامك لخدماتنا.',
        },
      ],
    },
    security: {
      title: language === 'en' ? 'Security' : 'الأمان',
      sections: language === 'en' ? [
        {
          title: 'Data Encryption',
          content: 'All data transmitted between your systems and DK-OctoBot is encrypted using industry-standard SSL/TLS protocols to ensure confidentiality and integrity.',
        },
        {
          title: 'Access Controls',
          content: 'We implement strict access controls and authentication mechanisms to ensure that only authorized personnel can access sensitive data.',
        },
        {
          title: 'Regular Security Audits',
          content: 'Our systems undergo regular security assessments and vulnerability testing to identify and address potential security risks.',
        },
        {
          title: 'Data Storage',
          content: 'Customer data is stored in secure, encrypted databases with regular backups to prevent data loss and ensure business continuity.',
        },
        {
          title: 'Incident Response',
          content: 'We have established incident response procedures to quickly identify, contain, and remediate any security incidents that may occur.',
        },
      ] : [
        {
          title: 'تشفير البيانات',
          content: 'يتم تشفير جميع البيانات المنقولة بين أنظمتك و DK-OctoBot باستخدام بروتوكولات SSL/TLS القياسية في الصناعة لضمان السرية والنزاهة.',
        },
        {
          title: 'ضوابط الوصول',
          content: 'نطبق ضوابط وصول صارمة وآليات مصادقة لضمان أن الموظفين المصرح لهم فقط يمكنهم الوصول إلى البيانات الحساسة.',
        },
        {
          title: 'عمليات تدقيق أمنية منتظمة',
          content: 'تخضع أنظمتنا لتقييمات أمنية منتظمة واختبار الثغرات لتحديد ومعالجة المخاطر الأمنية المحتملة.',
        },
        {
          title: 'تخزين البيانات',
          content: 'يتم تخزين بيانات العملاء في قواعد بيانات آمنة ومشفرة مع نسخ احتياطية منتظمة لمنع فقدان البيانات وضمان استمرارية العمل.',
        },
        {
          title: 'الاستجابة للحوادث',
          content: 'لدينا إجراءات استجابة للحوادث لتحديد واحتواء ومعالجة أي حوادث أمنية قد تحدث بسرعة.',
        },
      ],
    },
  };

  const currentContent = content[pageType];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {currentContent.title}
              </span>
            </h1>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Last updated: December 2025' : 'آخر تحديث: ديسمبر 2025'}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {currentContent.sections.map((section, index) => (
              <div
                key={index}
                className="space-y-4 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h2 className="text-2xl font-display font-bold">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
            <h3 className="text-xl font-display font-bold mb-4">
              {language === 'en' ? 'Questions?' : 'أسئلة؟'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {language === 'en'
                ? 'If you have any questions about this policy, please contact us:'
                : 'إذا كان لديك أي أسئلة حول هذه السياسة، يرجى الاتصال بنا:'}
            </p>
            <p className="text-foreground">
              <strong>{language === 'en' ? 'Email:' : 'البريد الإلكتروني:'}</strong> octobotchatbot@gmail.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
