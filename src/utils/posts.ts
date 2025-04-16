import { APIResponse, PostList } from "@/types/post";

export const getPosts = async (apiUrl?: string): Promise<PostList[]> => {
  const res = await fetch(`${apiUrl ?? process.env.NEXTJS_API_URL}/latest-posts/all/`, {
    cache: 'no-store'
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch articles ${errorText} ${new Date().toISOString()}`); 
  }

  const response: APIResponse<PostList[]> = await res.json();  
  return response?.data;
}