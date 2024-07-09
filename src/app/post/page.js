import Image from 'next/image';
import { getPost } from '@/lib/data';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
export const generateMetadata = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.desc,
  };
};
const DynamicUserCard = dynamic(() => import('@/components/UserCard/UserCard'), {
  loading: () => <div>Loading...</div>,
});

function SinglePostPage() {
  return (
    <div className="flex flex-row gap-4">
      <div className="img">
        <Image src="images/post-img.jpg" alt="post-image" />
      </div>
    </div>
  );
}

export default SinglePostPage;
