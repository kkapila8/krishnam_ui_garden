import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';
const a = 1;
const StyledButton = styled.button<{
  backgroundColor?: string;
  disabled?: boolean;
}>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${(props) =>
    props.disabled ? 'gray' : props.backgroundColor || 'blue'};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const Button: React.FC<ButtonProps> = ({
  label,
  backgroundColor,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
