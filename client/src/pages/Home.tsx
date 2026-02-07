/* 
 * Modern Tech-Inspired Design:
 * - Clean professional hero with tech blue gradients
 * - Glassmorphism cards with glow effects
 * - Grid-based layout with proper spacing
 * - Cyan glow accents for interactive elements
 */

import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { seoContent } from '@/lib/seo';
import { ArrowRight, MessageCircle, Clock, TrendingUp, Zap, Shield, BarChart3, Sparkles, Globe } from 'lucide-react';
import ParticlesBackground from '@/components/ParticlesBackground';
import ParallaxSection from '@/components/ParallaxSection';
import HeroChatDemo from '@/components/HeroChatDemo';

export default function Home() {
  const { language, t } = useLanguage();
  const [, setLocation] = useLocation();

  const handlePlatformClick = (platform: string) => {
    setLocation(`/${language}/pricing#${platform}`);
  };
  const seo = seoContent.home[language];

  return (
    <div className="min-h-screen">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          >
            <source src="https://cdn.coverr.co/videos/coverr-ai-technology-abstract-background-9836/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background" />
        </div>

        {/* Particles Background */}
        <ParticlesBackground />

        {/* Animated background grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(76, 201, 240, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(76, 201, 240, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem'
          }} />
        </div>

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-700" />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                <span className="text-foreground">
                  {t.hero.title}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="rounded-lg px-8 py-6 text-base gradient-tech text-white hover:shadow-glow transition-all duration-300 group font-semibold flex items-center gap-2"
                  onClick={() => setLocation(`/${language}/contact`)}
                >
                  {t.hero.cta}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg px-8 py-6 text-base border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 font-semibold"
                  onClick={() => setLocation(`/${language}/pricing`)}
                >
                  {t.hero.ctaSecondary}
                </Button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-8">
                <div className="p-4 sm:p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 space-y-2">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-primary">95%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t.metrics.conversion}</div>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 space-y-2">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-cyan">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t.metrics.available}</div>
                </div>
                <div className="p-4 sm:p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 space-y-2 col-span-2 sm:col-span-1">
                  <div className="text-3xl sm:text-4xl font-display font-bold text-steel">1000+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t.metrics.clients}</div>
                </div>
              </div>
            </div>

            {/* Hero Visual - Live Chat Demo */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
              <div className="relative p-2 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-tech-lg">
                <HeroChatDemo />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-cyan/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              {language === 'en' ? 'Features' : 'المميزات'}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              {t.features.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: t.features.smartResponse,
                desc: t.features.smartResponseDesc,
                color: 'from-primary to-cyan',
              },
              {
                icon: MessageCircle,
                title: t.features.multiPlatform,
                desc: t.features.multiPlatformDesc,
                color: 'from-cyan to-steel',
              },
              {
                icon: TrendingUp,
                title: t.features.salesConversion,
                desc: t.features.salesConversionDesc,
                color: 'from-steel to-primary',
              },
              {
                icon: Zap,
                title: t.features.dataOrganization,
                desc: t.features.dataOrganizationDesc,
                color: 'from-primary to-cyan',
              },
              {
                icon: Shield,
                title: t.features.multiLanguage,
                desc: t.features.multiLanguageDesc,
                color: 'from-cyan to-steel',
              },
              {
                icon: BarChart3,
                title: t.features.fullControl,
                desc: t.features.fullControlDesc,
                color: 'from-steel to-primary',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 shadow-tech hover:shadow-tech-lg transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg px-8 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 font-semibold flex items-center gap-2"
              onClick={() => setLocation(`/${language}/features`)}
            >
              {t.cta.learnMore}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {language === 'en' ? 'Seamless Integration with Your Favorite Platforms' : 'تكامل سلس مع منصاتك المفضلة'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en'
                ? 'Connect DK-OctoBot with all major messaging platforms and start automating in minutes'
                : 'اربط DK-OctoBot مع جميع منصات المراسلة الرئيسية وابدأ الأتمتة في دقائق'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {/* WhatsApp */}
            <div onClick={() => handlePlatformClick('whatsapp')} className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl hover:bg-card transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <span className="text-sm font-medium">WhatsApp</span>
            </div>

            {/* Facebook Messenger */}
            <div onClick={() => handlePlatformClick('messenger')} className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl hover:bg-card transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-[#0084FF]/10 flex items-center justify-center group-hover:bg-[#0084FF]/20 transition-colors">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="#0084FF">
                  <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111C24 4.975 18.627 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.733 8l3.13 3.259L19.752 8l-6.559 6.963z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Messenger</span>
            </div>

            {/* Instagram */}
            <div onClick={() => handlePlatformClick('instagram')} className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl hover:bg-card transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-foreground/10 flex items-center justify-center group-hover:bg-foreground/20 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] opacity-90" />
                <svg className="h-10 w-10 relative z-10" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </div>

            {/* Telegram */}
            <div onClick={() => handlePlatformClick('telegram')} className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl hover:bg-card transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-[#0088cc]/10 flex items-center justify-center group-hover:bg-[#0088cc]/20 transition-colors">
                <svg className="h-10 w-10" viewBox="0 0 24 24" fill="#0088cc">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Telegram</span>
            </div>

            {/* Website Chat */}
            <div onClick={() => handlePlatformClick('website')} className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl hover:bg-card transition-all duration-300 hover:scale-110 cursor-pointer">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-cyan/50 flex items-center justify-center group-hover:shadow-glow transition-all relative">
                <Globe className="h-10 w-10 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              </div>
              <span className="text-sm font-medium">{language === 'en' ? 'Website' : 'موقع ويب'}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
