import AdminPostForm from '@/components/AdminPostForm/AdminPostForm';
import { auth } from '@/auth/auth';

async function Admin() {
  const session = await auth();

  return (
    <div>
      <AdminPostForm userId={session.user.id} />
    </div>
  );
}

export default Admin;
