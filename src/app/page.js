// import PostCard from '@/components/PostCard/PostCard';
import { getPosts } from '@/lib/data';
import dynamic from 'next/dynamic';

const DynamicPostCard = dynamic(() => import('@/components/PostCard/PostCard'), {
  loading: () => <div>...loading</div>,
});
export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="w-full mt-20 grid lg:grid-cols-3 md:grid-cols-2  justify-items-center ">
      {posts && posts.map((post) => <DynamicPostCard key={post.id} post={post} />)}
    </main>
  );
}
