import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      compact: "360px",
      medium: "600px",
      expanded1: "1280px",
      expanded2: "1440px",
    },
    colors: {
      primary: "#80d997",
      onPrimary: "#003919",
      primaryContainer: "#005228",
      onPrimaryContainer: "#9cf6b2",
      primaryFixed: "#9cf6b2",
      onPrimaryFixed: "#00210c",
      primaryFixedDim: "#80d997",
      onPrimaryFixedVariant: "#005228",
      secondary: "#b7ccb7",
      onSecondary: "#223526",
      secondaryContainer: "#394b3c",
      onSecondaryContainer: "#d2e8d3",
      secondaryFixed: "#d2e8d3",
      onSecondaryFixed: "#0e1f12",
      secondaryFixedDim: "#b7ccb7",
      onSecondaryFixedVariant: "#394b3c",
      tertiary: "#a2ced9",
      onTertiary: "#01363f",
      tertiaryContainer: "#204d56",
      onTertiaryContainer: "#bdeaf5",
      tertiaryFixed: "#bdeaf5",
      onTertiaryFixed: "#001f25",
      tertiaryFixedDim: "#a2ced9",
      onTertiaryFixedVariant: "#204d56",
      error: "#ffb4ab",
      errorContainer: "#93000a",
      onError: "#690005",
      onErrorContainer: "#ffdad6",
      background: "#191c19",
      onBackground: "#e2e3de",
      outline: "#8b938a",
      inverseOnSurface: "#191c19",
      inverseSurface: "#e2e3de",
      inversePrimary: "#046d37",
      shadow: "#000000",
      surfaceTint: "#80d997",
      outlineVariant: "#414941",
      scrim: "#000000",
      surface: "#111411",
      onSurface: "#c5c7c2",
      surfaceVariant: "#414941",
      onSurfaceVariant: "#c1c9bf",
      surfaceContainerHighest: "#333532",
      surfaceContainerHigh: "#282b27",
      surfaceContainer: "#1d201d",
      surfaceContainerLow: "#191c19",
      surfaceContainerLowest: "#0c0f0c",
      surfaceDim: "#111411",
      surfaceBright: "#373a36",
      gold: "#AF9500",
      silver: "#D7D7D7",
      bronze: "#6A3805",
    },
    animation: {
      marquee: "marquee 5s linear infinite",
    },
    keyframes: {
      marquee: {
        "0%": {
          transform: "translateX(100%)",
        },
        "33%": {
          transform: "translateX(0%)",
        },
        "66%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(-100%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
