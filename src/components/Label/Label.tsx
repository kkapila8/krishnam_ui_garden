import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ color?: string; disabled?: boolean }>`
  font-size: 16px;
  color: ${(props) => (props.disabled ? 'gray' : props.color || 'black')};
`;

const Label: React.FC<LabelProps> = ({ text, color, disabled }) => {
  return (
    <StyledLabel color={color} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;
