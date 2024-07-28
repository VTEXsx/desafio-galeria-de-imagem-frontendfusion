/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

function useIntersectionObserver(element, animate, reset) {
  useEffect(() => {
    if (!element.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(element.current);
          } else {
            reset(element.current);
          }
        });
      },
      { threshold: 0.1}
    );

    if (element) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) {
        observer.disconnect();
      }
    };
  }, [animate, element, reset]);

  return null;
}

export default useIntersectionObserver;
