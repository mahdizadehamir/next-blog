import Image from 'next/image';
import Link from 'next/link';
let dateOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
};
function PostCard({ post }) {
  return (
    <div className="flex md:h-3/4 flex-col w-2/3 max-h-fit items-center gap-3 bg-white  text-black rounded-t-lg">
      <div className="rounded-t-lg h-1/2 w-full ">
        <Image
          className="rounded-t-lg w-full h-full"
          src={post.img || `/images/post-img.jpg`}
          alt="post-image"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="self-start p-2">
        <h3>{post.title}</h3>
      </div>
      <div className="self-start w-full flex flex-row items-center justify-between p-1">
        <span>تاریخ تهیه</span>
        <span>{post.createdAt?.toLocaleString('fa-IR', dateOptions)}</span>
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
