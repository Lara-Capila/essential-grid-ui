import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';
import { InputContainerProps } from './primitive/Container';
import { InputHintTextProps } from './primitive/HintText';
import { InputIconProps } from './primitive/Icon';

const iconNameOptions = ['XCircleIcon', 'CheckCircleIcon', 'EnvelopeIcon'];

type TextInputProps = {
  error?: InputContainerProps['error'];
  label?: string;
  iconName?: InputIconProps['iconName'];
  hintText?: InputHintTextProps['children'];
  color?: InputIconProps['color'];
  multiline?: boolean;
};

export default {
  title: 'COMPONENTS/Form/Input/Text',
  component: Input.Root,
  tags: ['autodocs'],
  argTypes: {
    error: {
      description:
        'Indicates if the input is in error state. When true, the border of the input will be in red.',
      control: { type: 'object' },
      table: {
        defaultValue: { summary: 'undefined' },
      },
    },
    label: { control: 'text' },
    hintText: {
      control: 'text',
      description: 'The hint text to display below the input field.',
      type: { name: 'string' },
    },
    multiline: {
      control: 'boolean',
      description: 'Indicates if the input should be multiline (textarea).',
      type: { name: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => {
  return (
    <Input.Root>
      <Input.Container error={args.error}>
        {args.label && <Input.Label>{args.label}</Input.Label>}
        <Input.Text id="text-input" multiline={args.multiline}>
          {args.iconName && <Input.Icon color={args.color} iconName={args.iconName} />}
        </Input.Text>
        {(args.hintText || args.error) && (
          <Input.HintText>{args.hintText}</Input.HintText>
        )}
      </Input.Container>
    </Input.Root>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Teste',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Teste',
  iconName: 'CheckCircleIcon',
};

WithIcon.argTypes = {
  iconName: {
    control: 'select',
    options: iconNameOptions,
    description: 'The name of the HeroIcon to display.',
  },
  color: {
    control: 'select',
    description:
      'The color of the icon to display. Leave blank to use the default color. Use the TailwindCSS and theme colors (ex: text-red-500).',
    options: ['text-red-500', 'text-green-500', 'text-blue-500', 'text-yellow-500'],
  },
};

export const WithHintText = Template.bind({});
WithHintText.args = {
  label: 'Teste',
  hintText: 'This is a hint text.',
};

export const WithError = Template.bind({});
WithError.args = {
  error: { type: 'onChange', message: 'This is an error' },
  label: 'Teste',
};

export const Multiline = Template.bind({});
Multiline.args = {
  label: 'Teste',
  multiline: true,
};
