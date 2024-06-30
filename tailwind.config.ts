import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      colors: {},
      fontFamily: {
        HindSiliguri: '"Hind Siliguri", sans-serif',
      },
    },
  },
};
