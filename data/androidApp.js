// data/androidApps.js — one place for the 3 Android study apps.
// Used by /android_studio (cards) and /androidstudio1–3 (app pages).
export const androidApps = [
  {
    slug: "translator",
    href: "/androidstudio1",
    title: "Translator — Android Studio App",
    short:
      "Multilingual translator (RU/EN/EE/DE) with history, Material Design UI and simple cloud sync. Focus on clean UX and fast input.",
    description:
      "Translator is an Android application that allows users to translate text between Russian, English, Estonian, and German. It features a clean Material Design interface, translation history, and simple cloud synchronization.",
    language: "Java",
    features: [
      "Multilingual: translate between 4 languages.",
      "History: view and clear past translations.",
      "Cloud sync: settings and history synchronized across devices.",
      "Material Design: clean and modern UI.",
      "MVC architecture: structured project design.",
    ],
    stack: [
      "Android Studio (Java)",
      "Material Design",
      "Lingva Translate API",
      "Cloud storage",
    ],
    images: [
      "/androidstudio1.png",
      "/androidstudio12.png",
      "/androidstudio13.png",
    ],
  },
  {
    slug: "calculator",
    href: "/androidstudio2",
    title: "Calculator — Android Studio App",
    short:
      "Mobile calculator with basic operations, polished layout and responsive keypad. Built with Kotlin and Material components.",
    description:
      "A mobile calculator with basic operations, polished layout and responsive keypad. Built with Kotlin and Material components with attention to error handling and accessibility.",
    language: "Kotlin",
    features: [
      "Basic arithmetic operations",
      "Responsive keypad and high-contrast UI",
      "Input validation and clear states",
      "Material components, theming",
    ],
    stack: ["Android Studio (Kotlin)", "Material Design Components"],
    images: [
      "/androidstudio2.png",
      "/androidstudio22.png",
      "/androidstudio23.png",
      "/androidstudio24.png",
    ],
  },
  {
    slug: "currency-converter",
    href: "/androidstudio3",
    title: "EUR → USD — Currency Converter",
    short:
      "Simple currency converter demonstrating input validation, formatting and instant conversion. Lightweight UI and clear states.",
    description:
      "Lightweight currency converter demonstrating formatted input, instant conversion and simple state management. Compact UI with clear validation and error feedback.",
    language: "Kotlin",
    features: [
      "Real-time conversion",
      "Locale-aware formatting",
      "Input validation",
      "Clean Material layout",
    ],
    stack: ["Android Studio (Kotlin)", "Material Design"],
    images: [], // [ADD SCREENSHOT]
  },
];

export const getAndroidApp = (slug) => androidApps.find((a) => a.slug === slug);
