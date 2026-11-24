// components/AndroidAppPage.js — compact PROJECT PLAN for one Android app:
// Context → Development (features, stack, screenshots) → What I'd improve.
import {
  CaseHero,
  CasePage,
  CasePlan,
  Cards,
  H3,
  ImagePlaceholder,
  P,
  Placeholder,
  Screens,
  TextPanel,
  Todo,
} from "@/components/case";

export default function AndroidAppPage({ app }) {
  const sections = {
    context: (
      <TextPanel>
        <P>{app.description}</P>
        <P>
          <Placeholder>Study project? Course name and your role.</Placeholder>
        </P>
      </TextPanel>
    ),
    development: (
      <>
        <Cards
          cols={2}
          items={[
            { title: "Key Features", items: app.features },
            { title: "Technology Stack", items: app.stack },
          ]}
        />
        <H3>Screenshots</H3>
        {app.images.length > 0 ? (
          <Screens
            images={app.images.map((src, i) => ({
              src,
              alt: `${app.title} screenshot ${i + 1}`,
            }))}
            label={`${app.title} screenshots`}
            phone
          />
        ) : (
          <ImagePlaceholder>[ADD SCREENSHOT]</ImagePlaceholder>
        )}
        <P>
          GitHub repository:{" "}
          <Placeholder>
            add the link (the old button pointed to github.com)
          </Placeholder>
        </P>
      </>
    ),
    learned: <Todo>What you learned / what you would improve.</Todo>,
  };

  return (
    <CasePage wide={false}>
      <CaseHero
        back={{ href: "/android_studio", label: "← Android apps" }}
        eyebrow={`Study · Android · ${app.language}`}
        title={app.title}
        result={app.short}
        snapshot={[
          { label: "Role", value: "Developer" },
          { label: "Timeline", value: <Placeholder>WEEKS</Placeholder> },
          { label: "Stack", value: `Android Studio (${app.language})` },
          { label: "Status", value: "Study project" },
        ]}
      />
      <CasePlan sections={sections} nav={false} />
    </CasePage>
  );
}
