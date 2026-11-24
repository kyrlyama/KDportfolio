// pages/uiux/shop-redesign.js — Likefon logo & brand refresh.
// PROJECT PLAN order. Logo versions 1–3 moved to "Testing and iterations";
// before/after moved to "Result". Every old image and text is kept.
import Image from "next/image";
import Link from "next/link";

import {
  BulletList,
  CaseHero,
  CasePage,
  CasePlan,
  DecisionCard,
  Gallery,
  P,
  Placeholder,
  TextPanel,
  caseStyles as styles,
} from "@/components/case";

const snapshot = [
  { label: "Role", value: "Brand designer · Solo" },
  { label: "Timeline", value: <Placeholder>MONTHS</Placeholder> },
  { label: "Stack", value: "Affinity Designer" },
  { label: "Status", value: "Approved, used in both stores" },
];

const logoVersions = [
  {
    src: "/uiux/redesign/Logo_likefon_1.png",
    alt: "Logo Likefon concept 1",
    title: "Version 1",
  },
  {
    src: "/uiux/redesign/Logo_likefon_2.png",
    alt: "Logo Likefon concept 2",
    title: "Version 2",
  },
  {
    src: "/uiux/redesign/logo_likefon_3.png",
    alt: "Logo Likefon concept 3",
    title: "Version 3",
  },
];

const outcome = [
  "A more readable mark increased clarity and category association.",
  "Testing at small sizes helped keep the logo scalable and consistent.",
  "Mockups validated how the identity performs in real retail contexts.",
];

export default function ShopRedesign() {
  const sections = {
    context: (
      <TextPanel>
        <BulletList
          items={[
            <>
              <strong>Store type:</strong> local retail shop.
            </>,
            <>
              <strong>What it sells:</strong> phone accessories and headsets.
            </>,
            <>
              <strong>Competitive context:</strong> strong competition with
              Click, Evelatus, and OnOff.
            </>,
          ]}
        />
        <P>
          Part of the <Link href="/projects/likefon">Likefon project</Link>:
          brand refresh → UX case study → website.
        </P>
      </TextPanel>
    ),

    problem: (
      <>
        <TextPanel>
          <P>
            <strong>UX / Visual audit.</strong> The original mark was too
            abstract and didn’t communicate the store’s category well. It also
            lost clarity at small sizes, reducing memorability and trust.
          </P>
        </TextPanel>
      </>
    ),

    goal: (
      <TextPanel>
        Create a clearer and more recognisable brand mark that is readable at
        distance, scalable for print and digital use, and visually connected to
        the store’s category.
      </TextPanel>
    ),

    research: (
      <TextPanel>
        <P>
          The refresh was based on competitor and customer research in a
          competitive mall environment (Click, Evelatus, OnOff).
        </P>
        <P>
          <Placeholder>
            What did you look at in competitors’ logos? What did customers say?
          </Placeholder>
        </P>
      </TextPanel>
    ),

    decisions: (
      <div className={styles.decisions}>
        <DecisionCard
          chose={<Placeholder>X</Placeholder>}
          over={<Placeholder>Y</Placeholder>}
          why={<Placeholder>why</Placeholder>}
          cost={<Placeholder>cost</Placeholder>}
        />
      </div>
    ),

    design: (
      <>
        <Gallery
          cols={1}
          title="Mockups"
          images={[
            {
              src: "/uiux/redesign/like-brand-mockup.png",
              alt: "Like brand identity mockup",
              title: "Like brand identity mockup",
            },
          ]}
        />
      </>
    ),

    testing: (
      <>
        <P>
          Logo design: three versions of the new mark. Testing at small sizes
          helped keep the logo scalable and consistent.
        </P>
        <Gallery cols={3} title="Logo versions" images={logoVersions} />
        <TextPanel>
          <P>
            <Placeholder>Which version won and why?</Placeholder>
          </P>
        </TextPanel>
      </>
    ),

    result: (
      <>
        <div className={styles.compare}>
          <Gallery
            cols={1}
            images={[
              {
                src: "/uiux/redesign/beforeredesign.jpg",
                alt: "Before redesign",
                title: "Before",
                text: "Abstract mark with low association to the store’s products and weak scalability.",
              },
            ]}
          />
          <Gallery
            cols={1}
            images={[
              {
                src: "/uiux/redesign/like-store-final.png",
                alt: "Like store after redesign",
                title: "After",
                text: "The redesigned identity is now visible in the real retail environment and works clearly at storefront scale.",
              },
            ]}
          />
        </div>
        <p>Approved by management and used in both stores.</p>
      </>
    ),

    hardest: (
      <TextPanel>
        <P>
          <Placeholder>
            The hardest problem in this project and how you solved it.
          </Placeholder>
        </P>
      </TextPanel>
    ),

    learned: (
      <TextPanel>
        <P>Outcome &amp; learnings:</P>
        <BulletList items={outcome} />
      </TextPanel>
    ),
  };

  return (
    <CasePage>
      <CaseHero
        back={{ href: "/projects/likefon", label: "← Likefon project" }}
        eyebrow="Commercial · Visual identity update · Affinity Designer"
        title="Logo Redesign for Like"
        result="Refreshing a local phone accessories retailer’s identity to improve clarity, trust, and visibility in a competitive mall environment."
        snapshot={snapshot}
        links={[{ href: "/uiux", label: "← Back to UI/UX" }]}
        media={
          <Image
            src="/uiux/redesign/like-store-final.png"
            alt="Like store after the logo redesign"
            width={1448}
            height={1086}
            sizes="(max-width: 1240px) 100vw, 1240px"
            priority
          />
        }
      />
      <CasePlan sections={sections} />
    </CasePage>
  );
}
