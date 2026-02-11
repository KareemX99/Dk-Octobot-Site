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
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-4 md:p-8 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 shadow-tech hover:shadow-tech-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-10 h-10 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-5 w-5 md:h-8 md:w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-2xl font-display font-bold mb-2 md:mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-cyan/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - appears first on mobile */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-8 duration-1000 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                {t.features.visualTitle}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.features.visualDescription}
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

            {/* Video - appears second on mobile, premium phone frame */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 order-2 lg:order-1 flex justify-center">
              {/* Phone outer shell */}
              <div className="relative w-full max-w-[300px]">
                {/* Ambient glow behind phone */}
                <div className="absolute -inset-8 bg-gradient-to-br from-cyan/20 via-primary/10 to-cyan/20 rounded-[3rem] blur-2xl opacity-60 pointer-events-none" />

                {/* Phone body */}
                <div className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-[10px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5),0_0_40px_rgba(76,201,240,0.15)]">

                  {/* Side buttons - Volume */}
                  <div className="absolute -left-[3px] top-[100px] w-[3px] h-8 bg-gray-700 rounded-l-sm pointer-events-none" />
                  <div className="absolute -left-[3px] top-[145px] w-[3px] h-8 bg-gray-700 rounded-l-sm pointer-events-none" />
                  {/* Side button - Power */}
                  <div className="absolute -right-[3px] top-[120px] w-[3px] h-12 bg-gray-700 rounded-r-sm pointer-events-none" />

                  {/* Screen area */}
                  <div className="relative bg-black rounded-[2rem] overflow-hidden" style={{ touchAction: 'none' }}>
                    {/* Video content */}
                    <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                      <iframe
                        src="https://www.youtube.com/embed/7TI4N5mgVnY?autoplay=1&mute=1&loop=1&playlist=7TI4N5mgVnY&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                        title="DK-OctoBot Demo"
                        className="absolute inset-0 w-full h-full z-10"
                        allow="autoplay; encrypted-media; fullscreen"
                        allowFullScreen
                        style={{ border: 'none', touchAction: 'manipulation' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
