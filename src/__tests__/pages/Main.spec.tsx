import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import * as reactRedux from 'react-redux';
import Main from '../../pages/Main';

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn()),
  };
});

describe('Main page', () => {
  it('Render page', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue([{ id: 1, name: 'test' }]);

    render(<Main />);
  });
  it('Search book in input', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue([{ id: 1, name: 'test' }]);

    const { getByPlaceholderText } = render(<Main />);

    const searchField = getByPlaceholderText(
      'Digite o nome do livro que deseja procurar',
    );

    fireEvent.change(searchField, { target: { value: 'test' } });
  });
});
