import { Meta, StoryObj } from '@storybook/react';
import Headline from './Headline';

const meta = {
  title: 'COMPONENTS/Typography/Headline',
  component: Headline,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      type: { name: 'string' },
      description:
        'The semantic heading tag if different from the display size (ex: a heading looks like an `h4`, but semantically, it is an `h1`.',
      options: ['h1', 'h2', 'h3', 'h4'],
      control: { type: 'select' },
    },
    size: {
      type: { name: 'string' },
      description: 'The display size of the heading.',
      options: ['h1', 'h2', 'h3', 'h4'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'h3' },
      },
    },
    weight: {
      description: 'The display weight of the heading.',
      options: [
        'extralight',
        'light',
        'regular',
        'medium',
        'semibold',
        'extrabold',
        'black',
      ],
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
} satisfies Meta<typeof Headline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    size: 'h1',
    tag: 'h1',
    children: 'Headline 1',
  },
};

export const H2: Story = {
  args: {
    size: 'h2',
    tag: 'h2',
    children: 'Headline 2',
  },
};

export const H3: Story = {
  args: {
    size: 'h3',
    tag: 'h3',
    children: 'Headline 3',
  },
};

export const H4: Story = {
  args: {
    size: 'h4',
    tag: 'h4',
    children: 'Headline 4',
  },
};
