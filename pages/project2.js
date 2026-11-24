// pages/project2.js — Welcome to the world space! (Space website)
// PROJECT PLAN order. All old text, features and 6 screenshots are kept.
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

const repoUrl = "https://github.com/kyrlyama/space-site";

const screens = [
  "/project2.png",
  "/project21.png",
  "/project22.png",
  "/project23.png",
  "/project24.png",
  "/project25.png",
].map((src, i) => ({ src, alt: `Space website screenshot ${i + 1}` }));

const snapshot = [
  {
    label: "Role",
    value: "Frontend development, responsive layout, JavaScript quiz logic",
  },
  { label: "Timeline", value: <Placeholder>MONTHS</Placeholder> },
  { label: "Stack", value: "HTML, CSS, Bootstrap, JavaScript" },
  { label: "Status", value: "Code on GitHub" },
];

const features = [
  {
    title: "Home page",
    text: "Introduces users to the space theme and guides them toward learning about planets.",
  },
  {
    title: "Planet pages",
    text: "Each planet has its own page with a description, image, and characteristics table.",
  },
  {
    title: "Interactive quiz",
    text: "Users can test their knowledge about the order of planets in the Solar System.",
  },
  {
    title: "Dynamic results",
    text: "JavaScript checks answers and highlights correct and incorrect responses.",
  },
  {
    title: "Structured tables",
    text: "Planet information is presented in clear tables to make comparison easier.",
  },
  {
    title: "Responsive design",
    text: "The layout adapts to different screen sizes and keeps educational content readable.",
  },
];

const technicalFocus = [
  "Built a multi-page educational website structure with semantic HTML.",
  "Created responsive layouts with CSS and Bootstrap.",
  "Implemented JavaScript quiz logic with answer checking and visual feedback.",
  "Designed planet information pages with images, tables, and readable content blocks.",
  "Used gradients, hover states, and interactive effects to support the space theme.",
];

const improvements = [
  "Add more advanced quiz questions and score history.",
  "Improve accessibility for keyboard navigation and screen readers.",
  "Add animations for planet transitions and page sections.",
  "Use structured JSON data for planets instead of static content.",
  "Add a search or filter feature for planet facts.",
];

export default function Project2() {
  const sections = {
    context: (
      <>
        <Cards
          cols={2}
          items={[
            { label: "Project type", title: "Educational interactive website" },
            {
              label: "Focus",
              title: "Planet pages, quiz validation, tables, visual learning",
            },
          ]}
        />
        <Todo>Who was this for (client / course)? Your role in one line.</Todo>
      </>
    ),
    problem: <Todo>What problem did this site solve?</Todo>,
    goal: (
      <TextPanel>
        The goal of this project was to create a simple but engaging educational
        website where users can explore information about the Solar System. The
        website combines static informational content with interactive quiz
        functionality, making the learning experience more active and memorable.
      </TextPanel>
    ),
    research: (
      <Todo>Any research? (who the users were, what you looked at)</Todo>
    ),
    decisions: <Todo>One key decision: chose X over Y, why, cost.</Todo>,
    design: (
      <TextPanel>
        <P>
          The design uses a space-themed visual style with gradients, readable
          tables, and interactive states.
        </P>
      </TextPanel>
    ),
    development: (
      <>
        <H3>Key features</H3>
        <Cards items={features} />
        <H3>Technical implementation</H3>
        <TextPanel>
          <P>
            I focused on building a clear frontend structure, responsive
            educational pages, and JavaScript logic for the interactive quiz.
            The design uses a space-themed visual style with gradients, readable
            tables, and interactive states.
          </P>
          <BulletList items={technicalFocus} />
        </TextPanel>
        <H3>Screenshots</H3>
        <P>
          Main screens showing the homepage, planet pages, quiz flow, and
          educational content structure.
        </P>
        <Screens images={screens} label="Space website screenshots" />
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
        title="Space Website — Educational Planet Explorer"
        result="An educational website about space and the planets of the Solar System. The project combines informational pages, planet characteristics, visual content, and an interactive quiz to help users learn in a more engaging way."
        snapshot={snapshot}
        links={[{ href: repoUrl, label: "GitHub repository ↗" }]}
        media={
          <Image
            src="/project2.png"
            alt="Space website homepage preview"
            width={3664}
            height={1982}
            sizes="(max-width: 1240px) 100vw, 1240px"
            priority
          />
        }
      />
      <CasePlan sections={sections} />
    </CasePage>
  );
}
