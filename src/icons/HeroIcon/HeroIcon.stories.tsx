import type { Meta, StoryObj } from '@storybook/react';
import { HeroIcon } from './HeroIcon';

const nameOptions = ['XCircleIcon', 'CheckCircleIcon', 'EnvelopeIcon'];

const meta = {
  title: 'COMPONENTS/Icons/HeroIcon',
  component: HeroIcon,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
      options: nameOptions,
      type: { name: 'string' },
      description: 'The name of the HeroIcon to display.',
    },
    classes: {
      control: 'text',
      type: { name: 'string' },
      description: 'Additional TailwindCSS classes to apply to the HeroIcon.',
    },
    solid: {
      control: 'boolean',
      type: { name: 'boolean' },
      description:
        'Indicates if the HeroIcon should be rendered as a solid icon or outline.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof HeroIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'CheckCircleIcon',
  },
};
