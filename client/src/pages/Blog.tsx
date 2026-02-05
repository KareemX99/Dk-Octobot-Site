/* 
 * Modern Tech-Inspired Design:
 * - Blog grid layout with glassmorphism cards
 * - Category filters and pagination
 * - SEO-optimized article cards with smooth animations
 */

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Link } from 'wouter';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { blogPosts, getAllCategories, getAllCategoriesAr } from '@/lib/blogData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';

export default function Blog() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = language === 'en' ? getAllCategories() : getAllCategoriesAr();

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const title = language === 'en' ? post.titleEn : post.titleAr;
    const excerpt = language === 'en' ? post.excerptEn : post.excerptAr;
    const category = language === 'en' ? post.category : post.categoryAr;
    const tags = language === 'en' ? post.tags : post.tagsAr;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      title.toLowerCase().includes(searchLower) ||
      excerpt.toLowerCase().includes(searchLower) ||
      tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    const matchesCategory = selectedCategory === 'all' || category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <SEO
          title={language === 'en' ? 'Blog - AI & Automation Insights | DK-OctoBot' : 'المدونة - رؤى الذكاء الاصطناعي والأتمتة | DK-OctoBot'}
          description={language === 'en' 
            ? 'Expert insights on AI chatbots, customer service automation, sales strategies, and digital transformation. Learn from real case studies and proven strategies.' 
            : 'رؤى الخبراء حول روبوتات الدردشة بالذكاء الاصطناعي، وأتمتة خدمة العملاء، واستراتيجيات المبيعات، والتحول الرقمي. تعلم من دراسات الحالة الحقيقية والاستراتيجيات المثبتة.'}
          keywords="AI blog, chatbot articles, automation guides, customer service tips, sales strategies, business automation, digital transformation"
        />
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan/20 rounded-full blur-3xl" />
          
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                {language === 'en' ? 'Blog & Insights' : 'المدونة والرؤى'}
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold">
                {language === 'en' ? 'Learn, Grow, Succeed' : 'تعلم، انمُ، انجح'}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {language === 'en' 
                  ? 'Expert insights on AI, automation, and customer service to help your business thrive'
                  : 'رؤى الخبراء حول الذكاء الاصطناعي والأتمتة وخدمة العملاء لمساعدة عملك على الازدهار'}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-card/30">
            <div className="container max-w-6xl">
              <Link href={`/${language}/blog/${featuredPost.slug}`}>
                <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-cyan/10 border border-primary/20 shadow-tech-lg hover:shadow-glow transition-all duration-500 cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    <div className="relative h-64 md:h-full rounded-xl overflow-hidden">
                      <img 
                        src={featuredPost.image} 
                        alt={language === 'en' ? featuredPost.titleEn : featuredPost.titleAr}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 gradient-tech text-white text-xs font-bold rounded-full">
                        {language === 'en' ? 'FEATURED' : 'مميز'}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary">
                          {language === 'en' ? featuredPost.category : featuredPost.categoryAr}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.publishDate).toLocaleDateString(language === 'en' ? 'en-US' : 'ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime} {language === 'en' ? 'min read' : 'دقيقة'}</span>
                        </div>
                      </div>
                      <h2 className="text-3xl font-display font-bold group-hover:text-primary transition-colors">
                        {language === 'en' ? featuredPost.titleEn : featuredPost.titleAr}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {language === 'en' ? featuredPost.excerptEn : featuredPost.excerptAr}
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                        <span>{language === 'en' ? 'Read Article' : 'اقرأ المقال'}</span>
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Search and Filter */}
        <section className="py-12">
          <div className="container max-w-6xl">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={language === 'en' ? 'Search articles...' : 'ابحث في المقالات...'}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="pl-10 h-12 bg-card/50 border-border/50"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  onClick={() => {
                    setSelectedCategory('all');
                    setCurrentPage(1);
                  }}
                  className={selectedCategory === 'all' ? 'gradient-tech text-white' : ''}
                >
                  {language === 'en' ? 'All' : 'الكل'}
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={selectedCategory === category ? 'gradient-tech text-white' : ''}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentPosts.map((post, index) => (
                <Link key={post.id} href={`/${language}/blog/${post.slug}`}>
                  <div 
                    className="group h-full rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-tech hover:shadow-tech-lg transition-all duration-500 overflow-hidden cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={language === 'en' ? post.titleEn : post.titleAr}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-md">
                        {language === 'en' ? post.category : post.categoryAr}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.publishDate).toLocaleDateString(language === 'en' ? 'en-US' : 'ar-EG', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime} {language === 'en' ? 'min' : 'د'}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {language === 'en' ? post.titleEn : post.titleAr}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {language === 'en' ? post.excerptEn : post.excerptAr}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                        <span>{language === 'en' ? 'Read More' : 'اقرأ المزيد'}</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  {language === 'en' ? 'Previous' : 'السابق'}
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? 'gradient-tech text-white' : ''}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  {language === 'en' ? 'Next' : 'التالي'}
                </Button>
              </div>
            )}

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  {language === 'en' ? 'No articles found. Try a different search or category.' : 'لم يتم العثور على مقالات. جرب بحثاً أو فئة مختلفة.'}
                </p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
