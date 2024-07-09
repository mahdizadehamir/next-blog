'use client';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner/Spinner';

function DarkMode() {
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== undefined) {
        const storedData = JSON.parse(localStorage.getItem('theme'));
        if (storedData) {
          setTheme(storedData);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (
      theme === 'dark' ||
      (theme === 'os-prefers' && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      (theme === null &&  window.matchMedia('(prefers-color-scheme: dark)').matches) 
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = (e) => {
    setTheme(e.target.value);
  };
  if (loading) return <Spinner />;
  return (
    <select
      onChange={toggleTheme}
      value={theme}
      className="block appearance-none bg-gray-200 dark:bg-blue-950 border border-gray-300 dark:border-blue-900 hover:border-gray-500 px-2 py-1  rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-900 dark:text-gray-100 font-light"
    >
      <option className="p-2" value="os-prefers">
        ⚙️{'  '}سیستم{' '}
      </option>
      <option className="p-2" value="light">
        🌞 {'  '} روشن
      </option>
      <option className="p-2" value="dark">
        🌜{'  '} تاریک
      </option>
    </select>
  );
}

export default DarkMode;
