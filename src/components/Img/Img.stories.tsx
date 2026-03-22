import Img from "./Img";
import MyPhoto from "../../assets/myphoto.jpg"; // your image file

export default {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export const MyPicture = {
  args: {
    src: MyPhoto,
    alt: "My Photo",
    width: "200px",
    height: "200px",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    src: MyPhoto,
    alt: "My Photo",
    width: "200px",
    height: "200px",
    disabled: true,
  },
};