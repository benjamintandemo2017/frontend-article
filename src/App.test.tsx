import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import * as Constants from './common/Constants';

test('renders respective contents', () => {
  render(<App />);
  const TitleElement = screen.getByText(Constants.mainTitle);
  const Card1Element = screen.getByText(Constants.cardTitle1);
  const Card2Element = screen.getByText(Constants.cardTitle2);
  const Card3Element = screen.getByText(Constants.cardTitle3);

  expect(TitleElement).toBeInTheDocument();
  expect(Card1Element).toBeInTheDocument();
  expect(Card2Element).toBeInTheDocument();
  expect(Card3Element).toBeInTheDocument();
});
