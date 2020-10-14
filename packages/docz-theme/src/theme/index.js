import { fontSizes, fonts } from "./fonts";
import * as colors from "./colors";
import * as navigation from "./navigation";
import { styles } from "./styles";

export default {
  colors: colors.default,
  fonts,
  fontSizes,
  navigation,

  prism: {
    light: {
      plain: {
        backgroundColor: "var(--color-grey--lightest)",
        borderRadius: "var(--radius-base)",
        fontFamily: "monospace",
        paddingLeft: "var(--space-small)",
        paddingRight: "var(--space-small)",
      },
    },
  },
  space: [
    0,
    "var(--space-smallest)",
    "var(--space-smaller)",
    "var(--space-small)",
    "var(--space-base)",
    "var(--space-large)",
    "var(--space-larger)",
    "var(--space-largest)",
    "var(--space-extravagant)",
  ],
  radii: {
    square: "var(--radius-base)",
    radius: "var(--radius-large)",
    rounded: "var(--radius-larger)",
  },
  styles,
};
