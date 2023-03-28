import { screen, render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {

  it('renders the correct subtitle', () => {
    render(<Header />);
    const subtitleElement = screen.getByText("Math");
    expect(subtitleElement).toBeTruthy();
  });

  it('renders the correct title', () => {
    const { getByText } = render(<Header />);
    const titleElement = getByText(/Class 11 math \(India\)/i);
    expect(titleElement).toBeTruthy();
  });

});
