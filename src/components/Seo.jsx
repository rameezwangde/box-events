import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seo } from '../data/siteContent';

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const fallback = seo['/'];
    const meta = seo[pathname] || fallback;
    document.title = meta.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
}
