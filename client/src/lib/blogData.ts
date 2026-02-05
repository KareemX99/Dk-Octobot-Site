import articlesData from './blog-content/articles.json';

export interface BlogPost {
  id: string;
  slug: string;
  titleEn: string;
  titleAr: string;
  excerptEn: string;
  excerptAr: string;
  category: string;
  categoryAr: string;
  author: string;
  authorAr: string;
  publishDate: string;
  readTime: number;
  image: string;
  tags: string[];
  tagsAr: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = articlesData as BlogPost[];

// Helper functions for blog
export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getAllCategories(): string[] {
  const categories = new Set(blogPosts.map(post => post.category));
  return Array.from(categories);
}

export function getAllCategoriesAr(): string[] {
  const categories = new Set(blogPosts.map(post => post.categoryAr));
  return Array.from(categories);
}
