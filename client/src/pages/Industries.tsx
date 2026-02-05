/* 
 * Organic Tech Fluidity Design:
 * - Industry cards with organic shapes
 * - Warm color gradients
 * - Hover animations with blob morphing
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { industries, industryNames } from '@/lib/content';
import { ArrowRight, Truck, Hospital, Headphones, Package, Hotel, Building2, ShoppingCart, GraduationCap } from 'lucide-react';
import SEO from '@/components/SEO';
import { seoContent } from '@/lib/seo';

const iconMap: Record<string, any> = {
  Truck,
  Hospital,
  Headphones,
  Package,
  Hotel,
  Building2,
  ShoppingCart,
  GraduationCap,
};

export default function Industries() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blob-shape blur-3xl" />
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                {language === 'en' ? 'Industries We Serve' : 'القطاعات التي نخدمها'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {language === 'en' 
                ? 'Tailored AI solutions for every industry, designed to meet your unique business challenges'
                : 'حلول ذكاء اصطناعي مخصصة لكل قطاع، مصممة لتلبية تحديات عملك الفريدة'}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Link 
                key={industry.slug} 
                href={`/${language}/industries/${industry.slug}`}
                className="group block p-8 rounded-3xl bg-card border border-border hover:border-primary/30 shadow-organic hover:shadow-organic-lg transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                  {/* Icon */}
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {(() => {
                      const Icon = iconMap[industry.icon];
                      return Icon ? <Icon className="h-16 w-16 text-primary" /> : null;
                    })()}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {industryNames[industry.slug][language]}
                  </h3>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                    {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
                    <ArrowRight className="h-4 w-4" />
                  </div>

                  {/* Hover blob */}
                  <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blob-shape" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integration Visual */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              {language === 'en' ? 'One Platform, All Channels' : 'منصة واحدة، جميع القنوات'}
            </h2>
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/kvk8t54dYp8FqVkMpydns7/sandbox/t1480D5Ow1AqYUzbtDiEBK-img-5_1770324860000_na1fn_cGxhdGZvcm0taW50ZWdyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUva3ZrOHQ1NGRZcDhGcVZrTXB5ZG5zNy9zYW5kYm94L3QxNDgwRDVPdzFBcVlVemJ0RGlFQkstaW1nLTVfMTc3MDMyNDg2MDAwMF9uYTFmbl9jR3hoZEdadmNtMHRhVzUwWldkeVlYUnBiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=aTf2mMtUlvSdtLy0NeUZwujf1PXWv8pNYxOisxk0HTxOP-s4kY-ytaHqnOJWYgNhl1eAgpq3kVuf2aovXeZx~F-~N3IzRghX9eSZYOIRBm9pqtlUkjDlshoR75ADjc3j6W6XqhlFA9L6fj5Yk420L6zz6GU7vmnPy0zFxbTH3w5KUSmXjE6ePWSavgchv~jedjCB1Fr98hnsQlaFoPd-uxIgUBBypCxY04b4SFNj3sEsk9l81WKA7hCX6WlrQq3iyPArzIlqpWZJifOdNOL9pMurgmLx~sMmhtreMR6Y1Z-me4ajIOWir~ixO4ebRih2FEOdEMdPeftEultcyyVNaA__"
              alt="Platform Integration"
              className="w-full max-w-2xl mx-auto rounded-3xl shadow-organic-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
