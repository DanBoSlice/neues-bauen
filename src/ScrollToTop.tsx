import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.startsWith('/design-elements/')) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <></>;
}
