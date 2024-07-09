import Image from 'next/image';
import { getPost } from '@/lib/data';
import { Suspense } from 'react';
import SinglePost from '@/components/SinglePostDetails/SinglePost';
export const generateMetadata = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

async function SinglePostPage({ params }) {
  const post = await getPost(params.slug);
  return <SinglePost post={post} />;
}

export default SinglePostPage;
