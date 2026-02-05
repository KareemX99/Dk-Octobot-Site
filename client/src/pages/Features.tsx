/* 
 * Modern Tech-Inspired Design:
 * - Clean feature cards with glassmorphism
 * - Tech blue and cyan gradients
 * - Professional grid layout
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import { Clock, MessageCircle, TrendingUp, Database, Globe2, Settings, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import { seoContent } from '@/lib/seo';

export default function Features() {
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();

  const features = [
    {
      icon: Clock,
      title: t.features.smartResponse,
      description: t.features.smartResponseDesc,
      color: 'from-primary to-cyan',
    },
    {
      icon: MessageCircle,
      title: t.features.multiPlatform,
      description: t.features.multiPlatformDesc,
      color: 'from-cyan to-steel',
    },
    {
      icon: TrendingUp,
      title: t.features.salesConversion,
      description: t.features.salesConversionDesc,
      color: 'from-steel to-primary',
    },
    {
      icon: Database,
      title: t.features.dataOrganization,
      description: t.features.dataOrganizationDesc,
      color: 'from-primary to-cyan',
    },
    {
      icon: Globe2,
      title: t.features.multiLanguage,
      description: t.features.multiLanguageDesc,
      color: 'from-cyan to-steel',
    },
    {
      icon: Settings,
      title: t.features.fullControl,
      description: t.features.fullControlDesc,
      color: 'from-steel to-primary',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              {language === 'en' ? 'Features' : 'المميزات'}
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              {t.features.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t.features.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 shadow-tech hover:shadow-tech-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-cyan/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-tech-lg">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/kvk8t54dYp8FqVkMpydns7/sandbox/t1480D5Ow1AqYUzbtDiEBK-img-3_1770324839000_na1fn_YXV0b21hdGlvbi1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva3ZrOHQ1NGRZcDhGcVZrTXB5ZG5zNy9zYW5kYm94L3QxNDgwRDVPdzFBcVlVemJ0RGlFQkstaW1nLTNfMTc3MDMyNDgzOTAwMF9uYTFmbl9ZWFYwYjIxaGRHbHZiaTFoWW5OMGNtRmpkQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BeysKRptDs3ia4G9Yj9BXVkLvolRK3Jt1-iig3cUZCxfY7Sc6HTE0SzUEC1lQY1BE1aX0CnD4kpXNpqss1QaaqaAj6UcTYbzEIEOUv7Nq5FndLDmACa80TjEac8xSIWEHGK3s4xdzm9~su89sINoIDPHH4NpxhYmQBzjT~XMAyunIpwtQt19GNc4I8~BRH0qoAv1HtgxIs4EanyCd5qIOm7jmB3F1eumyjBYPvdBb02jHzKJPPcRnBhluoc30MqFd7VWVHN~-aAK4Ri-3vQdhsRrCbw739KJ9bwGz-HO3UaWNKubnWO081mtlegAuLydkNC4gkN4GGOLSC914wtIgw__"
                  alt="Automation visualization"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan/30 rounded-full blur-2xl" />
              </div>
            </div>

            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                Intelligent Automation for Modern Business
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our AI-powered platform seamlessly integrates with your existing workflows, providing intelligent automation that adapts to your business needs. From customer inquiries to sales conversions, every interaction is optimized for success.
              </p>
              <Button
                size="lg"
                className="rounded-lg px-8 gradient-tech text-white hover:shadow-glow transition-all duration-300 font-semibold flex items-center gap-2"
                onClick={() => setLocation(`/${language}/contact`)}
              >
                {t.cta.getStarted}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
