import { light } from "@mui/material/styles/createPalette";

// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
    1100: "#0b0b0b",
    1200: "#0b0b0c"
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45", // manually adjusted
    700: "#141937",
    800: "#0d1025",
    900: "#070812"
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14"
  },
  third: {
    50: "#a2e0cc", // manually adjusted
    100: "#8adac0",
    200: "#6cd8b5",
    300: "#5bd7ae",
    400: "#43d5a5",
    500: "#36d5a1",
    600: "#14d596",
    700: "#0de59f",
    800: "#0af2a7",
    900: "#00ffad"
  }
};

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400]
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300]
            },
            third: {
              ...tokensDark.third,
              main: tokensDark.third[300]
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500]
            },
            background: {
              default: tokensDark.grey[1100],
              alt: tokensDark.grey[1100]
            }
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100]
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700]
            },
            third: {
              ...tokensLight.third,
              main: tokensDark.third[500],
              light: tokensDark.third[700]
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500]
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50]
            }
          })
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14
      }
    }
  };
};
