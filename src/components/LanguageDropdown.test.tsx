import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@mui/material';
import LanguageDropdown from './LanguageDropdown';

jest.mock('react-router-dom');
const setLanguageAbb = jest.fn();

test('Component renders with expected text', () => {
  render(
    <LanguageDropdown
      languageAbb="JA"
      setLanguageAbb={setLanguageAbb}
    ></LanguageDropdown>
  );
  const japaneseLanguageElement = screen.getByText('Language: JA');
  expect(japaneseLanguageElement).toBeInTheDocument();
});

test('Dropdown menu renders when component is clicked', () => {
  const mockOnClick = jest.fn();
  render(
    <LanguageDropdown
      languageAbb="JA"
      setLanguageAbb={setLanguageAbb}
    ></LanguageDropdown>
  );
  const { getByText } = render(<Button onClick={mockOnClick()} />);
  const japaneseLanguageElement = screen.getByText('Language: JA');
  fireEvent.click(japaneseLanguageElement);
  expect(mockOnClick).toHaveBeenCalled();
  expect(screen.getByText('日本語')).toBeInTheDocument();
  expect(screen.getByText('English')).toBeInTheDocument();
});
