import { NextResponse } from 'next/server';

// Mock data for articles
const articles = {
  featured: {
    id: 1,
    title: "The Future of Artificial Intelligence in Everyday Life",
    description: "Exploring how AI is transforming our daily routines and what to expect in the coming years.",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442135136-760c813dce8c?w=1200&auto=format&fit=crop&q=60",
    date: "2024-03-20"
  },
  latest: [
    {
      id: 2,
      title: "New Breakthrough in Renewable Energy",
      description: "Scientists discover more efficient solar panel technology...",
      category: "Science",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60",
      date: "2024-03-19"
    },
    {
      id: 3,
      title: "The Rise of Digital Art",
      description: "How NFTs are changing the art world...",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=500&auto=format&fit=crop&q=60",
      date: "2024-03-18"
    }
  ],
  categories: [
    {
      id: 1,
      name: "Technology",
      description: "Explore the latest news and insights in technology.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      name: "Science",
      description: "Explore the latest news and insights in science.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      name: "Culture",
      description: "Explore the latest news and insights in culture.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      name: "Politics",
      description: "Explore the latest news and insights in politics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      name: "Health",
      description: "Explore the latest news and insights in health.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      name: "Environment",
      description: "Explore the latest news and insights in environment.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=60"
    }
  ]
};

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return NextResponse.json(articles);
}