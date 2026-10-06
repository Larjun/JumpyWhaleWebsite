import jwsrep from "../assets/jwsrep.png";
import jwd from "../assets/jwd.png";
import { ikSrcSet, ikUrl, liveryPath } from "../lib/imagekit";

export type ProjectStatus = "Current" | "Live" | "In progress" | "Past";

export type ProjectClassDef = {
  name: string;
  /** Shown above the title in teal — the job, not the tech. */
  role?: string;
  description: string;
  /** Omit for work with nothing public to link to yet. */
  link?: string;
  /** Imported image, or an ImageKit URL. */
  logoImg?: string;
  logoSrcSet?: string;
  /** Contain suits logos; cover suits photos. */
  fit?: "cover" | "contain";
  /** Backdrop for a transparent logo — light for dark marks, dark otherwise. */
  plate?: "dark" | "light";
  /** Draws a vector mark in the accent colour instead of loading an image. */
  icon?: "youtube";
  year: string;
  status: ProjectStatus;
};

/**
 * A team logo from the shared ImageKit assets folder. These originals only
 * serve through a transform, which is how ikUrl requests them anyway.
 */
function logoCardImg(fileName: string, plate: "dark" | "light" = "dark") {
  const path = `jumpy_whale_assets/${fileName}`;
  return {
    logoImg: ikUrl(path, { width: 640, quality: 85 }),
    logoSrcSet: ikSrcSet(path, 85),
    fit: "contain" as const,
    plate,
  };
}

/** A livery photo off the design-site ImageKit bucket, sized for a card. */
function liveryCardImg(photoName: string, photoIndex: number) {
  return {
    logoImg: ikUrl(liveryPath(photoName, photoIndex), {
      width: 640,
      quality: 72,
    }),
    logoSrcSet: ikSrcSet(liveryPath(photoName, photoIndex), 72),
    fit: "cover" as const,
  };
}

export const PROJECTS: ProjectClassDef[] = [
  {
    name: "Soar-N Racing Team",
    role: "Creative Design Officer",
    description:
      "Soar-N Racing Team is my home. I been with this team since I got back into sim racing at the start of 2021. We had so many adventures in Assetto Corsa Competizione, iRacing and Le Mans Ultimate. While I intially started designing liveries for our virtual endurace races, I now look after the teams visual identity. I manage the livery design team among other branding and creative tasks. I ensure that we look the best whether we win races or finish at the back",
    link: "https://soarn.co",
    year: "2021 — present",
    status: "Current",
    ...logoCardImg("soarnLogo.png"),
  },
  {
    name: "DTS Academy Esports",
    role: "Livery Creator & Manager",
    description:
      "I joined DTS Academy Esports Team in 2026. While I was just onboarded as a livery maker, I now manage the brand representation of sponsors and partners for the team, ensuring they are happy with how they are represented by us. I also manage team line ups for the endurance races in Le Mans Ulimate.",
    link: "https://dts-academy.vercel.app",
    year: "2026 — present",
    status: "Current",
    ...logoCardImg("dtsLogo.png"),
  },
  {
    name: "Jumpy Whale Design",
    role: "Freelance Livery Creator",
    description:
      "My livery design studio, and the reason for most of my late nights. I have been making sim racing liveries for drivers, teams and leagues for since 2021. I designed and shipped over 60 liveries since 2024 and many more over the years. I pride myself in creating the best looking liveries for my clients and seeing my work on track",
    link: "https://design.jumpywhale.com",
    logoImg: jwd,
    fit: "contain",
    year: "2021 — present",
    status: "Current",
  },
  {
    name: "Sim Racing Alliance",
    role: "Website Support & Commentator",
    description:
      "A community of 650+ racers that I've been part of for years. I keep the website running — sign-ups, results, the odd support ticket at midnight — and on race day I'm on the mic, and sometimes in charge of keeping track of the action on a track of up to fifty drivers a division.",
    link: "https://sra.gg",
    year: "2021 — present",
    status: "Current",
    ...logoCardImg("sraLogo.png"),
  },
  {
    name: "Sim Racing Enduro Planner",
    role: "Creator",
    description:
      "Fuel, stints, driver swaps and pit windows for long races, worked out properly. I built it for our own team after I decided that there is only so much a spreadsheet can do. Feel free to try it out for your own team. Its free!",
    link: "https://srep.jumpywhale.com",
    logoImg: jwsrep,
    fit: "contain",
    year: "2025",
    status: "Live",
  },
  {
    name: "University of Colorado Gaming & Esports",
    role: "Community and Events Manager",
    description:
      "I was the community and events manager for CU Boulder Gaming and Esports org. I was in charge of running a community of over 3000 gamers as well as put up convention style events once or twice a semester. I been running the community side of the org with the occasional game nights and help set up futher events for the community and sometimes esports when we are short staffed",
    year: "2020 — 2024",
    status: "Past",
    ...logoCardImg("cug.png"),
  },
  {
    name: "ACC Livery Cleaner",
    role: "Creator",
    description:
      "I built this simple tool with a help of a buddy to clean up liveries in Assetto Corsa Competizione.",
    link: "https://github.com/Larjun/acc_liveries_clean_up",
    year: "2024",
    status: "Live",
    ...liveryCardImg("mhr_acc_madhatter", 1),
  },
  {
    name: "Content Creation",
    role: "Creator",
    description:
      "I have a YouTube channel where I post my sim racing shenanigans. I been slowly pivoting to more real life content. I been also making content for Soar-N Racing Team",
    link: "https://www.youtube.com/@jumpywhale45",
    year: "present",
    status: "Current",
    icon: "youtube",
  },
];
