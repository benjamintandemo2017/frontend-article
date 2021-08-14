import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import * as Constants from './common/Constants';
import {articles} from './common/articles'

test('renders respective contents', () => {
  render(<App />);
  const TitleElement = screen.getByText(Constants.mainTitle);
  const Card1Element = screen.getByText(articles[0].title);
  const Card2Element = screen.getByText(articles[1].title);
  const Card3Element = screen.getByText(articles[2].title);

  expect(TitleElement).toBeInTheDocument();
  expect(Card1Element).toBeInTheDocument();
  expect(Card2Element).toBeInTheDocument();
  expect(Card3Element).toBeInTheDocument();
});
