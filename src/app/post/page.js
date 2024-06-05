import Image from 'next/image';
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
