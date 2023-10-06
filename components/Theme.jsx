import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Theme = ({ paths, className }) => {
  const location = useLocation();

  useEffect(() => {
    if (paths.includes(location.pathname)) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [location.pathname, paths, className]);

  return null;
};

export default Theme;
