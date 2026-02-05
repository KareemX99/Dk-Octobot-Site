/**
 * Modern Tech-Inspired Design:
 * - Clean article layout with proper typography
 * - Markdown rendering with Streamdown
 * - Related articles section
 */

import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { useRoute, Link } from 'wouter';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts, blogContent } from '@/lib/blog';
import { Button } from '@/components/ui/button';
import { Streamdown } from 'streamdown';
import { toast } from 'sonner';

export default function BlogPost() {
  const { language } = useLanguage();
  const [, params] = useRoute('/:lang/blog/:slug');
  const slug = params?.slug || '';

  const post = blogPosts.find(p => p.slug === slug);
  const content = blogContent[slug]?.[language];

  if (!post || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">
            {language === 'en' ? 'Article Not Found' : 'المقال غير موجود'}
          </h1>
          <Link href={`/${language}/blog`}>
            <a className="text-primary hover:underline">
              {language === 'en' ? 'Back to Blog' : 'العودة إلى المدونة'}
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: content.title,
        text: content.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success(language === 'en' ? 'Link copied to clipboard!' : 'تم نسخ الرابط!');
    }
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={content.title}
        description={content.excerpt}
        type="article"
        image={post.image}
        author="DK-OctoBot Team"
        publishedTime={post.date}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Back Button */}
            <Link href={`/${language}/blog`}>
              <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                {language === 'en' ? 'Back to Blog' : 'العودة إلى المدونة'}
              </a>
            </Link>

            {/* Category */}
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              {content.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="h-4 w-4" />
                {language === 'en' ? 'Share' : 'مشاركة'}
              </Button>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={post.image}
                alt={content.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <Streamdown>{content.content}</Streamdown>
            </article>

            {/* Share Again */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  {language === 'en' ? 'Found this helpful? Share it!' : 'وجدت هذا مفيدًا؟ شاركه!'}
                </p>
                <Button onClick={handleShare} className="gap-2">
                  <Share2 className="h-4 w-4" />
                  {language === 'en' ? 'Share Article' : 'مشاركة المقال'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
