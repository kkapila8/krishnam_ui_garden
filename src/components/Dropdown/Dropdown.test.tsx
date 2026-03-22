import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('renders dropdown with options', () => {
    render(<Dropdown options={['A', 'B']} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  test('dropdown is grey when disabled', () => {
    render(<Dropdown options={['A']} disabled />);
    const dropdown = screen.getByRole('combobox');
    expect(dropdown).toHaveStyleRule('background-color', 'lightgray');
  });
});
