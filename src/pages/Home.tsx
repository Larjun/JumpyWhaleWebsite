import { Fragment } from "react";
import Banner from "../components/Banner";
import BannerDivider from "../components/BannerDivider";
import { HOME_BANNERS } from "../data/banners";

/** Stacked full-bleed banners, with the stat strip slotted in after the code banner. */
export default function Home() {
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
