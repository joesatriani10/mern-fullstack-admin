export const tokensDark = {
  grey: {
    0: "#181a1b",
    10: "#202325",
    50: "#2a2d30",
    100: "#35383c",
    200: "#404448",
    300: "#4c5055",
    400: "#585d63",
    500: "#666b71",
    600: "#767c83",
    700: "#888e96",
    800: "#9da2ab",
    900: "#b3b8c0",
  },
  primary: {
    100: "#0a66a0",
    200: "#0d75ac",
    300: "#0d87c5",
    400: "#139ade",
    500: "#15a6f0",
    600: "#62a0ea",
    700: "#99c1f1",
    800: "#bad7ff",
    900: "#d3e8ff",
  },
  secondary: {
    50: "#222a35",
    100: "#273141",
    200: "#2e3b4e",
    300: "#36465c",
    400: "#3f516a",
    500: "#495c78",
    600: "#546885",
    700: "#607493",
    800: "#6c809d",
    900: "#7a8eac",
  },
};

export const tokensLight = {
  grey: {
    0: "#f5f7fa",
    10: "#f8f8f8",
    50: "#e4e8ee",
    100: "#d1d1d1",
    200: "#c0bfbc",
    300: "#9a9996",
    400: "#77767b",
    500: "#5e5c64",
    600: "#3d3846",
    700: "#241f31",
    800: "#141414",
    900: "#000000",
  },
  primary: {
    100: "#eaf4ff",
    200: "#d3e8ff",
    300: "#bad7ff",
    400: "#99c1f1",
    500: "#62a0ea",
    600: "#15a6f0",
    700: "#139ade",
    800: "#0d87c5",
    900: "#0b75ac",
  },
  secondary: {
    50: "#e4e8ee",
    100: "#cdd5dd",
    200: "#b8c3cc",
    300: "#a3b1bb",
    400: "#8f9ea9",
    500: "#7c8d99",
    600: "#6a7c88",
    700: "#586b77",
    800: "#475a66",
    900: "#364a55",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[500],
              light: tokensDark.primary[300],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[400],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
            navbar: {
              background: tokensDark.grey[50],
              border: tokensDark.grey[100],
              icon: tokensDark.primary[300],
              text: tokensDark.primary[700],
            },
          }
        : {
            primary: {
              ...tokensLight.primary,
              main: tokensLight.primary[600],
              light: tokensLight.primary[300],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensLight.secondary[400],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensLight.grey[500],
            },
            background: {
              default: tokensLight.grey[0],
              alt: tokensLight.grey[50],
            },
            navbar: {
              background: tokensLight.primary[100],
              border: tokensLight.grey[200],
              icon: tokensLight.primary[700],
              text: tokensLight.primary[900],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
