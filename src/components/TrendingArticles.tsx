'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PostList, TrendingArticle } from '@/types/post';
import { getPosts } from '@/utils/posts';

interface TrendingArticlesProps {
  apiUrl: string;
}

const fetchPosts = async (apiUrl: string, setTrendingArticles: (articles: PostList[]) => void, loadingCb: (loading: boolean) => void) => {
  try {
    loadingCb(true);
    const posts = await getPosts(apiUrl);
    setTrendingArticles(posts);
  } catch (error) {
    console.error('Error fetching trending articles:', error);
  } finally {
    loadingCb(false);
  }
}

export default function TrendingArticles({ apiUrl }: TrendingArticlesProps) {
  const [trendingArticles, setTrendingArticles] = useState<PostList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts(apiUrl, setTrendingArticles, setLoading);
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="w-24 h-24 bg-gray-200 rounded"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Trending Now</h3>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingArticles.map((article) => (
          <div key={article.id} className="flex gap-4">
            <div className="min-w-24 h-24 relative">
              <Image
                src={article.banner_url}
                alt={article.title}
                fill
                sizes="90px"
                className="object-cover rounded"
              />
            </div>
            <div>
              <h4 className="font-medium line-clamp-2">{article.title}</h4>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">{article.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 