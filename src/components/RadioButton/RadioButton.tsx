import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => (props.disabled ? "gray" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const StyledInput = styled.input<{ disabled?: boolean }>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, checked, disabled, onChange }) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledInput
        type="radio"
        name={name}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;