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

            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/kvk8t54dYp8FqVkMpydns7/sandbox/t1480D5Ow1AqYUzbtDiEBK-img-4_1770324862000_na1fn_c3VjY2Vzcy1ncm93dGg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva3ZrOHQ1NGRZcDhGcVZrTXB5ZG5zNy9zYW5kYm94L3QxNDgwRDVPdzFBcVlVemJ0RGlFQkstaW1nLTRfMTc3MDMyNDg2MjAwMF9uYTFmbl9jM1ZqWTJWemN5MW5jbTkzZEdnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=In1De7-n3SLpnOrPHAa~PPMj70tjkVaW64qpL4KPifcOJOn9sLvULyYKG~0PSvohunJ14JfUFueyFMbIeKRTBhXw3gUg~gYiQb2nvXPq09X-K0YhoKQvt9LHW5Zu98-eppulC3x6t~eLdXdf1uFlEY99P9cPeLEFjrLr5HrtFB~paW2E8u2T7m0OZZ3vqX-~6KtG6wW9z~GAX0bdloVpiNyIrVsUYzbLZX-v0XOgNMjDLOp~a~BUj2rMqt2uFxwa1veB74Sx0GaQJV~EpHT7NpmF~4ZyV1RyLDPVal~PMPQj4c~JICgm4inYfkTXtP6uWtExC6vpcyBKCNg-jLKSLg__"
                alt="Success and Growth"
                className="w-full h-auto rounded-3xl shadow-organic-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
