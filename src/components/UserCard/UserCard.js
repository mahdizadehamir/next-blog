import { getUser } from '@/lib/data';
import Image from 'next/image';
async function UserCard({ userId }) {
  const user = await getUser(userId);
  return (
    <div className="flex flex-row gap-4 items-center mb-3">
      <figure className="avatar rounded">
        <Image className='w-full rounded-full' src={user?.img ?? '/images/user.png'} height={40} width={40} alt="user-image" />
      </figure>
      <figcaption>
        <h3>نویسنده</h3>
        <p>{user?.username}</p>
      </figcaption>
    </div>
  );
}

export default UserCard;
