import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'Click Me',
    backgroundColor: 'blue',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled',
    backgroundColor: 'blue',
    disabled: true,
  },
};
