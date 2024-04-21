import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button, IconButton } from '@mui/material';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import CategoryDetails from './CategoryDetails';

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
