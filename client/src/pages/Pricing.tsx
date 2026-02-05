/* 
 * Modern Tech-Inspired Design:
 * - Clean pricing cards with glassmorphism
 * - Tech blue and cyan gradients
 * - Professional tab interface
 */

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Check, Star, Facebook, MessageCircle, Instagram, Send, Globe, Settings } from 'lucide-react';
import SEO from '@/components/SEO';
import { seoContent } from '@/lib/seo';
import { platforms, durations, pricingItems, bundleOffer } from '@/lib/content';

const platformIconMap: Record<string, any> = {
  Facebook,
  MessageCircle,
  Instagram,
  Send,
  Globe,
  Settings,
};

export default function Pricing() {
  const { language, t } = useLanguage();
  const [selectedDuration, setSelectedDuration] = useState('1month');

  const calculatePrice = (basePrice: number) => {
    const duration = durations.find(d => d.id === selectedDuration);
    if (!duration) return basePrice;
    return Math.round(basePrice * (1 - duration.discount / 100));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              {language === 'en' ? 'Pricing' : 'الأسعار'}
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              {language === 'en' ? 'Choose Your Plan' : 'اختر خطتك'}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === 'en' 
                ? 'AI-powered solutions for every platform. Start with monthly subscription and scale as you grow.'
                : 'حلول مدعومة بالذكاء الاصطناعي لكل منصة. ابدأ بالاشتراك الشهري وقم بالتوسع مع نموك.'}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container max-w-6xl">
          {/* Duration Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {durations.map((duration) => (
              <button
                key={duration.id}
                onClick={() => setSelectedDuration(duration.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedDuration === duration.id
                    ? 'gradient-tech text-white shadow-glow'
                    : 'bg-card/50 border border-border/50 hover:border-primary/30'
                }`}
              >
                {duration.label}
                {duration.discount > 0 && (
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    Save {duration.discount}%
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Platform Tabs */}
          <Tabs defaultValue="facebook" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-12 bg-card/50 p-2 rounded-xl border border-border/50">
              {platforms.map((platform) => (
                <TabsTrigger
                  key={platform.id}
                  value={platform.id}
                  className="rounded-lg data-[state=active]:gradient-tech data-[state=active]:text-white data-[state=active]:shadow-tech flex items-center gap-2"
                >
                  {(() => {
                    const Icon = platformIconMap[platform.icon];
                    return Icon ? <Icon className="h-4 w-4" /> : null;
                  })()}
                  <span className="hidden sm:inline">{platform.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {platforms.map((platform) => (
              <TabsContent key={platform.id} value={platform.id} className="space-y-8">
                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                  {pricingItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`relative p-8 rounded-xl border transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 ${
                        item.featured
                          ? 'border-primary bg-gradient-to-br from-primary/10 to-cyan/10 shadow-tech-lg scale-105'
                          : 'border-border/50 bg-card/50 backdrop-blur-sm shadow-tech hover:shadow-tech-lg'
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.featured && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 gradient-tech text-white text-sm font-bold rounded-full flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          {language === 'en' ? 'MOST EFFECTIVE' : 'الأكثر فعالية'}
                        </div>
                      )}

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-display font-bold mb-2">
                            {language === 'en' ? item.nameEn : item.nameAr}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {language === 'en' ? item.descEn : item.descAr}
                          </p>
                        </div>

                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-display font-bold">
                            {calculatePrice(item.price).toLocaleString()}
                          </span>
                          <span className="text-muted-foreground">EGP/month</span>
                        </div>

                        <ul className="space-y-3">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button
                          className="w-full rounded-lg gradient-tech text-white hover:shadow-glow transition-all duration-300 font-semibold"
                        >
                          {t.cta.getStarted}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bundle Offer */}
                <div className="relative p-8 rounded-xl bg-gradient-to-br from-primary/10 to-cyan/10 border-2 border-primary/30 shadow-tech-lg">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <div className="inline-block px-4 py-1 gradient-tech text-white text-sm font-bold rounded-full">
                        {language === 'en' ? 'BUNDLE OFFER' : 'عرض الباقة'}
                      </div>
                      <h3 className="text-3xl font-display font-bold">
                        {language === 'en' ? bundleOffer.nameEn : bundleOffer.nameAr}
                      </h3>
                      <p className="text-muted-foreground">{bundleOffer.includes}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-baseline gap-4">
                        <span className="text-2xl text-muted-foreground line-through">
                          {bundleOffer.originalPrice.toLocaleString()} EGP
                        </span>
                        <span className="text-5xl font-display font-bold text-primary">
                          {bundleOffer.discountedPrice.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground">EGP/month</span>
                      </div>
                      <Button
                        size="lg"
                        className="w-full rounded-lg gradient-tech text-white hover:shadow-glow transition-all duration-300 font-semibold"
                      >
                        {language === 'en' ? 'Get Offer' : 'احصل على العرض'}
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Regional Note */}
          <div className="mt-12 text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
            <p className="text-muted-foreground">
              {language === 'en' 
                ? 'Available in Egypt, GCC and globally. Prices shown in EGP.'
                : 'متاح في مصر والخليج والدول الأخرى. الأسعار معروضة بالجنيه المصري.'}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
