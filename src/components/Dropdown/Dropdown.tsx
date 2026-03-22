import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.disabled ? 'lightgray' : 'white')};
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  disabled,
  onChange,
}) => {
  return (
    <StyledSelect
      disabled={disabled}
      value={selected}
      onChange={(e) => onChange && onChange(e.target.value)}
    >
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>
          {opt}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
