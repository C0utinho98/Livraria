import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { Description } from '../../components';

interface Book {
  id: string;
  name: string;
  description: string;
  author: string;
  year: string;
  numberPages: number;
  cover: string;
  reserved: boolean;
}

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

describe('Description component test', () => {
  it('Render component', () => {
    const book: Book = {
      id: '1',
      name: 'Teste',
      description: 'Teste',
      author: 'Test',
      year: '2021',
      numberPages: 500,
      reserved: false,
      cover: 'img',
    };

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue([{ id: 1, name: 'test', reserved: false }]);

    render(<Description book={book} />);
  });
  it('Handle redirect', () => {
    const book: Book = {
      id: '1',
      name: 'Teste',
      description: 'Teste',
      author: 'Test',
      year: '2021',
      numberPages: 500,
      reserved: false,
      cover: 'img',
    };

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({ id: 1, name: 'test', reserved: false });

    const { getByText } = render(<Description book={book} />);

    const buttonElement = getByText('Editar');

    fireEvent.click(buttonElement);
    expect(mockedHistoryPush).toHaveBeenCalledWith('/update/1');
  });

  it('Handle reserver', () => {
    const book: Book = {
      id: '1',
      name: 'Teste',
      description: 'Teste',
      author: 'Test',
      year: '2021',
      numberPages: 500,
      reserved: false,
      cover: 'img',
    };

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({ id: 1, name: 'test', reserved: true });

    const { getByText } = render(<Description book={book} />);

    const buttonElement = getByText('Devolver Livro');

    fireEvent.click(buttonElement);
  });
});
