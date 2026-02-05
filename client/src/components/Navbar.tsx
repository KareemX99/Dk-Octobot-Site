/* 
 * Modern Tech-Inspired Design:
 * - Clean professional navbar with tech blue and cyan accents
 * - Glassmorphism effect with backdrop blur
 * - Smooth transitions and glow effects
 */

import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { getLocalizedPath } from '@/lib/i18n';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [location, setLocation] = useLocation();

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    const currentPath = location.replace(/^\/(ar|en)/, '') || '/';
    setLanguage(newLang);
    setLocation(getLocalizedPath(currentPath, newLang));
  };

  const navLinks = [
    { label: t.nav.features, href: `/${language}/features` },
    { label: t.nav.industries, href: `/${language}/industries` },
    { label: t.nav.portfolio, href: `/${language}/portfolio` },
    { label: t.nav.pricing, href: `/${language}/pricing` },
    { label: t.nav.about, href: `/${language}/about` },
    { label: t.nav.contact, href: `/${language}/contact` },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl border-b border-border/50 z-50 shadow-tech">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${language}`} className="flex items-center group">
            {/* Full logo for desktop */}
            <img 
              src="/logo-full.svg" 
              alt="OctoBot" 
              className="hidden sm:block h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            {/* Compact logo for mobile */}
            <img 
              src="/logo-compact.svg" 
              alt="OctoBot" 
              className="block sm:hidden h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="rounded-lg hover:bg-primary/10 hover:text-primary"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Switch language</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg hover:bg-primary/10 hover:text-primary"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* CTA Button */}
            <Button
              className="hidden md:flex rounded-lg px-6 gradient-tech text-white hover:shadow-glow transition-all duration-300 font-medium"
              onClick={() => setLocation(`/${language}/contact`)}
            >
              {t.cta.getStarted}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-1 border-t border-border/50 animate-in slide-in-from-top-5 duration-300">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="w-full mt-4 rounded-lg gradient-tech text-white font-medium"
              onClick={() => { setIsOpen(false); setLocation(`/${language}/contact`); }}
            >
              {t.cta.getStarted}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
