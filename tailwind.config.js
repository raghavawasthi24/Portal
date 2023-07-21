/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saveColor: "#4CA64C",
        submitColor: "#DD3130",
        reviewColor: "#6251A9",
        quesGrad1: "#D7C8FC",
        quesGrad2: "#D5E5FA",
        timerGrad1: "#D6C7FC",
        timerGrad2: "#D4F0F9",
        testHeadGrad1: "rgba(234, 251, 254, 0.75)",
        testHeadGrad2: "rgba(210, 225, 255, 0.75)",
        testHeadGrad3: "rgba(236, 228, 254, 0.75)",
        testFooterGrad1: "rgba(217, 217, 247, 0.75)",
        testFooterGrad2: "rgba(213, 240, 249, 0.75)",
        dropdownGrad1: "rgba(165, 242, 255, 0.5)",
        dropdownGrad2:"rgba(33, 83, 249, 0.23)",
        dropdownGrad3: "rgba(167, 185, 244, 0.56)",
        leaderboardColor: "rgba(84, 59, 160, 1)"
      },
    },
  },
  plugins: [],
};
