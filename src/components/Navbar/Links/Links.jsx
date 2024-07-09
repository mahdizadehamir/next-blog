'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
//components
import Spinner from '@/components/Spinner/Spinner';
//icons
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';
//dynamic import
const DynamicNavLink = dynamic(() => import('../NavLinks/NavLink'), {
  loading: () => <Spinner />,
});
const links = [
  {
    title: 'خانه',
    path: '/',
  },
  {
    title: 'تماس با ما',
    path: '/contact',
  },
  {
    title: 'ثبت نام',
    path: '/register',
  },
  {
    title: 'درباره اپلیکیشن',
    path: '/about',
  },
];
function Links({ logOutHandler, session }) {
  const [sideBarOpen, setSidebarOpen] = useState(false);
  const toggleSideBar = () => {
    setSidebarOpen((prevState) => !prevState);
  };
  const isAdmin = session?.user?.isAdmin;
  return (
    <div>
      <ul className="flex flex-row gap-3 text-xs lg:text-base items-center max-md:hidden mt-1 ">
        {links.map((link) => (
          <DynamicNavLink key={link.title} path={link.path} title={link.title} />
        ))}
        {session?.user ? (
          <>
            {isAdmin && <DynamicNavLink title={'پنل ادمین'} path={'/admin'} />}
            <form action={logOutHandler}>
              <button className="font-bold p-1 bg-white rounded text-black">خروج</button>
            </form>
          </>
        ) : (
          <DynamicNavLink title={'ورود'} path={'/login'} />
        )}
      </ul>
      <div className="max-md:block hidden">
        <button
          className="z-10 max-md:block hidden  text-white cursor-pointer  "
          onClick={toggleSideBar}
        >
          {sideBarOpen ? (
            <MdClose className="text-4xl hover:text-gray-600 border p-1 rounded-lg cursor-pointer hover:bg-slate-300 dark:hover:bg-blue-700 dark:hover:text-white transition-all ease-in duration-100" />
          ) : (
            <RxHamburgerMenu className="text-4xl hover:text-gray-600 border p-1 rounded-lg cursor-pointer hover:bg-slate-300 dark:hover:bg-blue-700 dark:hover:text-white transition-all ease-in duration-100 " />
          )}
        </button>
        {sideBarOpen && (
          <div
            className={` max-md:absolute h-[calc(100%-70px)] right-2 top-[70px] w-1/2 bg-slate-500 dark:bg-blue-900  `}
          >
            <ul className="flex flex-col gap-10 items-center text-white justify-center h-full ">
              {links.map((link) => (
                <DynamicNavLink key={link.title} path={link.path} title={link.title} />
              ))}
              {session?.user ? (
                <>
                  {isAdmin && <DynamicNavLink title={'پنل ادمین'} path={'/admin'} />}
                  <form action={logOutHandler}>
                    <button className="font-bold p-1 bg-white rounded text-black">خروج</button>
                  </form>
                </>
              ) : (
                <DynamicNavLink title={'ورود'} path={'/login'} />
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Links;
