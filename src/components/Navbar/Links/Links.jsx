'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const DynamicNavLink = dynamic(() => import('../NavLinks/NavLink'), {
  loading: () => <div>در حال بارگزاری</div>,
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
  const isAdmin = true;
  return (
    <div>
      <ul className="flex flex-row gap-3 text-xs lg:text-base items-center max-md:hidden ">
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
          Menu
        </button>
        {sideBarOpen && (
          <div
            className={` max-md:absolute h-[calc(100%-70px)] right-2 top-[70px] w-1/2 bg-blue-900  `}
          >
            <ul className="flex flex-col gap-4 items-center text-white justify-center h-full ">
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
