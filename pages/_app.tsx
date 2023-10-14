import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

const mindsDBTheme = {
  colors: {
    zinc50: "#FAFAFA",
    zinc100: "#D4D4D8",
    zinc200: "#E4E4E7",
    zinc500: "#71717A",
    zinc600: "#52525B",
    zinc950: "#09090B",
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
