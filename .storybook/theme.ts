import logo from "../public/mission-ui.png";
import { create } from "@storybook/theming";

export default create({
  // theme dark or light
  base: "dark",

  // brand logo
  brandImage: logo,
  brandTitle: "Mission UI",
  brandName: "Mission UI",
  brandTarget: "_self",
  brandUrl: "https://github.com/mission-ui",

  appBg: "#000000",
  appContentBg: "#000000",
  appPreviewBg: "#000000",

  // Toolbar default and active colors
  barTextColor: "#ffffff",
  barSelectedColor: "#ffffff",
  barHoverColor: "#ffffff",
  barBg: "#000000",
});
