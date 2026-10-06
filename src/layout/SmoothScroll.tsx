import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import "lenis/dist/lenis.css";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Eased scrolling for the whole site. Lenis interpolates the scroll position
 * each frame, which is what lets the banner snapping ease rather than jump —
 * native scroll-snap gives no control over its own curve.
 *
 * Anyone who asks for reduced motion gets ordinary native scrolling instead.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  if (prefersReducedMotion()) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
        // Touch devices keep their native momentum; Lenis only eases the wheel.
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
