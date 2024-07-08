import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta = {
  title: 'components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: { name: 'string' },
      description: 'The display font size of the label.',
      options: ['small', 'large'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'samll' },
      },
    },
    weight: {
      description: 'The display weight of the label.',
      options: ['regular', 'medium', 'semibold'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'regular' },
      },
    },
    error: {
      description:
        'Indicates if the label is in error state and should be displayed in red.',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    isRequired: {
      description:
        'Indicates if the label is required. When true, the label will be displayed with an asterisk.',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the label.',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Label',
  },
};

export const Error: Story = {
  args: {
    children: 'Error Label',
    error: true,
  },
};

export const Required: Story = {
  args: {
    children: 'Required Label',
    isRequired: true,
  },
};
