// pages/project3.js — Choose your musician (Music Portal)
// PROJECT PLAN order. All old text, features and 4 screenshots are kept.
// project31.png is an exact copy of project3.png, so it is not used.
import Image from "next/image";

import {
  BulletList,
  CaseHero,
  CasePage,
  CasePlan,
  Cards,
  H3,
  P,
  Placeholder,
  Screens,
  TextPanel,
  Todo,
} from "@/components/case";

const repoUrl = "https://github.com/kyrlyama/music-site";

const screens = [
  "/project3.png",
  "/project32.png",
  "/project33.png",
  "/project34.png",
].map((src, i) => ({ src, alt: `Music Portal screenshot ${i + 1}` }));

const snapshot = [
  {
    label: "Role",
    value: "Frontend development, search UI, dynamic data flow",
  },
  { label: "Timeline", value: <Placeholder>MONTHS</Placeholder> },
  { label: "Stack", value: "HTML, CSS, Bootstrap, JavaScript, PHP, AJAX" },
  { label: "Status", value: "Code on GitHub" },
];

const features = [
  {
    title: "Musician search",
    text: "Users can search for musicians by year, genre, and region to discover relevant artists.",
  },
  {
    title: "Artist details",
    text: "The interface shows artist information such as biography, genre, country, albums, awards, and top tracks.",
  },
  {
    title: "Login system",
    text: "The project includes registration and login functionality for a more personalized user experience.",
  },
  {
    title: "Dynamic data",
    text: "Artist information is loaded dynamically through requests instead of being shown as only static content.",
  },
  {
    title: "Adaptive interface",
    text: "The layout is designed to work across different screen sizes and keep content readable.",
  },
  {
    title: "Music discovery flow",
    text: "The project helps users explore new artists and learn more about musicians they already like.",
  },
];

const technicalFocus = [
  "Built the frontend structure for a music discovery web application.",
  "Created search and filtering UI for year, genre, and region.",
  "Displayed dynamic artist data including biography, albums, awards, and tracks.",
  "Worked with PHP/database queries and AJAX-style data loading.",
  "Implemented responsive layout and Bootstrap-based UI components.",
  "Added registration/login flow for personalized functionality.",
];

const improvements = [
  "Improve search result states for empty and loading results.",
  "Add favorite artists or saved tracks for logged-in users.",
  "Improve accessibility for forms and interactive controls.",
  "Add stronger validation for registration and login forms.",
  "Refactor artist data into a clearer API structure.",
  "Improve mobile layout for long artist descriptions and tables.",
];

export default function Project3() {
  const sections = {
    context: (
      <>
        <Cards
          cols={2}
          items={[
            { label: "Project type", title: "Music discovery web application" },
            {
              label: "Focus",
              title: "Filtering, artist details, login flow, API/database data",
            },
          ]}
        />
        <Todo>Who was this for (client / course)? Your role in one line.</Todo>
      </>
    ),
    problem: <Todo>What problem did this site solve?</Todo>,
    goal: (
      <TextPanel>
        The goal of this project was to build a music-focused web application
        where users can discover artists and explore structured information
        about them. The website combines search, filtering, dynamic data
        loading, artist detail pages, and account-related functionality.
      </TextPanel>
    ),
    research: (
      <Todo>Any research? (who the users were, what you looked at)</Todo>
    ),
    decisions: <Todo>One key decision: chose X over Y, why, cost.</Todo>,
    design: <Todo>Layout / design choices (screens, colors, components).</Todo>,
    development: (
      <>
        <H3>Key features</H3>
        <Cards items={features} />
        <H3>Technical implementation</H3>
        <TextPanel>
          <P>
            I focused on building the frontend interface and user flow for music
            discovery. The project includes dynamic data rendering, search and
            filtering controls, Bootstrap styling, and integration with backend
            logic through PHP/database queries.
          </P>
          <BulletList items={technicalFocus} />
        </TextPanel>
        <H3>Screenshots</H3>
        <P>
          Main screens showing the search interface, artist information, and
          music discovery flow.
        </P>
        <Screens images={screens} label="Music Portal screenshots" />
      </>
    ),
    testing: <Todo>How did you test it? What changed?</Todo>,
    result: (
      <p>
        <Placeholder>
          A real outcome: grade, client feedback, or usage.
        </Placeholder>
      </p>
    ),
    hardest: (
      <Todo>The hardest problem in this project and how you solved it.</Todo>
    ),
    learned: (
      <TextPanel>
        <P>What I would improve next:</P>
        <BulletList items={improvements} />
      </TextPanel>
    ),
  };

  return (
    <CasePage>
      <CaseHero
        back={{ href: "/websites", label: "← Websites" }}
        eyebrow="Freelance · Frontend project"
        title="Music Portal — Artist Discovery Website"
        result="A music discovery web application that helps users find musicians by year, genre, and region. The project presents artist details, biographies, albums, awards, and top tracks in a structured and searchable interface."
        snapshot={snapshot}
        links={[{ href: repoUrl, label: "GitHub repository ↗" }]}
        media={
          <Image
            src="/project3.png"
            alt="Music Portal project homepage preview"
            width={3832}
            height={2083}
            sizes="(max-width: 1240px) 100vw, 1240px"
            priority
          />
        }
      />
      <CasePlan sections={sections} />
    </CasePage>
  );
}
