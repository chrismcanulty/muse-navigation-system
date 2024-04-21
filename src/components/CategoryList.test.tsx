import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CategoryList from './CategoryList';
import { Button } from '@mui/material';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => jest.fn(),
}));

test('Renders appropriate text when AI suggested category is passed in', () => {
  render(
    <CategoryList results={[]} languageAbb="EN" suggestedCategory="菓子" />
  );
  const suggestedTextElement = screen.getByText(
    'Are you looking for this category: 菓子'
  );
  expect(suggestedTextElement).toBeInTheDocument();
});

test('Clicking AI suggested category button fires onClick event', () => {
  render(
    <CategoryList results={[]} languageAbb="EN" suggestedCategory="菓子" />
  );
  const mockOnClick = jest.fn();
  const { getByTestId } = render(<Button onClick={mockOnClick()} />);
  const clickIndicator = screen.getByTestId('click-indicator');
  fireEvent.click(clickIndicator);
  expect(mockOnClick).toHaveBeenCalled();
});

test('Renders results when user search yields matching results', () => {
  render(
    <CategoryList
      results={[{ jicfsIdMiddle: 25, jicfsNameMiddle: 'DIY用品' }]}
      languageAbb="JA"
      suggestedCategory=""
    />
  );
  const resultsElement = screen.getByText('DIY用品');
  expect(resultsElement).toBeInTheDocument();
});
