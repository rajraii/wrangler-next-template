import Image from "next/image";
import TrendingArticles from "@/components/TrendingArticles";
import { getPosts } from "@/utils/posts";

export const runtime = 'edge';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Publive Demo</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Politics</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Technology</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Culture</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Science</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-[500px]">
              <Image
                src={posts[0].banner_url}
                alt={posts[0].title}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <span className="text-sm text-white bg-red-600 px-3 py-1 rounded-full">Featured</span>
                <h2 className="mt-2 text-3xl font-bold text-white">{posts[0].title}</h2>
                <p className="mt-2 text-white/80">{posts[0].summary}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl text-gray-900 font-semibold">Latest Updates</h3>
                <div className="mt-4 space-y-4">
                  {posts.slice(1, 5).map((post) => (
                    <div key={post.id} className="flex gap-4 relative">
                      <div className="w-24 h-24 relative">
                        <Image
                          src={post.banner_url}
                          alt={post.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{post.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{post.summary}</p>

                        <div className="flex gap-2 absolute bottom-0">
                          <span className="text-sm text-gray-600">{new Date(post.formatted_last_published_at_datetime).toLocaleDateString() + " " + new Date(post.formatted_last_published_at_datetime).toLocaleTimeString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.banner_url}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 relative h-[160px]">
                  <h3 className="text-xl text-gray-900 font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-1">{post.summary}</p>
                  <a href="#" className="mt-4 inline-block absolute bottom-[15px] text-blue-600 hover:text-blue-800">Read More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Articles - Client Side Rendered */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrendingArticles apiUrl={process.env.NEXTJS_API_URL ?? ""} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest articles and updates.</p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
