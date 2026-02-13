import { writeFileSync } from 'fs';
import { join } from 'path';

const baseUrl = 'https://octobot.it.com';
const lastmodDate = '2025-12-15T00:00:00.000Z';

const pages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
  { path: '/features', priority: '0.9', changefreq: 'weekly' },
  { path: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { path: '/industries', priority: '0.8', changefreq: 'weekly' },
  { path: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { path: '/about', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/faq', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
];

const industries = [
  'logistics',
  'healthcare',
  'customer-service',
  'inventory',
  'hospitality',
  'banking',
  'ecommerce',
  'education',
];

const caseStudies = [
  'qadroon-foundation',
  'hira-learning',
  'i-byco',
  'smart-technology',
  'outbox-places',
  'mps-academy',
  'f-brakes',
  'focus-ix',
  'healthy-dental',
];

const blogArticles = [
  { slug: 'ai-customer-service-revolution-2025', date: '2025-11-01' },
  { slug: '10-proven-strategies-boost-sales-chatbots', date: '2025-10-28' },
  { slug: 'chatbot-roi-calculator-guide', date: '2025-10-25' },
  { slug: 'whatsapp-business-automation-guide', date: '2025-10-22' },
  { slug: 'facebook-messenger-marketing-strategies', date: '2025-10-20' },
  { slug: 'instagram-dm-automation-sales', date: '2025-10-18' },
  { slug: 'customer-engagement-strategies-2025', date: '2025-10-15' },
  { slug: 'multilingual-chatbot-best-practices', date: '2025-10-12' },
  { slug: 'chatbot-best-practices-2025', date: '2025-11-10' },
  { slug: 'psychology-of-chatbots', date: '2025-11-15' },
];

function generateUrlEntry(url, lang, alternateLang, altUrl, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />
    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${altUrl}" />
  </url>
`;
}

function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

  const languages = ['en', 'ar'];

  // Add main pages
  pages.forEach(page => {
    languages.forEach(lang => {
      const url = `${baseUrl}/${lang}${page.path}`;
      const alternateLang = lang === 'en' ? 'ar' : 'en';
      const alternateUrl = `${baseUrl}/${alternateLang}${page.path}`;
      sitemap += generateUrlEntry(url, lang, alternateLang, alternateUrl, lastmodDate, page.changefreq, page.priority);
    });
  });

  // Add industry pages
  industries.forEach(industry => {
    languages.forEach(lang => {
      const url = `${baseUrl}/${lang}/industries/${industry}`;
      const alternateLang = lang === 'en' ? 'ar' : 'en';
      const alternateUrl = `${baseUrl}/${alternateLang}/industries/${industry}`;
      sitemap += generateUrlEntry(url, lang, alternateLang, alternateUrl, lastmodDate, 'monthly', '0.7');
    });
  });

  // Add case study pages
  caseStudies.forEach(study => {
    languages.forEach(lang => {
      const url = `${baseUrl}/${lang}/portfolio/${study}`;
      const alternateLang = lang === 'en' ? 'ar' : 'en';
      const alternateUrl = `${baseUrl}/${alternateLang}/portfolio/${study}`;
      sitemap += generateUrlEntry(url, lang, alternateLang, alternateUrl, lastmodDate, 'monthly', '0.7');
    });
  });

  // Add blog article pages
  blogArticles.forEach(article => {
    languages.forEach(lang => {
      const url = `${baseUrl}/${lang}/blog/${article.slug}`;
      const alternateLang = lang === 'en' ? 'ar' : 'en';
      const alternateUrl = `${baseUrl}/${alternateLang}/blog/${article.slug}`;
      sitemap += generateUrlEntry(url, lang, alternateLang, alternateUrl, article.date, 'monthly', '0.8');
    });
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Generate and save sitemap
const sitemap = generateSitemap();
const outputPath = join(process.cwd(), 'client', 'public', 'sitemap.xml');
writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`✅ Sitemap generated successfully at ${outputPath}`);
console.log(`📄 Total URLs: ${(pages.length + industries.length + caseStudies.length + blogArticles.length) * 2}`);
