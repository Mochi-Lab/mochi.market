import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar with FAQs', () => {
  render(<App />);
  const faqElement = screen.getByText(/FAQs/i);
  expect(faqElement).toBeInTheDocument();
});
