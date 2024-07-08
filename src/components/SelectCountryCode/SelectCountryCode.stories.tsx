import type { Meta, StoryObj } from '@storybook/react';
import { SelectCountryCode } from './SelectCountryCode';

const meta = {
  title: 'components/SelectCountryCode',
  component: SelectCountryCode,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectCountryCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
