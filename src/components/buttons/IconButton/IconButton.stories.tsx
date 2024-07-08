import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta = {
  title: 'COMPONENTS/Butons/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      type: { name: 'string' },
      description: 'The name of the HeroIcon to display.',
      options: ['LanguageIcon', 'TrashIcon', 'PlusIcon'],
      control: { type: 'select' },
    },
    disabled: {
      type: { name: 'boolean' },
      description: 'Indicates if the button is disabled.',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    solid: {
      type: { name: 'boolean' },
      description:
        'Indicates if the HeroIcon should be rendered as a solid icon or outline.',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
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
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconName: 'PlusIcon',
    solid: false,
    disabled: false,
  },
};
