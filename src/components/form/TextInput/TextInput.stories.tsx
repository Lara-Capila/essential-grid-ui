import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const nameOptions = ['XCircleIcon', 'CheckCircleIcon', 'EnvelopeIcon'];

const meta = {
  title: 'COMPONENTS/Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      type: { name: 'string' },
      description:
        'The placeholder is a short hint that appears within an input field before the user enters any data.',
    },
    label: {
      control: 'text',
      description: 'A label for the field. Leave blank to remove.',
      type: { name: 'string' },
    },
    error: {
      description:
        'Indicates if the input is in error state. When true, the border of the input will be in red.',
      type: { name: 'boolean' },
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    hintText: {
      control: 'text',
      description: 'The hint text to display below the input field.',
      type: { name: 'string' },
    },
    iconName: {
      control: 'select',
      options: nameOptions,
      description: 'The name of the HeroIcon to display.',
      type: { name: 'string' },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type here',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Type here',
    error: true,
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: 'Type here',
    label: 'Input label',
  },
};

export const WithHintText: Story = {
  args: {
    placeholder: 'Type here',
    label: 'Input label',
    hintText: 'Required field',
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: 'Type here',
    label: 'Input label',
    iconName: 'CheckCircleIcon',
  },
};
