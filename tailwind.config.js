module.exports = {
  theme: {
    extend: {
      spacing: {
        "80": "20rem",
        "108": "27rem"
      },
      borderWidth: {
        "14": "14px"
      }
    },
    container: {
      padding: "1rem"
    },
    linearGradients: {
      directions: {
        nine: "90deg"
      },
      colors: {
        one: ["#3f346f", "#1891bd"]
      }
    },
    colors: {
      background: {
        primary: "var(--bg-background-primary)",
        secondary: "var(--bg-background-secondary)",
        tertiary: "var(--bg-background-tertiary)",

        form: "var(--bg-background-form)"
      },

      copy: {
        primary: "var(--text-copy-primary)",
        secondary: "var(--text-copy-hover)"
      },

      "border-color": {
        primary: "var(--border-border-color-primary)"
      },

      transparent: "transparent",

      black: "#000",
      white: "#fff",
      giftbox: "#003082",
      accent: "#D65108",
      danger: "#C03221",
      alert: "#FF9F1C",
      one: "#3f346f",
      two: "#1891bd",

      blue: {
        500: "#ffcc00",
        700: "#ff0055"
      },

      green: {
        100: "#f0fff4",
        200: "#c6f6d5",
        300: "#9ae6b4",
        400: "#68d391",
        500: "#48bb78",
        600: "#38a169",
        700: "#2f855a",
        800: "#276749",
        900: "#22543d"
      },

      gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c"
      }
    },
    fontFamily: {
      sans: ["montserrat", "'Open Sans'", "Roboto", "sans-serif"],
      serif: ["Georgia", "Cambria", "'Times New Roman'", "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    }
  },
  variants: {
    // Some useful comment
  },
  plugins: [
    // Some useful comment
    require("tailwindcss-gradients")()
  ]
};
