/* 
 * Modern Tech-Inspired Design:
 * - Clean professional footer with tech blue gradients
 * - Grid-based layout with proper spacing
 * - Subtle glow effects on hover
 */

import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();

  const productLinks = [
    { label: t.nav.features, href: `/${language}/features` },
    { label: t.nav.pricing, href: `/${language}/pricing` },
    { label: 'FAQ', href: `/${language}/faq` },
  ];

  const companyLinks = [
    { label: t.nav.about, href: `/${language}/about` },
    { label: t.nav.blog, href: `/${language}/blog` },
    { label: 'Careers', href: `/${language}/careers` },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: `/${language}/privacy` },
    { label: 'Terms of Service', href: `/${language}/terms` },
    { label: 'Security', href: `/${language}/security` },
  ];

  return (
    <footer className="relative bg-card/30 backdrop-blur-sm border-t border-border/50">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <Link href={`/${language}`} className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-lg gradient-tech flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                  <span className="text-white font-bold text-xl">DK</span>
                </div>
                <div className="absolute inset-0 rounded-lg gradient-tech opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
              </div>
              <span className="text-2xl font-display font-bold text-foreground">
                OctoBot
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="space-y-3">
              <a
                href="mailto:octobotchatbot@gmail.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">octobotchatbot@gmail.com</span>
              </a>
              <a
                href="tel:+201505354810"
                className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+(20) 1505354810</span>
              </a>
            </div>
          </div>

          {/* Links Container - 3 columns on mobile */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-3 gap-6">
          {/* Product Links */}
          <div>
            <h3 className="font-display font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">{t.footer.product}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-display font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">{t.footer.company}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-display font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">{t.footer.legal}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-center text-muted-foreground text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
