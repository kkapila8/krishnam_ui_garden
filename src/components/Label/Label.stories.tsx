import Label from './Label';

const meta = {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

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
