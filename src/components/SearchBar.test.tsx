import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

jest.mock('react-router-dom');
const mockOnSearch = jest.fn();

describe('SearchBar', () => {
  test('Component renders with expected placeholder text', () => {
    render(
      <SearchBar
        placeholder="商品カテゴリ検索"
        onSearch={mockOnSearch}
      ></SearchBar>
    );
    const textFieldElement = screen.getByTestId('search-text-field');
    expect(textFieldElement).toBeInTheDocument();
  });

  test('Onclick event fires when user clicks search icon', () => {
    render(
      <SearchBar
        placeholder="商品カテゴリ検索"
        onSearch={mockOnSearch}
      ></SearchBar>
    );
    const searchIconElement = screen.getByTestId('search-icon');
    fireEvent.click(searchIconElement);
    expect(mockOnSearch).toHaveBeenCalled();
  });

  test('Text renders on screen when user inputs text into TextField element', async () => {
    render(
      <SearchBar
        placeholder="商品カテゴリ検索"
        onSearch={mockOnSearch}
      ></SearchBar>
    );

    const field = screen
      .getByTestId('search-text-field')
      // eslint-disable-next-line testing-library/no-node-access
      .querySelector('input') as any;

    fireEvent.change(field, { target: { value: 'some text' } });
    expect(field.value).toBe('some text');
  });
});
