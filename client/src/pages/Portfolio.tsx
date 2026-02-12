/*
 * Premium Portfolio - Compact Category Grid with Mini Carousels
 * - Categories in a responsive grid (2-3-4 cols)
 * - Each category is a compact card showing one client at a time
 * - Left/right arrows to cycle through clients
 * - Clean, minimal design with less vertical space
 */

import { useState, useMemo, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { caseStudies, caseStudyNames } from '@/lib/content';
import { TrendingUp, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Types ─── */
type CaseStudy = (typeof caseStudies)[number];

interface CategoryGroup {
  key: string;
  label: string;
  items: CaseStudy[];
}

/* ─── Helpers ─── */
function groupByCategory(language: 'en' | 'ar'): CategoryGroup[] {
  const map = new Map<string, { label: string; items: CaseStudy[] }>();
  caseStudies.forEach((s) => {
    const key = s.category;
    if (!map.has(key)) {
      const label = language === 'ar' && s.categoryAr ? s.categoryAr : s.category;
      map.set(key, { label, items: [] });
    }
    map.get(key)!.items.push(s);
  });
  return Array.from(map.entries()).map(([key, val]) => ({
    key,
    label: val.label,
    items: val.items,
  }));
}

/* ─── Single Category Card with internal carousel ─── */
function CategoryCard({
  group,
  language,
}: {
  group: CategoryGroup;
  language: 'en' | 'ar';
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = group.items.length;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const study = group.items[currentIndex];

  return (
    <div className="portfolio-category-card group">
      {/* Category Title */}
      <div className="text-center mb-3">
        <h3 className="text-sm md:text-base font-display font-bold text-foreground">
          {group.label}
        </h3>
      </div>

      {/* Client Display Area */}
      <div className="relative flex items-center justify-center min-h-[140px]">
        {/* Left Arrow */}
        {total > 1 && (
          <button
            onClick={prev}
            className="carousel-arrow-mini absolute left-0 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        {/* Client Content - Animated */}
        <div className="flex-1 px-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center gap-2"
            >
              {/* Logo */}
              {study.logo ? (
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-white/95 shadow-md overflow-hidden flex items-center justify-center ring-1 ring-border/30">
                  <img
                    src={study.logo}
                    alt={caseStudyNames[study.slug][language]}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
              )}

              {/* Name */}
              <span className="text-xs md:text-sm font-semibold text-foreground text-center leading-tight line-clamp-1">
                {caseStudyNames[study.slug][language]}
              </span>

              {/* Metrics inline */}
              <div className="flex gap-2 flex-wrap justify-center">
                {(language === 'ar' && study.metricsAr ? study.metricsAr : study.metrics).map(
                  (metric, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/10"
                    >
                      {metric}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        {total > 1 && (
          <button
            onClick={next}
            className="carousel-arrow-mini absolute right-0 z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Dots indicator */}
      {total > 1 && (
        <div className="flex justify-center gap-1 mt-3">
          {group.items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex
                  ? 'bg-primary w-4'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              aria-label={`Go to client ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Main Portfolio Page ─── */
export default function Portfolio() {
  const { language } = useLanguage();
  const categoryGroups = useMemo(() => groupByCategory(language), [language]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Compact */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent/6 rounded-full blur-[120px]" />

        <div className="container relative">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              {language === 'en' ? '22+ Success Stories' : '+22 قصة نجاح'}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              <span className="bg-gradient-to-r from-primary via-cyan to-accent bg-clip-text text-transparent">
                {language === 'en' ? 'Success Stories' : 'قصص النجاح'}
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {language === 'en'
                ? 'Real results from businesses that transformed their customer service with DK-OctoBot'
                : 'نتائج حقيقية من الشركات التي حولت خدمة العملاء مع DK-OctoBot'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats - Compact Strip */}
      <section className="py-8 bg-gradient-to-r from-primary/8 via-cyan/8 to-accent/8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '22+', label: language === 'en' ? 'Success Stories' : 'قصة نجاح', color: 'text-primary' },
              { value: '95%', label: language === 'en' ? 'Avg. Improvement' : 'متوسط التحسين', color: 'text-cyan' },
              { value: '8+', label: language === 'en' ? 'Industries' : 'قطاعات', color: 'text-accent' },
              { value: '24/7', label: language === 'en' ? 'Support' : 'دعم', color: 'text-primary' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
              >
                <div className={`text-2xl md:text-3xl font-display font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-14 md:py-20">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {categoryGroups.map((group) => (
              <motion.div
                key={group.key}
                variants={{
                  hidden: { opacity: 0, y: 25, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
              >
                <CategoryCard group={group} language={language} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Visual */}
      <section className="py-16 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                {language === 'en' ? 'Your Success Is Our Mission' : 'نجاحك هو مهمتنا'}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
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
                className="w-auto h-auto max-h-[420px] rounded-3xl shadow-tech-lg object-contain mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
