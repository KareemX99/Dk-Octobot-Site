/* 
 * Organic Tech Fluidity Design:
 * - Case study cards with success metrics
 * - Warm gradient overlays on hover
 * - Organic blob shapes for visual interest
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { caseStudies, caseStudyNames } from '@/lib/content';
import { ArrowRight, TrendingUp } from 'lucide-react';
import SEO from '@/components/SEO';
import { seoContent } from '@/lib/seo';

export default function Portfolio() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-coral/10 rounded-full blob-shape blur-3xl" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              <span className="bg-gradient-to-r from-primary via-coral to-accent bg-clip-text text-transparent">
                {language === 'en' ? 'Success Stories' : 'قصص النجاح'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === 'en'
                ? 'Real results from businesses that transformed their customer service with DK-OctoBot'
                : 'نتائج حقيقية من الشركات التي حولت خدمة العملاء مع DK-OctoBot'}
            </p>
          </div>
        </div>
      </section>

      {/* Success Metrics Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-coral/10 to-accent/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-primary">13+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Success Stories' : 'قصة نجاح'}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-coral">95%</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Avg. Improvement' : 'متوسط التحسين'}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-accent">8+</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Industries' : 'قطاعات'}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">
                {language === 'en' ? 'Support' : 'دعم'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link key={study.slug} href={`/${language}/portfolio/${study.slug}`}>
                <div
                  className="group block rounded-3xl bg-card border border-border hover:border-primary/30 shadow-organic hover:shadow-organic-lg transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-4 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Header with gradient */}
                  <div className={`relative h-32 flex items-center justify-center overflow-hidden ${study.logo ? 'bg-black/5' : 'bg-gradient-to-br from-primary via-coral to-accent'}`}>
                    {study.logo ? (
                      <>
                        {/* Blurred Background Layer for Seamless Transition */}
                        <div
                          className="absolute inset-0 opacity-50 blur-xl scale-150 transform"
                          style={{
                            backgroundImage: `url(${study.logo})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        />
                        {/* Main Logo in Circle */}
                        <div className="relative z-10 w-20 h-20 rounded-full bg-white shadow-lg overflow-hidden flex items-center justify-center">
                          <img
                            src={study.logo}
                            alt={caseStudyNames[study.slug][language]}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </>
                    ) : (
                      <TrendingUp className="h-12 w-12 text-white opacity-80" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                        {caseStudyNames[study.slug][language]}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ar' && study.categoryAr ? study.categoryAr : study.category}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-2">
                      {(language === 'ar' && study.metricsAr ? study.metricsAr : study.metrics).map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-foreground/80">{metric}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-medium pt-4 group-hover:gap-4 transition-all">
                      {t.cta.viewCaseStudy}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Visual */}
      {/* Problem & Solution Visuals */}
      {/* Success Visual */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                {language === 'en' ? 'Your Success Is Our Mission' : 'نجاحك هو مهمتنا'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'Every business is unique, and so are our solutions. We work closely with you to understand your challenges and deliver AI-powered automation that drives real, measurable results.'
                  : 'كل عمل فريد من نوعه، وكذلك حلولنا. نعمل معك عن كثب لفهم تحدياتك وتقديم أتمتة مدعومة بالذكاء الاصطناعي تحقق نتائج حقيقية وقابلة للقياس.'}
              </p>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 flex justify-center">
              <img
                src="/images/promo-message.png"
                alt="Message that might lose a deal"
                className="w-auto h-auto max-h-[500px] rounded-3xl shadow-organic-lg object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
