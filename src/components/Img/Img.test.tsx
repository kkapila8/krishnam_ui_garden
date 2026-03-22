import { render, screen } from '@testing-library/react';
import 'jest-styled-components';
import Img from './Img';
import MyPhoto from '../../assets/myphoto.jpg';

describe('Img Component', () => {
  test('renders image with src and alt', () => {
    render(<Img src={MyPhoto} alt="My Photo" />);
    const image = screen.getByAltText('My Photo');
    expect(image).toBeInTheDocument();
  });

  test('image is semi-transparent when disabled', () => {
    render(<Img src={MyPhoto} alt="My Photo" disabled />);
    const image = screen.getByAltText('My Photo');
    expect(image).toHaveStyleRule('opacity', '0.5');
  });
});
