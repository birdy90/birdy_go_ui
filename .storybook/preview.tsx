import type { Preview } from "@storybook/react";
import '../src/global.css';
import {withThemeByClassName} from "@storybook/addon-themes";

const preview: Preview = {
  globalTypes: {},
  parameters: {
    backgrounds: {
      disable: true,
      grid: { disable: true },
    },
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
      defaultTheme: 'light',
    }),
];

export default preview;
