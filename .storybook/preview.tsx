import type { Preview } from "@storybook/react";
import {UikitProvider} from '../src';
import '../src/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <UikitProvider>
        <Story />
      </UikitProvider>
    ),
  ],
};

export default preview;
