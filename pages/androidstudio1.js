// pages/androidstudio1.js (also /android/translator) — data lives in data/androidApps.js
import AndroidAppPage from "@/components/case/AndroidAppPage";
import { getAndroidApp } from "@/data/androidApps";

export default function AndroidStudio1() {
  return <AndroidAppPage app={getAndroidApp("translator")} />;
}
