import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';

import { InputContainerProps } from './primitive/Container';
import { InputHintTextProps } from './primitive/HintText';

type TextInputProps = {
  error?: InputContainerProps['error'];
  label?: string;
  hintText?: InputHintTextProps['children'];
};

export default {
  title: 'COMPONENTS/Form/Input/Password',
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
  },
  parameters: {
    controls: { exclude: ['children'] },
  },
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => {
  return (
    <Input.Root>
      <Input.Container error={args.error}>
        {args.label && <Input.Label>{args.label}</Input.Label>}
        <Input.Password id="text-input" />
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

export const Error = Template.bind({});
Error.args = {
  label: 'Teste',
  error: {
    type: 'onBlur',
    message: 'Error message',
  },
};
