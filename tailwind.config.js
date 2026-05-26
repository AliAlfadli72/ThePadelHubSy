export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CCFF00",
        dark: "#2C3E50",
        glass: "rgba(255, 255, 255, 0.7)",
      },
      boxShadow: {
        neon: "0 0 15px rgba(204, 255, 0, 0.4)",
        "neon-strong": "0 0 25px rgba(204, 255, 0, 0.6)",
        glass: "0 8px 32px 0 rgba(44, 62, 80, 0.06)",
        "glass-inset": "inset 0 0 0 1px rgba(255, 255, 255, 0.5)",
      }
    }
  },
  plugins: []
}