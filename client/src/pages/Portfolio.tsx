/*
 * Premium Portfolio - Glassmorphism Cards with Filter Tabs
 * - Category filter system for scalability
 * - Glassmorphism card design with glow effects
 * - Animated metric badges
 * - Staggered entrance animations via framer-motion
 */

import { useState, useMemo, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { caseStudies, caseStudyNames } from '@/lib/content';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import { seoContent } from '@/lib/seo';
import { motion, AnimatePresence } from 'framer-motion';

// Derive unique categories from case studies data
function getCategoryFilters(language: 'en' | 'ar') {
  const allLabel = language === 'en' ? 'All' : 'الكل';
  const cats = new Map<string, string>();
  caseStudies.forEach((s) => {
    const key = s.category;
    const label = language === 'ar' && s.categoryAr ? s.categoryAr : s.category;
    if (!cats.has(key)) cats.set(key, label);
  });
  return [{ key: 'all', label: allLabel }, ...[...cats.entries()].map(([key, label]) => ({ key, label }))];
}

export default function Portfolio() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleFilterClick = useCallback((key: string) => {
    setActiveFilter(key);
    // Auto-scroll the clicked button into view on mobile
    const container = scrollRef.current;
    if (!container) return;
    const btn = container.querySelector(`[data-filter-key="${key}"]`) as HTMLElement | null;
    if (btn) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      const scrollLeft = btn.offsetLeft - containerRect.width / 2 + btnRect.width / 2;
      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, []);

  const filters = useMemo(() => getCategoryFilters(language), [language]);

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'all') return caseStudies;
    return caseStudies.filter((s) => s.category === activeFilter);
  }, [activeFilter]);

  // Extract the primary metric number (e.g. "+97%" or "10K+") from the metric string
  const extractMetricValue = (metric: string) => {
    const match = metric.match(/[\d+,.]+[%Kk+]*/);
    return match ? match[0] : '';
  };

  const extractMetricLabel = (metric: string) => {
    const match = metric.match(/[\d+,.]+[%Kk+]*/);
    if (!match) return metric;
    return metric.replace(match[0], '').trim();
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/6 rounded-full blur-[120px]" />

        <div className="container relative">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              {language === 'en' ? '22+ Success Stories' : '+22 قصة نجاح'}
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              <span className="bg-gradient-to-r from-primary via-cyan to-accent bg-clip-text text-transparent">
                {language === 'en' ? 'Success Stories' : 'قصص النجاح'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {language === 'en'
                ? 'Real results from businesses that transformed their customer service with DK-OctoBot'
                : 'نتائج حقيقية من الشركات التي حولت خدمة العملاء مع DK-OctoBot'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics Banner */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-cyan/10 to-accent/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '22+', label: language === 'en' ? 'Success Stories' : 'قصة نجاح', color: 'text-primary' },
              { value: '95%', label: language === 'en' ? 'Avg. Improvement' : 'متوسط التحسين', color: 'text-cyan' },
              { value: '8+', label: language === 'en' ? 'Industries' : 'قطاعات', color: 'text-accent' },
              { value: '24/7', label: language === 'en' ? 'Support' : 'دعم', color: 'text-primary' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className={`text-4xl font-display font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs + Case Studies Grid */}
      <section className="py-20">
        <div className="container">
          {/* Filter Tabs - Modern Animated */}
          <motion.div
            className="relative mb-8 md:mb-14"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glassmorphism container */}
            <div className="relative rounded-2xl bg-card/50 dark:bg-card/30 backdrop-blur-xl border border-border/50 p-2 md:p-3 shadow-sm">
              {/* Fade edges for scroll hint */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card/80 dark:from-card/60 to-transparent z-10 rounded-l-2xl" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card/80 dark:from-card/60 to-transparent z-10 rounded-r-2xl" />

              {/* Scrollable container - horizontal scroll on all viewports */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto scrollbar-hide gap-1.5 py-1 px-8"
              >
                {filters.map((f) => (
                  <button
                    key={f.key}
                    data-filter-key={f.key}
                    onClick={() => handleFilterClick(f.key)}
                    className={`relative shrink-0 px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-[13px] md:text-sm font-medium transition-all duration-300 z-[1] whitespace-nowrap ${activeFilter === f.key
                      ? 'text-white'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                  >
                    {/* Animated background pill */}
                    {activeFilter === f.key && (
                      <motion.span
                        layoutId="activeFilterPill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-cyan shadow-lg shadow-primary/25"
                        style={{ zIndex: -1 }}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <div>
                    <div className="group portfolio-card rounded-2xl overflow-hidden h-full flex flex-col">
                      {/* Logo Header */}
                      <div className="relative h-36 flex items-center justify-center overflow-hidden logo-mesh">
                        {/* Decorative mesh dots */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                          backgroundSize: '20px 20px',
                        }} />

                        {study.logo ? (
                          <>
                            {/* Blurred echo behind logo */}
                            <div
                              className="absolute inset-0 opacity-30 blur-2xl scale-125"
                              style={{
                                backgroundImage: `url(${study.logo})`,
                                backgroundSize: 'contain',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                              }}
                            />
                            {/* Logo circle */}
                            <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/90 dark:bg-white/95 shadow-lg overflow-hidden flex items-center justify-center ring-2 ring-white/20 group-hover:ring-primary/30 transition-all duration-500 group-hover:scale-110">
                              <img
                                src={study.logo}
                                alt={caseStudyNames[study.slug][language]}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </>
                        ) : (
                          <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                            <TrendingUp className="h-10 w-10 text-white" />
                          </div>
                        )}

                        {/* Hover overlay glow */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1 gap-4">
                        {/* Title + Category */}
                        <div>
                          <h3 className="text-xl font-display font-bold mb-1.5 group-hover:text-primary transition-colors duration-300">
                            {caseStudyNames[study.slug][language]}
                          </h3>
                          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-primary/8 text-primary/80 border border-primary/10">
                            {language === 'ar' && study.categoryAr ? study.categoryAr : study.category}
                          </span>
                        </div>

                        {/* Metric Badges */}
                        <div className="flex flex-wrap gap-2 flex-1">
                          {(language === 'ar' && study.metricsAr ? study.metricsAr : study.metrics).map((metric, idx) => {
                            const value = extractMetricValue(metric);
                            const label = extractMetricLabel(metric);
                            return (
                              <div
                                key={idx}
                                className="metric-badge rounded-xl px-3.5 py-2.5 flex flex-col items-center justify-center text-center min-w-[100px] flex-1"
                              >
                                {value && (
                                  <span className="text-lg font-display font-bold text-primary">
                                    {value}
                                  </span>
                                )}
                                <span className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                                  {label || metric}
                                </span>
                              </div>
                            );
                          })}
                        </div>


                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Success Visual */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                {language === 'en' ? 'Your Success Is Our Mission' : 'نجاحك هو مهمتنا'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'Every business is unique, and so are our solutions. We work closely with you to understand your challenges and deliver AI-powered automation that drives real, measurable results.'
                  : 'كل عمل فريد من نوعه، وكذلك حلولنا. نعمل معك عن كثب لفهم تحدياتك وتقديم أتمتة مدعومة بالذكاء الاصطناعي تحقق نتائج حقيقية وقابلة للقياس.'}
              </p>
            </motion.div>

            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/images/promo-message.png"
                alt="Message that might lose a deal"
                className="w-auto h-auto max-h-[500px] rounded-3xl shadow-tech-lg object-contain mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
