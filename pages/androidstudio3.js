// pages/androidstudio3.js (also /android/currency-converter) — data lives in data/androidApps.js
import AndroidAppPage from "@/components/AndroidAppPage";
import { getAndroidApp } from "@/data/androidApps";

export default function AndroidStudio3() {
  return <AndroidAppPage app={getAndroidApp("currency-converter")} />;
}
