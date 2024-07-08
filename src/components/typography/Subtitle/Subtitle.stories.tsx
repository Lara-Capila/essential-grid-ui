import type { Meta, StoryObj } from '@storybook/react';
import { Subtitle } from './Subtitle';

const meta = {
  title: 'COMPONENTS/Typography/Subtitle',
  component: Subtitle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      type: { name: 'string' },
      description: 'The display font size of the subtitle.',
      options: ['small', 'large'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'samll' },
      },
    },
    weight: {
      description: 'The display weight of the subtitle.',
      options: ['regular', 'medium', 'semibold'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'regular' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'The content of the heading.',
    },
  },
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Subtitle',
  },
};

export const LargeSubtitle: Story = {
  args: {
    children: 'Subtitle',
    size: 'large',
  },
};
