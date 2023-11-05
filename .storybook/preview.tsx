import type { Preview } from "@storybook/react";
import '../src/global.css';
import {withThemeByClassName} from "@storybook/addon-themes";

const preview: Preview = {
  globalTypes: {
    darkMode: {
      defaultValue: true, // tailwind default
    },
  },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
];

export default preview;
