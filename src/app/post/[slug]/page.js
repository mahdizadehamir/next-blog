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

async function SinglePostPage({ params }) {
  const post = await getPost(params.slug);
  return (
    <div className="flex flex-row   ">
      <div className="img">
        <Image
          src={post.img ?? '/images/post-img.jpg'}
          width={400}
          height={400}
          className="w-3/4"
          alt="post-image"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="title-container ">
          <h3 className="text-3xl font-extrabold">{post.title}</h3>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicUserCard userId={post.userId} />
        </Suspense>
        <div>
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
