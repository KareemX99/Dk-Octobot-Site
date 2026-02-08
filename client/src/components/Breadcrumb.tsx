/**
 * Breadcrumb Component with Schema.org BreadcrumbList structured data
 * Provides navigation and SEO benefits
 */

import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface BreadcrumbItem {
    name: string;
    nameAr?: string;
    href: string;
}

interface BreadcrumbProps {
    items?: BreadcrumbItem[];
    className?: string;
}

// Route name mappings
const routeNames: Record<string, { en: string; ar: string }> = {
    features: { en: 'Features', ar: 'المميزات' },
    pricing: { en: 'Pricing', ar: 'الأسعار' },
    industries: { en: 'Industries', ar: 'الصناعات' },
    portfolio: { en: 'Portfolio', ar: 'أعمالنا' },
    about: { en: 'About Us', ar: 'من نحن' },
    contact: { en: 'Contact', ar: 'اتصل بنا' },
    faq: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
    blog: { en: 'Blog', ar: 'المدونة' },
    // Industry pages
    logistics: { en: 'Logistics', ar: 'اللوجستيات' },
    healthcare: { en: 'Healthcare', ar: 'الرعاية الصحية' },
    'customer-service': { en: 'Customer Service', ar: 'خدمة العملاء' },
    inventory: { en: 'Inventory', ar: 'المخزون' },
    hospitality: { en: 'Hospitality', ar: 'الضيافة' },
    banking: { en: 'Banking', ar: 'البنوك' },
    ecommerce: { en: 'E-Commerce', ar: 'التجارة الإلكترونية' },
    education: { en: 'Education', ar: 'التعليم' },
};

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
    const { language } = useLanguage();
    const [location] = useLocation();
    const siteUrl = 'https://octobot.it.com';

    // Auto-generate breadcrumbs from current path if not provided
    const breadcrumbItems: BreadcrumbItem[] = items || (() => {
        const pathParts = location.split('/').filter(Boolean);
        const generatedItems: BreadcrumbItem[] = [];

        // Skip language prefix
        const startIndex = pathParts[0] === 'en' || pathParts[0] === 'ar' ? 1 : 0;

        let currentPath = `/${language}`;

        for (let i = startIndex; i < pathParts.length; i++) {
            const part = pathParts[i];
            currentPath += `/${part}`;

            const routeInfo = routeNames[part];
            generatedItems.push({
                name: routeInfo?.en || part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
                nameAr: routeInfo?.ar,
                href: currentPath,
            });
        }

        return generatedItems;
    })();

    // Add BreadcrumbList structured data
    useEffect(() => {
        if (breadcrumbItems.length === 0) return;

        const breadcrumbSchema = {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: language === 'ar' ? 'الرئيسية' : 'Home',
                    item: `${siteUrl}/${language}`,
                },
                ...breadcrumbItems.map((item, index) => ({
                    '@type': 'ListItem',
                    position: index + 2,
                    name: language === 'ar' && item.nameAr ? item.nameAr : item.name,
                    item: `${siteUrl}${item.href}`,
                })),
            ],
        };

        let scriptTag = document.querySelector('script[data-schema="breadcrumb"]') as HTMLScriptElement;
        if (!scriptTag) {
            scriptTag = document.createElement('script') as HTMLScriptElement;
            scriptTag.type = 'application/ld+json';
            scriptTag.setAttribute('data-schema', 'breadcrumb');
            document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = JSON.stringify(breadcrumbSchema);

        return () => {
            scriptTag?.remove();
        };
    }, [breadcrumbItems, language]);

    if (breadcrumbItems.length === 0) return null;

    return (
        <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-2 text-sm text-muted-foreground ${className}`}
        >
            <Link href={`/${language}`}>
                <a className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Home className="h-4 w-4" />
                    <span className="sr-only">{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
                </a>
            </Link>

            {breadcrumbItems.map((item, index) => (
                <div key={item.href} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
                    {index === breadcrumbItems.length - 1 ? (
                        <span className="text-foreground font-medium" aria-current="page">
                            {language === 'ar' && item.nameAr ? item.nameAr : item.name}
                        </span>
                    ) : (
                        <Link href={item.href}>
                            <a className="hover:text-primary transition-colors">
                                {language === 'ar' && item.nameAr ? item.nameAr : item.name}
                            </a>
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
