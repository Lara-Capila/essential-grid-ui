import type { Meta, StoryObj } from '@storybook/react';
import { SelectCountryCode } from './SelectCountryCode';

const options = [
  { name: 'Brazil', code: 'BR', phone: 55, mask: '(XX) XXXXX-XXXX' },
  { name: 'United States', code: 'US', phone: 1, mask: '(XXX) XXX-XXXX' },
];

const meta = {
  title: 'components/SelectCountryCode',
  component: SelectCountryCode,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'select',
      options,
    },
  },
} satisfies Meta<typeof SelectCountryCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: options[0],
    setSelected(country) {},
  },
};
