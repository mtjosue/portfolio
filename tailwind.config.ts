import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["ui-sans-serif", "system-ui", ...fontFamily.sans],
      //   serif: ["ui-serif", "Georgia"],
      //   mono: ["ui-monospace", "SFMono-Regular"],
      //   display: ["Oswald"],
      //   body: ['"Open Sans"'],
      // },
      sans: ["var(--font-sans)", ...fontFamily.sans],
    },
  },
  plugins: [],
} satisfies Config;
