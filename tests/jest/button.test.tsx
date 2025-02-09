import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  test('renders the button with the correct text', () => {
    render(<Button>Click Me</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn(); // Mock click handler
    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
