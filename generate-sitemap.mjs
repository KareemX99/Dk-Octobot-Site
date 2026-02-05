import { writeFileSync } from 'fs';
import { join } from 'path';

const baseUrl = 'https://dk-octobot.com';
const currentDate = new Date().toISOString();

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

      sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${alternateUrl}" />
  </url>
`;
    });
  });

  // Add industry pages
  industries.forEach(industry => {
    languages.forEach(lang => {
      const url = `${baseUrl}/${lang}/industries/${industry}`;
      const alternateLang = lang === 'en' ? 'ar' : 'en';
      const alternateUrl = `${baseUrl}/${alternateLang}/industries/${industry}`;

      sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${alternateUrl}" />
  </url>
`;
    });
  });

  // Add case study pages
  caseStudies.forEach(study => {
    languages.forEach(lang => {
      const url = `${baseUrl}/${lang}/portfolio/${study}`;
      const alternateLang = lang === 'en' ? 'ar' : 'en';
      const alternateUrl = `${baseUrl}/${alternateLang}/portfolio/${study}`;

      sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${alternateUrl}" />
  </url>
`;
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
console.log(`📄 Total URLs: ${(pages.length + industries.length + caseStudies.length) * 2}`);
