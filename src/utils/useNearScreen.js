import { useState, useEffect, useRef } from 'react';

export default function useNearScreen({ rootMargin = '300px 0px' } = {}) {
  const ref = useRef(null);
  const [isNearScreen, setIsNearScreen] = useState(false);

  useEffect(() => {
    let observer;
    if (ref.current && !isNearScreen) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsNearScreen(true);
            observer.disconnect();
          }
        },
        { rootMargin },
      );
      observer.observe(ref.current);
    }
    return () => observer && observer.disconnect();
  }, [isNearScreen, rootMargin]);

  return [ref, isNearScreen];
}
