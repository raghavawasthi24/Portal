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
      },
    },
  },
  plugins: [],
};
