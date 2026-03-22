import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button with label', () => {
    render(<RadioButton label="Test Option" name="group1" />);
    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(screen.getByText('Test Option')).toBeInTheDocument();
  });

  test('radio button is greyed out when disabled', () => {
    render(<RadioButton label="Disabled Option" name="group1" disabled />);
    const labelElement = screen.getByText('Disabled Option');
    expect(labelElement).toHaveStyleRule('color', 'gray');
  });
});
