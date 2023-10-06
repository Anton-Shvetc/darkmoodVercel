'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Theme = ({ paths, className }) => {
  const pathname = usePathname();
  console.log(paths === pathname);
  useEffect(() => {
    if (paths === pathname) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [location.pathname, paths, className]);

  return null;
};

export default Theme;
