import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Simple HTML validation example', () => {
  render(<App />);
  const linkElement = screen.getByText(/Simple HTML validation example/i);
  expect(linkElement).toBeInTheDocument();
});
