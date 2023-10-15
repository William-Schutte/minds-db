import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";

import store from "@/redux/store";

import "@/styles/globals.css";

// Set theme colors so that we can reference them throughout the app
const mindsDBTheme = {
  colors: {
    zinc50: "#FAFAFA",
    zinc100: "#D4D4D8",
    zinc200: "#E4E4E7",
    zinc500: "#71717A",
    zinc600: "#52525B",
    zinc950: "#09090B",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={mindsDBTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
