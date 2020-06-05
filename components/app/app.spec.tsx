import React from 'react';
import { App } from './app';
import {cleanup, fireEvent, render} from '@testing-library/react';

afterEach(cleanup);

describe('App', () => {
  it('App should render with text `bit`', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('bit')).toBeTruthy();
  });
});
