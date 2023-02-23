import { createTheme } from "@mui/material/styles";

export const theme = createTheme();

theme.typography.h1 = {
  fontSize: `calc(32px + 80 * ((100vw - 320px) / (1440 - 320)))`,
  [theme.breakpoints.up("lg")]: {
    fontSize: "6rem",
  },
  textAlign: "center",
};
theme.typography.h3 = {
  fontSize: `calc(26px + 30 * ((100vw - 320px) / (1440 - 320)))`,
  [theme.breakpoints.up("lg")]: {
    fontSize: "4rem",
  },
  fontWeight: 600,
};
theme.typography.h4 = {
  fontSize: `calc(20px + 25 * ((100vw - 320px) / (1440 - 320)))`,
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
  },
  fontWeight: 600,
};
