import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { IconButton } from '@mui/material';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom');
const onSearch = jest.fn();

test('Component renders with expected placeholder text', () => {
  render(
    <SearchBar placeholder="商品カテゴリ検索" onSearch={onSearch}></SearchBar>
  );
  const textFieldElement = screen.getByTestId('search-text-field');
  expect(textFieldElement).toBeInTheDocument();
});

test('Onclick event fires when user clicks search icon', () => {
  const mockOnClick = jest.fn();
  render(
    <SearchBar placeholder="商品カテゴリ検索" onSearch={onSearch}></SearchBar>
  );
  const { getByTestId } = render(<IconButton onClick={mockOnClick()} />);
  const searchIconElement = screen.getByTestId('search-icon');
  fireEvent.click(searchIconElement);
  expect(mockOnClick).toHaveBeenCalled();
});

test('Text renders on screen when user inputs text into TextField element', async () => {
  render(
    <SearchBar placeholder="商品カテゴリ検索" onSearch={onSearch}></SearchBar>
  );
  const input = await screen.findByLabelText(/^search-text-field-label/i);
  await userEvent.type(input, 'Jay');
  expect(input).toHaveValue('Jay');
});
