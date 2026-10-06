import { Fragment, useEffect } from "react";
import { useLenis } from "lenis/react";
import Snap from "lenis/snap";
import Banner from "../components/Banner";
import BannerDivider from "../components/BannerDivider";
import { HOME_BANNERS } from "../data/banners";

/** Stacked full-bleed banners, with the stat strip slotted in after the code banner. */
export default function Home() {
  const lenis = useLenis();

  // Snapping is driven by Lenis so it eases with the same curve as the scroll,
  // and it only applies here — Projects and About scroll normally. Below sm the
  // banners outgrow the viewport, so centring one would crop its own copy.
  useEffect(() => {
    if (!lenis) return;
    if (!window.matchMedia("(min-width: 48em)").matches) return;

    const snap = new Snap(lenis, {
      type: "proximity",
      duration: 1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      distanceThreshold: "30%",
      debounce: 250,
    });

    const banners = Array.from(
      document.querySelectorAll<HTMLElement>(".jw-banner"),
    );
    snap.addElements(banners, { align: ["center"] });

    return () => snap.destroy();
  }, [lenis]);

  return (
    <>
      {HOME_BANNERS.map((banner, i) => (
        <Fragment key={banner.id}>
          <Banner banner={banner} />
          {banner.id === "code"}
          {i < HOME_BANNERS.length - 1 && <BannerDivider />}
        </Fragment>
      ))}
    </>
  );
}
