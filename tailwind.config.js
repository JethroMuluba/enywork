/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
      "*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
        colors: {
          border: "hsl(var(--border))",
          input: "hsl(var(--input))",
          ring: "hsl(var(--ring))",
          background: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: {
            DEFAULT: "#E10919",
            foreground: "#FFFFFF",
            gradient: "linear-gradient(90deg, #320001 -9.03%, #BD2222 105.93%)",
          },
          secondary: {
            DEFAULT: "#1C2736",
            foreground: "#FFFFFF",
            light: "#3B4E6A",
          },
          destructive: {
            DEFAULT: "hsl(var(--destructive))",
            foreground: "hsl(var(--destructive-foreground))",
          },
          muted: {
            DEFAULT: "hsl(var(--muted))",
            foreground: "hsl(var(--muted-foreground))",
          },
          accent: {
            DEFAULT: "hsl(var(--accent))",
            foreground: "hsl(var(--accent-foreground))",
          },
          popover: {
            DEFAULT: "hsl(var(--popover))",
            foreground: "hsl(var(--popover-foreground))",
          },
          card: {
            DEFAULT: "hsl(var(--card))",
            foreground: "hsl(var(--card-foreground))",
          },
          bluesky: "#279DD9",
          dark: {
            DEFAULT: "#1A1A1A",
            secondary: "#636262",
          },
          light: {
            DEFAULT: "#FFFFFF",
            secondary: "#F2F2F2",
            tertiary: "#E5E5E5",
            quaternary: "#A1A1AA",
          },
        },
        borderRadius: {
          lg: "var(--radius)",
          md: "calc(var(--radius) - 2px)",
          sm: "calc(var(--radius) - 4px)",
        },
        keyframes: {
          "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
        fontFamily: {
          "made-infinity": ["MADE INFINITY PERSONAL USE", "sans-serif"],
          "bebas-neue": ["Bebas Neue", "sans-serif"],
        },
        backgroundImage: {
          "hero-pattern": "url('/images/eny-motif-hero.png')",
          "hero-gradient": "linear-gradient(90deg, #320001 -9.03%, #BD2222 105.93%)",
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
  
  