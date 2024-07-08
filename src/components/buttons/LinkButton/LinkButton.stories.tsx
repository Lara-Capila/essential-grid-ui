import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './LinkButton';

const meta = {
  title: 'COMPONENTS/Butons/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      type: { name: 'string' },
      description: 'The variant of the button.',
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Indicates if the button is disabled.',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the button.',
    },
    size: {
      type: { name: 'string' },
      description: 'The size of the button.',
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'large' },
      },
    },
    href: {
      type: { name: 'string' },
      description: 'The url of the button.',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '**Attention**: If you only want an icon inside the button, we recommend using the `IconButton` component.',
      },
    },
  },
} satisfies Meta<typeof LinkButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://google.com',
    children: 'Go to Google',
    target: '_self',
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
};
