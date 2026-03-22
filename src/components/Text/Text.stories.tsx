import Text from './Text';

const meta = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    content: 'This is a text',
    color: 'black',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    content: 'Disabled text',
    color: 'black',
    disabled: true,
  },
};
