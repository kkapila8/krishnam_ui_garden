import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'object' },
    selected: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selected: 'Option 1',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selected: 'Option 1',
    disabled: true,
  },
};
