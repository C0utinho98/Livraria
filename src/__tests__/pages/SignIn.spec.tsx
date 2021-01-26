import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import SignIn from '../../pages/SignIn';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch: () => ({ dispatch: mockedDispatch }),
  };
});

describe('SigIn Page', () => {
  it('should be able to sign in', () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const nameFiled = getByPlaceholderText('Digite seu nome');
    const passwordField = getByPlaceholderText('Digite sua senha');
    const buttonElement = getByText('Acessar');

    fireEvent.change(nameFiled, { target: { value: 'Emerson' } });
    fireEvent.change(passwordField, { target: { value: '123' } });

    fireEvent.click(buttonElement);

    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch);

    expect(dummyDispatch).not.toHaveBeenCalled();
  });
});
