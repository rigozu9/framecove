import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../components/ui/button';

describe('Button Component', () => {
  it('renders the button with the correct label', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
