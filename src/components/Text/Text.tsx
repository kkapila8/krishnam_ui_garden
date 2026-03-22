import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ color?: string; disabled?: boolean }>`
  color: ${(props) => (props.disabled ? "gray" : props.color || "black")};
  font-size: 16px;
`;

const Text: React.FC<TextProps> = ({ content, color, disabled }) => {
  return <StyledText color={color} disabled={disabled}>{content}</StyledText>;
};

export default Text;