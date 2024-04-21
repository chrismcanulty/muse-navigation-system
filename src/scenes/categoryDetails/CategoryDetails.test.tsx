import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';

describe('Category details', () => {
  test('Component renders', () => {
    render(
      <MemoryRouter
        initialEntries={[
          {
            pathname: '/25',
            state: { jicfsIdMiddle: 25, jicfsNameMiddle: 'DIY用品' },
          },
        ]}
      >
        <CategoryDetails></CategoryDetails>
      </MemoryRouter>
    );
    const categoryId = screen.getByTestId('category-details');
    expect(categoryId).toBeInTheDocument();
  });
});
