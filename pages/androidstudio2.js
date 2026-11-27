// pages/androidstudio2.js (also /android/calculator) — data lives in data/androidApps.js
import AndroidAppPage from "@/components/case/AndroidAppPage";
import { getAndroidApp } from "@/data/androidApps";

export default function AndroidStudio2() {
  return <AndroidAppPage app={getAndroidApp("calculator")} />;
}
