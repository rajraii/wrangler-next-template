import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data for trending articles
  const trendingArticles = [
    {
      id: '1',
      title: 'The Future of AI in Healthcare',
      description: 'Exploring how artificial intelligence is revolutionizing the medical field.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&auto=format&fit=crop&q=60',
      views: 12500
    },
    {
      id: '2',
      title: 'Sustainable Energy Solutions',
      description: 'New breakthroughs in renewable energy technology.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&auto=format&fit=crop&q=60',
      views: 9800
    },
    {
      id: '3',
      title: 'The Rise of Remote Work',
      description: 'How the workplace is evolving in the post-pandemic era.',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop&q=60',
      views: 7500
    }
  ];

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return NextResponse.json(trendingArticles);
} 