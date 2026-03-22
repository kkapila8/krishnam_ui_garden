import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ backgroundColor?: string; disabled?: boolean }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) => (props.disabled ? "lightgray" : props.backgroundColor || "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3<{ disabled?: boolean }>`
  margin: 0 0 8px 0;
  color: ${(props) => (props.disabled ? "gray" : "black")};
`;

const CardContent = styled.p<{ disabled?: boolean }>`
  margin: 0;
  color: ${(props) => (props.disabled ? "gray" : "black")};
`;

const Card: React.FC<CardProps> = ({ title, content, backgroundColor, disabled }) => {
  return (
    <StyledCard backgroundColor={backgroundColor} disabled={disabled}>
      <CardTitle disabled={disabled}>{title}</CardTitle>
      <CardContent disabled={disabled}>{content}</CardContent>
    </StyledCard>
  );
};

export default Card;