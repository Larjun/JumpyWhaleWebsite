import { useEffect, useRef, useState } from "react";

const SUPPORTS_OBSERVER = typeof IntersectionObserver !== "undefined";

/**
 * Fades an element in the first time it scrolls into view. Returns a ref plus the
 * visibility flag; pair it with the `.jw-reveal` class, which no-ops under
 * `prefers-reduced-motion`. Without IntersectionObserver support, content starts
 * visible rather than never appearing.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.18,
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(!SUPPORTS_OBSERVER);

  useEffect(() => {
    const node = ref.current;
    if (!node || !SUPPORTS_OBSERVER) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
