export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface ArticlesData {
  featured: Article;
  latest: Article[];
  categories: Category[];
} 