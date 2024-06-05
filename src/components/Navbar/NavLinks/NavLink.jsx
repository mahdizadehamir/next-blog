'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
function NavLink({ path, title }) {
  const pathName = usePathname();
  return (
    <li>
      <Link
        className={`${pathName === path ? 'bg-white text-blue-600' : ' '} rounded p-2 `}
        href={path}
      >
        {title}
      </Link>
    </li>
  );
}

export default NavLink;
