// components/Layout.js
import { useRouter } from "next/router";

const EXCLUDE = ["/", "/contacts"]; // страницы без общего фона/декора

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const apply = !EXCLUDE.includes(pathname);

  return (
    <div className={apply ? "site-bg" : ""}>
      {apply && (
        <>
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
        </>
      )}
      {/* отступ, чтобы контент не заезжал под fixed navbar */}
      <main className={apply ? "site-container" : ""} style={{ paddingTop: 64 }}>
        {children}
      </main>
    </div>
  );
}
