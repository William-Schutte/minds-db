import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const mindsDBTheme = {
  colors: {
    zinc100: "#d4d4d8",
    zinc200: "#E4E4E7",
    zinc500: "#71717A",
    zinc600: "#52525B",
    zinc950: "#52525B",
  },
  cool: "dddddd",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={mindsDBTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
