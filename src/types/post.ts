import { Category } from "./category";
import { Member } from "./member";
import { Tag } from "./tag";

export interface APIResponse<T> {
  status: string;
  count: number;
  data: T;
}

export interface Post {
  id: number,
  title: string;
  banner_url: string;
  legacy_url: string;
  short_description: string;
  summary: string;
  type: string;
  primary_category: PostCategory;
  categories: PostCategory[];
  tags: PostTag[];
  contributors: PostMember[];
  formatted_first_published_at_datetime: string;
  formatted_last_published_at_datetime: string;
  absolute_url: string;
  meta_data: PostMetaData[];
  custom_entity?: Record<string, any>;
  hide_banner_image: boolean;
  banner_description: string;
  word_count: number;
  blog_update: [];
  access_type: string;
  language_code: string;
}

export interface PostList extends Omit<Post, 'tags'> {
}

export interface PostCategory extends Partial<Category> {
}

export interface PostTag extends Partial<Tag> {
}

export interface PostMember extends Partial<Member> {
}

export interface PostBlogUpdate extends Partial<Post> {
  id: number;
  published_post: number | Post; // Post id or Post object
  author: PostMember;
  content: string;
  created_at: string;
  updated_at: string;
  is_pinned: boolean;
}

export interface PostMetaData {
  key: string;
  value: string;
}

export interface ArticlesData {
  featured: Post;
  latest: Post[];
  categories: PostCategory[];
} 

export interface TrendingArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  views: number;
}