import RadioButton from './RadioButton';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

export const Default = {
  args: {
    label: 'Option 1',
    name: 'radioGroup',
    checked: false,
    disabled: false,
  },
};

export const Checked = {
  args: {
    label: 'Option 1',
    name: 'radioGroup',
    checked: true,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Option 1',
    name: 'radioGroup',
    checked: false,
    disabled: true,
  },
};
