import { theme } from "antd";

const lightTheme = {
  token: { colorPrimary: "#1E3A8A", fontFamily: `var(--font-family)` },
  algorithm: [theme.defaultAlgorithm],
  components: {
    Button: {
      primaryShadow: "none",
    },
  },
};

export default lightTheme;
