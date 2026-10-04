/**
 * All the About page copy. Written to sound like Arjun, not a CV — edit freely,
 * nothing here touches JSX.
 */

export const ABOUT_INTRO =
  "I'm Arjun. I love motorsport and racing, and I love making stuff look cool.";

export const ABOUT_PARAGRAPHS: string[] = [
  "I grew up obessing over motorsport and racing games since I was up on my two feet. It was only a matter of time before I fell deep into the rabbit hole.",
  "I grew up sketching fictional liveries for F1 cars since 2012 when I really got into motorsport. I modded in my first racing game livery into F1 2014. I built my first proper livery for a simr acing game in 2021 after we put together a team to endurance racing in Assetto Corsa Competizione. This kick started my journey as a livery designer, and I haven't looked back since.",
  "I, as part of Jumpy Whale Design, have designed over sixty liveries for drivers, teams and leagues across Assetto Corsa, Assetto Corsa Competizione, iRacing and Le Mans Ultimate. I also work on the creative side of sim racing, whether it is as a Creative Design Officer for Soar-N Racing Team, or commentator and website support for Sim Racing Alliance, a community that been a part of since 2023. I also have experience working with actual E-Sport teams such as CU Boulder Gaming and Esports back when I was a student, or DTS Academy Esports, that takes on top level competition in Le Mans Ultimate.",
];

export type SpecItem = { label: string; value: string };

export const COCKPIT_SPECS: SpecItem[] = [
  { label: "What I race", value: "Assetto Corsa · iRacing · Le Mans Ultimate" },
  {
    label: "Who I race with",
    value: "Soar-N Racing Team · DTS Academy Esports",
  },
  { label: "What tools I use", value: "Affinity Designer · Affinity Photo · OBS · DaVinci Resolve" },
  {
    label: "What I can do",
    value:
      "Create liveries · Create visual identity · Manage teams · Broadcast races",
  },
  {
    label: "Favourites",
    value:
      "Circuit of the Americas · All Oreca LMDHs ·Lewis Hamilton",
  },
  {
    label: "Away from the sim",
    value:
      "Software Developer",
  },
];

export type TimelineItem = { year: string; title: string; detail: string };

export const TIMELINE: TimelineItem[] = [
  {
    year: "2020",
    title: "Getting people together",
    detail:
      "Ran the community and events side of CU Boulder's gaming and esports group — three thousand people, far too many tournaments, and a lot of learning how to get a crowd excited about something.",
  },
  {
    year: "2021",
    title: "The year it all started",
    detail:
      "Took on the creative side at Soar-N, started taking livery commissions as Jumpy Whale Design, and joined Sim Racing Alliance. Everything I do now traces back to this one.",
  },
  {
    year: "2024",
    title: "Building the missing bits",
    detail:
      "Wrote the ACC livery cleaner for myself, then started properly on a stint planner after one too many endurance races managed from a spreadsheet.",
  },
  {
    year: "2025",
    title: "Putting it all online",
    detail:
      "Finally gave the liveries a proper gallery and the planner a real home, both under jumpywhale.com.",
  },
  {
    year: "2026",
    title: "A full grid in LMU",
    detail:
      "Joined DTS Academy as their livery creator and manager — twenty drivers at the sharp end of Le Mans Ultimate, all of them in cars I get to paint.",
  },
];
