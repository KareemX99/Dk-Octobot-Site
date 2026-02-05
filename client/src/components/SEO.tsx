import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
}

export default function SEO({
  title,
  description,
  keywords,
  image = 'https://private-us-east-1.manuscdn.com/sessionFile/kvk8t54dYp8FqVkMpydns7/sandbox/t1480D5Ow1AqYUzbtDiEBK-img-1_1770324849000_na1fn_YUdzdHJhY3Qtb3JnYW5pYy1mbHVpZC1iYWNrZ3Jv.png',
  type = 'website',
  author,
  publishedTime,
}: SEOProps) {
  const { language } = useLanguage();
  const siteUrl = 'https://dk-octobot.manus.space';
  const fullTitle = `${title} | DK-OctoBot`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    updateMetaTag('language', language);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index, follow');

    // Open Graph meta tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'DK-OctoBot', true);
    updateMetaTag('og:locale', language === 'ar' ? 'ar_EG' : 'en_US', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Article specific meta tags
    if (type === 'article' && author) {
      updateMetaTag('article:author', author, true);
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, true);
      }
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // Alternate language links
    let alternateLang = document.querySelector(`link[hreflang="${language === 'ar' ? 'en' : 'ar'}"]`) as HTMLLinkElement;
    if (!alternateLang) {
      alternateLang = document.createElement('link');
      alternateLang.rel = 'alternate';
      document.head.appendChild(alternateLang);
    }
    const alternatePath = window.location.pathname.replace(`/${language}`, `/${language === 'ar' ? 'en' : 'ar'}`);
    alternateLang.hreflang = language === 'ar' ? 'en' : 'ar';
    alternateLang.href = `${siteUrl}${alternatePath}`;

    // Structured data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      name: fullTitle,
      description: description,
      url: window.location.href,
      image: image,
      inLanguage: language === 'ar' ? 'ar' : 'en',
      publisher: {
        '@type': 'Organization',
        name: 'DK-OctoBot',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/logo.png`,
        },
      },
      ...(type === 'article' && author ? {
        author: {
          '@type': 'Person',
          name: author,
        },
        datePublished: publishedTime,
      } : {}),
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script') as HTMLScriptElement;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, type, author, publishedTime, language, fullTitle]);

  return null;
}
