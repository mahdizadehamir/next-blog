import Image from 'next/image';
import Link from 'next/link';
function PostCard({ post }) {
  return (
    <div className="flex flex-col w-2/3 h-3/4 items-center gap-5 bg-white  text-black rounded-t-lg">
      <div className="rounded-t-lg h-1/2 w-full ">
        <Image
          className="rounded-t-lg w-full h-full "
          src="/images/post-img.jpg"
          alt="post-image"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="self-start p-2">
        <h3>{post.title}</h3>
      </div>
      <div className="self-start w-full flex flex-row items-center justify-between p-1">
        <span>تاریخ تهیه</span>
        <span>1/1/1399</span>
      </div>
      <div className="self-start mt-2  p-1">
        <Link className="underline" href={`/post/${post.slug}`}>
          بیشتر بخوانید
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
