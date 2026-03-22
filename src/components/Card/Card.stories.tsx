import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
  },
};

export const Default = {
  args: {
    title: "Card Title",
    content: "This is the content of the card.",
    backgroundColor: "white",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Card",
    content: "This card is disabled.",
    backgroundColor: "white",
    disabled: true,
  },
};