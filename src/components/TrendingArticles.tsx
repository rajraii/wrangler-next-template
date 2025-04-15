'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface TrendingArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  views: number;
}

interface TrendingArticlesProps {
  apiUrl: string;
}

export default function TrendingArticles({ apiUrl }: TrendingArticlesProps) {
  const [trendingArticles, setTrendingArticles] = useState<TrendingArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingArticles = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/articles/trending`);
        const data = await response.json() as TrendingArticle[];
        setTrendingArticles(data);
      } catch (error) {
        console.error('Error fetching trending articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingArticles();
  }, [apiUrl]);

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
      <h3 className="text-xl font-semibold mb-4">Trending Now</h3>
      <div className="space-y-4">
        {trendingArticles.map((article) => (
          <div key={article.id} className="flex gap-4">
            <div className="w-24 h-24 relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <h4 className="font-medium">{article.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{article.description}</p>
              <p className="text-xs text-gray-500 mt-1">{article.views} views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 