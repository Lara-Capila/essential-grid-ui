import { HeroIcon } from '@/icons/HeroIcon/HeroIcon';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'COMPONENTS/Butons/Button',
  component: Button,
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
  },
  parameters: {
    docs: {
      description: {
        component:
          '**Attention**: If you only want an icon inside the button, we recommend using the `IconButton` component.',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
};

export const WithTextIcon: Story = {
  args: {
    children: (
      <>
        Default Button <HeroIcon iconName="CheckCircleIcon" solid={false} />
      </>
    ),
    variant: 'primary',
    disabled: false,
  },
};
