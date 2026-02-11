
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useRoute, Link } from 'wouter';
import { ArrowLeft, CheckCircle, BarChart, Zap, Shield, Globe } from 'lucide-react';
import { industryDetails, industryNames } from '@/lib/content';

export default function IndustryDetail() {
    const { language, t } = useLanguage();
    const [, params] = useRoute('/:lang/industries/:slug');
    const slug = params?.slug || '';

    const details = industryDetails[slug]?.[language];
    const name = industryNames[slug]?.[language];

    if (!details || !name) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-3xl font-bold">
                        {language === 'en' ? 'Industry Not Found' : 'القطاع غير موجود'}
                    </h1>
                    <Link href={`/${language}/industries`}>
                        <a className="text-primary hover:underline">
                            {language === 'en' ? 'Back to Industries' : 'العودة إلى القطاعات'}
                        </a>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <SEO
                title={`${name} - OctoBot Industries`}
                description={details.description}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
                <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blob-shape blur-3xl opacity-50" />

                <div className="container relative">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Back Button */}
                        <Link href={`/${language}/industries`}>
                            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4">
                                <ArrowLeft className="h-4 w-4" />
                                {language === 'en' ? 'Back to Industries' : 'العودة إلى القطاعات'}
                            </a>
                        </Link>

                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            <h1 className="text-5xl md:text-6xl font-display font-bold">
                                <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                                    {name}
                                </span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                {details.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges & Solutions */}
            <section className="py-20 bg-card/30">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {/* Challenges */}
                        <ScrollAnimation direction="right">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                                        <Zap className="h-6 w-6 text-red-500" />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold">
                                        {language === 'en' ? 'The Challenges' : 'التحديات'}
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {details.challenges.map((challenge: string, index: number) => (
                                        <li key={index} className="flex gap-3 text-muted-foreground">
                                            <span className="text-red-500 mt-1">✕</span>
                                            {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>

                        {/* Solutions */}
                        <ScrollAnimation direction="left">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                                        <CheckCircle className="h-6 w-6 text-green-500" />
                                    </div>
                                    <h2 className="text-3xl font-display font-bold">
                                        {language === 'en' ? 'Our Solution' : 'الحل لدينا'}
                                    </h2>
                                </div>
                                <ul className="space-y-4">
                                    {details.solutions.map((solution: string, index: number) => (
                                        <li key={index} className="flex gap-3 text-muted-foreground">
                                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            {solution}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
                            {language === 'en' ? 'Key Features' : 'المميزات الرئيسية'}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {details.features.map((feature: { title: string; desc: string }, index: number) => (
                                <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all h-full">
                                        <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                                        <p className="text-muted-foreground">{feature.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats/Benefits */}
            <section className="py-20 bg-primary/5">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {details.stats.map((stat: { value: string; label: string }, index: number) => (
                                <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                                    <div className="text-center space-y-2">
                                        <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                                        <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center space-y-8 p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20">
                        <h2 className="text-3xl md:text-4xl font-display font-bold">
                            {language === 'en' ? 'Ready to Transform Your Business?' : 'جاهز لتحويل أعمالك؟'}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {language === 'en'
                                ? 'Join thousands of businesses using OctoBot to automate their operations.'
                                : 'انضم لآلاف الشركات التي تستخدم OctoBot لأتمتة عملياتها.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href={`/${language}/contact`}>
                                <a className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/25 transition-all">
                                    {t.cta.getStarted}
                                </a>
                            </Link>
                            <Link href={`/${language}/contact`}>
                                <a className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-card border border-border hover:bg-accent/10 transition-all font-medium">
                                    {t.cta.bookDemo}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
