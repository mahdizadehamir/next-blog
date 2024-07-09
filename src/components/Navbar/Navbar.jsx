import { logOutHandler } from '@/actions/authActions';
import Links from './Links/Links';
import { auth } from '@/auth/auth';
import dynamic from 'next/dynamic';

const DynamicDarkMode = dynamic(() => import('./DarkModeButton/DarkMode'), {
  loading: () => <p>Loading...</p>,
})
async function Navbar() {
  const session = await auth();
  return (
    <nav className="flex flex-row justify-between bg-slate-500 dark:bg-blue-900 rounded-md  mt-3 p-3">
      <Links logOutHandler={logOutHandler} session={session} />
      <div className="Logo text-xl font-bold flex flex-row gap-10 justify-center text-center items-center">
        <DynamicDarkMode />
        <p> میکده</p>
      </div>
    </nav>
  );
}

export default Navbar;
