import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    text: 'This is a label',
    color: 'black',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'Disabled label',
    color: 'black',
    disabled: true,
  },
};
