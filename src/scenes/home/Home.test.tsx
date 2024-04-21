import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('react-router-dom');

describe('Home', () => {
  test('Component renders', () => {
    render(<Home></Home>);
    const homeScreen = screen.getByTestId('home');
    expect(homeScreen).toBeInTheDocument();
  });

  // E2E test - search bar

  test('Search results render on screen', () => {
    render(<Home></Home>);

    // user input into search field

    const field = screen
      .getByTestId('search-text-field')
      // eslint-disable-next-line testing-library/no-node-access
      .querySelector('input') as any;

    fireEvent.change(field, { target: { value: 'DIY用品' } });
    expect(field.value).toBe('DIY用品');

    // user clicks search icon

    const searchIconElement = screen.getByTestId('search-icon');
    fireEvent.click(searchIconElement);

    // check result is as expected

    const listItemButton = screen.getByTestId('list-item-button');
    expect(listItemButton).toBeInTheDocument();
  });
});
