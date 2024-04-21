import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import Home from './Home';

jest.mock('react-router-dom');

test('Component renders', () => {
  render(<Home></Home>);
  const homeScreen = screen.getByTestId('home');
  expect(homeScreen).toBeInTheDocument();
});

// test('Search prompt renders', () => {
//   render(<Home></Home>);
//   const homeScreen = screen.getByTestId('home-search-prompt');
//   expect(homeScreen).toHaveValue('ご希望の商品カテゴリをご入力ください');
// });
