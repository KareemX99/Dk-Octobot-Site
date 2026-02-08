/**
 * LocalBusiness Schema Component
 * Provides structured data for local SEO in Egypt/MENA region
 */

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LocalBusinessSchemaProps {
    pageName?: string;
}

export default function LocalBusinessSchema({ pageName = 'home' }: LocalBusinessSchemaProps) {
    const { language } = useLanguage();

    useEffect(() => {
        const localBusinessSchema = {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://octobot.it.com/#organization',
            name: 'DK-OctoBot',
            alternateName: 'دي كي أوكتوبوت',
            description: language === 'ar'
                ? 'منصة ذكاء اصطناعي لخدمة العملاء وأتمتة المبيعات. نقدم حلول شات بوت متعددة اللغات للشركات في مصر والشرق الأوسط.'
                : 'AI-powered customer service and sales automation platform. We provide multilingual chatbot solutions for businesses in Egypt and the Middle East.',
            url: 'https://octobot.it.com',
            logo: 'https://octobot.it.com/logo.png',
            image: 'https://octobot.it.com/og-image.png',
            telephone: '+201505354810',
            email: 'octobotchatbot@gmail.com',
            foundingDate: '2024',
            founders: [
                {
                    '@type': 'Person',
                    name: 'Kareem Gaballah',
                    jobTitle: 'CEO & Co-Founder'
                },
                {
                    '@type': 'Person',
                    name: 'Ahmed Gaballah',
                    jobTitle: 'CTO & Co-Founder'
                }
            ],
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Cairo', // Update with actual address
                addressLocality: 'Cairo',
                addressRegion: 'Cairo Governorate',
                postalCode: '11511',
                addressCountry: 'EG'
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 30.0444, // Cairo coordinates
                longitude: 31.2357
            },
            areaServed: [
                {
                    '@type': 'Country',
                    name: 'Egypt'
                },
                {
                    '@type': 'Country',
                    name: 'Saudi Arabia'
                },
                {
                    '@type': 'Country',
                    name: 'United Arab Emirates'
                },
                {
                    '@type': 'GeoCircle',
                    geoMidpoint: {
                        '@type': 'GeoCoordinates',
                        latitude: 26.8206,
                        longitude: 30.8025
                    },
                    geoRadius: '3000 km',
                    description: 'MENA Region'
                }
            ],
            serviceType: [
                'AI Chatbot Development',
                'Customer Service Automation',
                'Sales Automation',
                'WhatsApp Business Integration',
                'Facebook Messenger Integration',
                'Instagram DM Automation',
                'Multilingual Chatbot Solutions'
            ],
            priceRange: '$$',
            currenciesAccepted: 'EGP, USD, SAR, AED',
            paymentAccepted: 'Bank Transfer, Credit Card',
            openingHoursSpecification: [
                {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
                    opens: '09:00',
                    closes: '18:00'
                }
            ],
            sameAs: [
                'https://www.facebook.com/ai.octobot',
                'https://www.instagram.com/octobot.ai/',
                'https://www.youtube.com/@Dk-OctoBot',
                'https://www.tiktok.com/@dk.octobot',
                'https://www.linkedin.com/company/dk-octobot'
            ],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'AI Chatbot Services',
                itemListElement: [
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Starter Plan',
                            description: 'Perfect for small businesses starting with AI automation'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Professional Plan',
                            description: 'Advanced features for growing businesses'
                        }
                    },
                    {
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: 'Enterprise Plan',
                            description: 'Custom solutions for large organizations'
                        }
                    }
                ]
            }
        };

        // Find or create script tag
        let scriptTag = document.querySelector('script[data-schema="local-business"]') as HTMLScriptElement;
        if (!scriptTag) {
            scriptTag = document.createElement('script') as HTMLScriptElement;
            scriptTag.type = 'application/ld+json';
            scriptTag.setAttribute('data-schema', 'local-business');
            document.head.appendChild(scriptTag);
        }
        scriptTag.textContent = JSON.stringify(localBusinessSchema);

        return () => {
            scriptTag?.remove();
        };
    }, [language]);

    return null;
}
