export interface Category {
  id: number;
  name: string;
  slug: string;
  parent_category: Category | null;
  category_brand_color: string | null;
  absolute_url: string;
  content: string;
}