import { logOutHandler } from '@/actions/authActions';
import Links from './Links/Links';
import { auth } from '@/auth/auth';
async function Navbar() {
  const session = await auth();
  return (
    <nav className="flex flex-row justify-between bg-blue-900 rounded-md  mt-3 p-3">
      <Links logOutHandler={logOutHandler} session={session} />
      <div className="Logo text-xl font-bold">
        <p>لوگو</p>
      </div>
    </nav>
  );
}

export default Navbar;
