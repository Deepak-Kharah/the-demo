import {
  composableStudioSdk,
  registerComponents,
  registerDesignClasses,
  registerDesignTokens,
} from "@contentstack/composable-studio-react";
import { Stack } from "../sdk/entry";
import { FancyButton } from "../components/FancyButton";

composableStudioSdk.init({
  stackSdk: Stack as any,
});

// registerDesignTokens(
//   {
//     colorTokens: {
//       // "color-secondary": "green",
//       // "color-primary": "green",
//     },
//     typography: {},
//     background: {},
//   },
//   {
//     // allowDefaultDesignTokens: false,
//   }
// );

// registerDesignClasses(["big-text"]);

// registerComponents([
//   {
//     name: "Fancy Button",
//     component: FancyButton,
//     props: {
//       text: {
//         type: "string",
//         displayName: "Text",
//         defaultValue: "I am feeling lucky!",
//       },
//     },
//   },
// ]);
