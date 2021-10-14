import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('App', () => {
  test('renders learn react link', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText(/fun/i)).toBeInTheDocument();
  });

  test('Should have paragraph with text', () => {
    render(<App />);
    const paragraphEle = screen.getByText('welcome to our challenge', {
      exact: false,
    });
    expect(paragraphEle).toBeInTheDocument();
  });
});
