import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom');

describe('App', () => {
  test('Component renders', () => {
    render(<App></App>);
    const app = screen.getByTestId('app');
    expect(app).toBeInTheDocument();
  });
});
