import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Header } from '../../components';

const mockedHistoryPush = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn()),
  };
});

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('Testing Header', () => {
  it('Render component', () => {
    render(<Header />);
  });
  it('Redirect button logo', () => {
    const { getByTestId } = render(<Header />);

    const buttonLogo = getByTestId('button-logo');

    fireEvent.click(buttonLogo);
    expect(mockedHistoryPush).toHaveBeenCalledWith('/main');
  });
  it('Redirect button register', () => {
    const { getByTestId } = render(<Header />);

    const buttonRegister = getByTestId('button-register');

    fireEvent.click(buttonRegister);
    expect(mockedHistoryPush).toHaveBeenCalledWith('/register');
  });
});
