// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,jsx,ts,tsx}",
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         brandBlack: "#000000",
//         brandGray: "#1a1a1a",
//         // Gradient colors from your logo
//         qRed: "#e63946",
//         qOrange: "#f4a261",
//         qYellow: "#e9c46a",
//         qGreen: "#2a9d8f",
//         qBlue: "#264653",
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Defining theme colors based on the "HelloQ" rainbow logo rings
        qRed: "#ff3b30",
        qOrange: "#ff9500",
        qYellow: "#ffcc00",
        qGreen: "#34c759",
        qBlue: "#007aff",
        qPurple: "#af52de",
      },
    },
  },
  plugins: [],
}