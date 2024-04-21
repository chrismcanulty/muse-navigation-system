import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryList from './CategoryList';

jest.mock('react-router-dom');

test('CategoryList component', () => {
  render(
    <CategoryList results={[]} languageAbb="EN" suggestedCategory="菓子" />
  );
  const linkElement = screen.getByText(
    'Are you looking for this category: 菓子'
  );
  expect(linkElement).toBeInTheDocument();
});
