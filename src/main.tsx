import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  MantineProvider,
  createTheme,
  type CSSVariablesResolver,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { BrowserRouter } from "react-router-dom";
import SmoothScroll from "./layout/SmoothScroll";
import "@fontsource/blinker/400.css";
import "@fontsource/blinker/600.css";
import "@fontsource/blinker/700.css";
import "@fontsource/michroma/400.css";
import "./index.css";
import App from "./App.tsx";
import {
  TEAL_RAMP,
  PAGE_BG_LIGHT,
  PAGE_BG_DARK,
  CARD_BG_LIGHT,
  CARD_BG_DARK,
  CARD_BORDER_LIGHT,
  CARD_BORDER_DARK,
} from "./theme";

const theme = createTheme({
  primaryColor: "teal",
  colors: { teal: TEAL_RAMP },
  fontFamily: "'Blinker', system-ui, sans-serif",
  headings: {
    fontFamily: "'Michroma', system-ui, sans-serif",
    // Michroma ships a single weight; asking for bold only triggers faux-bolding.
    fontWeight: "400",
  },
  components: {
    Card: {
      styles: {
        root: {
          backgroundColor: "var(--card-bg)",
          borderColor: "var(--card-border)",
        },
      },
    },
  },
});

const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {},
  light: {
    "--mantine-color-body": PAGE_BG_LIGHT,
    "--card-bg": CARD_BG_LIGHT,
    "--card-border": CARD_BORDER_LIGHT,
  },
  dark: {
    "--mantine-color-body": PAGE_BG_DARK,
    "--card-bg": CARD_BG_DARK,
    "--card-border": CARD_BORDER_DARK,
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      theme={theme}
      defaultColorScheme="auto"
      cssVariablesResolver={cssVariablesResolver}
    >
      <SmoothScroll>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SmoothScroll>
    </MantineProvider>
  </StrictMode>,
);
