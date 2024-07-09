import Image from 'next/image';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const DynamicUserCard = dynamic(() => import('@/components/UserCard/UserCard'), {
  loading: () => <div>Loading...</div>,
});
function SinglePost({ post }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-20  ">
      <div className=" md:w-1/3 md:max-h-80 w-2/3 mt-20 md:mt-0 ">
        <Image
          src={post.img ?? '/images/post-img.jpg'}
          width={400}
          height={400}
          className="w-full h-full"
          alt="post-image"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="title-container order-1">
          <h3 className="text-2xl font-bold md:font-extrabold ">{post.title}</h3>
        </div>
        <div className="mt-10 md:mt-0 order-3 md:order-2">
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicUserCard userId={post.userId} />
          </Suspense>
        </div>

        <div className="order-2 md:order-3">
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
