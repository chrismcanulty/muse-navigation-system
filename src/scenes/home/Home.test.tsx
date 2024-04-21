/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import Home from './Home';
import SearchBar from '../../components/SearchBar';
import { JAPANESE_SEARCH_PROMPT } from '../../constants/constants';
const { expect, describe, it } = require('@jest/globals');

test('should render home component', () => {
  render(<Home />);
  expect(screen.getByTestId('home')).toBeDefined();
});

test('should render a search prompt', () => {
  render(<Home />);
  expect(screen.getByText(JAPANESE_SEARCH_PROMPT)).toBeDefined();
});
