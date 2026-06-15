import jwsrep from "./assets/jwsrep.png";
import jwd from "./assets/jwd.png";

export type ProjectClassDef = {
  name: string;
  description: string;
  link: string;
  logoImg: string;
  splashIng?: string;
};

export const PROJECTS: ProjectClassDef[] = [
  {
    name: "Simracing Enduro Planner",
    description:
      "A web app to help simracers plan their endurance races stints and strategies. It supports multiple games and has a built in stint planner and fuel calculator.",
    link: "https://srep.jumpywhale.com",
    logoImg: jwsrep,
  },
  {
    name: "Jumpy Whale Design",
    description:
      "Simracing Liveries I designed for myself, my team and my clients. Featuring liveries made for Soar-N Racing Team, Madhaus Racing and more.",
    link: "https://design.jumpywhale.com",
    logoImg: jwd,
  },
];
