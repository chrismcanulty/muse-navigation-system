import { fireEvent, render, screen } from '@testing-library/react';
import { ListItemButton } from '@mui/material';
import Item from './Item';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}));

describe('Item', () => {
  test('Clicking item fires onclick function', () => {
    render(<Item item={{ jicfsIdMiddle: 25, jicfsNameMiddle: 'DIY用品' }} />);
    const mockOnClick = jest.fn();
    render(<ListItemButton onClick={mockOnClick()} />);
    const listItemButton = screen.getByTestId('list-item-button');
    fireEvent.click(listItemButton);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
