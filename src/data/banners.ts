import { ikSrcSet, ikUrl, liveryPath } from "../lib/imagekit";

export type BannerMedia =
  | { kind: "photo"; src: string; srcSet: string; alt: string }
  /** CSS grid texture — no photo needed. */
  | { kind: "texture" }
  /** Marked diagonal-hatch placeholder: swap in a real photo when you have one. */
  | { kind: "placeholder" };

export type BannerAction = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "filled" | "outline" | "light" | "default";
};

export type BannerDef = {
  id: string;
  /** Two-digit section number shown in the label. */
  index: string;
  label?: string;
  headline: string;
  /** Rendered in teal immediately after the headline. */
  accentWord?: string;
  body: string[];
  media?: BannerMedia;
  align?: "left" | "right" | "center";
  /** Lays a flat dark wash over a photo so the copy stays readable. */
  dim?: boolean;
  variant?: "hero" | "standard";
  minHeight?: string;
  actions?: BannerAction[];
};

/** Helper: a livery photo straight off the design-site ImageKit bucket. */
function liveryMedia(
  photoName: string,
  photoIndex: number,
  alt: string,
): BannerMedia {
  const path = liveryPath(photoName, photoIndex);
  return {
    kind: "photo",
    src: ikUrl(path, { width: 1600, quality: 72 }),
    srcSet: ikSrcSet(path, 72, true),
    alt,
  };
}

export const HOME_BANNERS: BannerDef[] = [
  {
    id: "hero",
    index: "00",
    headline: "I love simracing",
    accentWord: "and motorsports",
    body: [
      "Hi, I'm Arjun. I do a lot of cool stuff in simracing, I make liveries and do stuff for leagues and teams.",
    ],
    media: liveryMedia(
      "jwd_genesis_3",
      2,
      "Jumpy Whale Design Genesis GMR-01 hypercar in teal and black, running in Le Mans Ultimate",
    ),
    dim: true,
    variant: "hero",
    minHeight: "92vh",
    actions: [
      {
        label: "My Resume",
        href: "https://docs.google.com/document/d/1mgu7oLRhmiBkjJYGCaykEE_BttQIcyAWD0ngxJAhehA/edit?usp=sharing",
        external: true,
      },
      { label: "See Projects", href: "/projects", variant: "outline" },
    ],
  },
  {
    id: "liveries",
    index: "01",
    label: "Liveries",
    headline: "I make cars",
    accentWord: "look cooler",
    body: [
      "I make simracing liveries, I'd say sixty liveries have been made but its more than that and I lost count.",
      "I love seeing my work of art on track, every livery is made by my passion to make stuff look cool and something you can't tell if is real or on a sim. I worked with multiple drivers, teams and leagues to create liveries for multiple sims over the past 5 years",
    ],
    media: liveryMedia(
      "srt_acc_japanPorsche",
      2,
      "Soar-N Racing Team's 24 Hours of Suzuka special Porsche 911 GT3 R, painted with cherry blossom artwork, in Assetto Corsa Competizione",
    ),
    dim: true,
    align: "right",
    actions: [
      {
        label: "View Liveries",
        href: "https://design.jumpywhale.com",
        external: true,
      },
    ],
  },
  {
    id: "esports",
    index: "02",
    label: "Esports",
    headline: "Racing at the",
    accentWord: "sharp end",
    body: [
      "I help run racing teams and esports communities. I have creative roles in esports teams while dealing with the community and events in simracing leagues and collegiate esports. I can broadcast and commentate races, run events and deal with community and brands.",
    ],
    media: liveryMedia(
      "dts_aston_v8_1",
      2,
      "DTS Academy Aston Martin V8 Vantage GT3 Evo in red, white and black, seen from above in Le Mans Ultimate",
    ),
    dim: true,
    align: "left",
    actions: [{ label: "My Work", href: "/projects", variant: "outline" }],
  },
  {
    id: "code",
    index: "03",
    label: "Code",
    headline: "I also",
    accentWord: "write the code",
    body: [
      "I'm a software developer by out of the sim, I have a degree in computer science and I worked in Big Tech",
      "My passion is still simracing and motorsport. I like to build and maintain cool software like my Simracing Enduro Planner, and the Sim Racing Alliance website.",
    ],
    media: liveryMedia(
      "mhr_acc_550Fezza",
      5,
      "Madhaus Racing Ferrari 550 in a retro livery, in Assetto Corsa Competizione",
    ),
    dim: true,
    align: "right",
    actions: [
      { label: "All projects", href: "/projects" },
    ],
  },
  {
    id: "contact",
    index: "04",
    label: "Get in touch",
    headline: "Come say",
    accentWord: "hello",
    body: [
      "A livery, a race, a project or just something you want to talk about — my inbox is open!",
    ],
    media: liveryMedia(
      "srt_irg_porsche_1",
      3,
      "Soar-N Racing Team's Porsche 911 GT3 R in dazzle camo, seen from above in iRacing Daytona 24 Hours",
    ),
    align: "left",
    minHeight: "56vh",
    actions: [
      {
        label: "Contact Me",
        href: "mailto:d.arj.guy01@gmail.com",
        external: true,
      },
    ],
  },
];
