import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import { act } from 'react-dom/test-utils';
import FormBook from '../../pages/FormBook';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useParams: () => jest.fn(),
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn()),
  };
});

describe('Form book page', () => {
  it('Render', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({ id: 1, name: 'test', reserved: true });
    render(<FormBook />);
  });

  it('Submit form with book reserved', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({ id: '1', name: '', reserved: true });
    const { getByPlaceholderText, getByText } = render(<FormBook />);

    const nameBook = getByPlaceholderText('Nome do livro');
    const description = getByPlaceholderText('Descrição');
    const author = getByPlaceholderText('Autor');
    const year = getByPlaceholderText('Ano de lançamento');
    const number = getByPlaceholderText('Número de páginas');

    fireEvent.change(nameBook, { target: { value: 'Livro' } });
    fireEvent.change(description, { target: { value: 'Description' } });
    fireEvent.change(author, { target: { value: 'Author' } });
    fireEvent.change(year, { target: { value: 2021 } });
    fireEvent.change(number, { target: { value: 500 } });

    const buttonElement = getByText('Cadastar');

    fireEvent.click(buttonElement);
  });
  describe('Form book submit', () => {
    it('Submit form', async () => {
      const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
      useSelectorMock.mockReturnValue({ id: '', name: '', reserved: false });
      const { getByPlaceholderText, getByText, getByTestId } = render(
        <FormBook />,
      );

      const file = new File(['filefilefile'], 'videoFile.mxf');

      const nameBook = getByPlaceholderText('Nome do livro');
      const description = getByPlaceholderText('Descrição');
      const author = getByPlaceholderText('Autor');
      const year = getByPlaceholderText('Ano de lançamento');
      const number = getByPlaceholderText('Número de páginas');
      const upload = getByTestId('upload-test');

      fireEvent.change(nameBook, { target: { value: 'Livro' } });
      fireEvent.change(description, { target: { value: 'Description' } });
      fireEvent.change(author, { target: { value: 'Author' } });
      fireEvent.change(year, { target: { value: 2021 } });
      fireEvent.change(number, { target: { value: 500 } });

      await act(async () => {
        fireEvent.change(upload, { target: { files: [file] } });
      });

      const buttonElement = getByText('Cadastar');

      fireEvent.click(buttonElement);
    });
  });

  it('Submit form error upload', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({ id: '', name: '', reserved: false });
    const { getByPlaceholderText, getByText } = render(<FormBook />);

    const nameBook = getByPlaceholderText('Nome do livro');
    const description = getByPlaceholderText('Descrição');
    const author = getByPlaceholderText('Autor');
    const year = getByPlaceholderText('Ano de lançamento');
    const number = getByPlaceholderText('Número de páginas');

    fireEvent.change(nameBook, { target: { value: 'Livro' } });
    fireEvent.change(description, { target: { value: 'Description' } });
    fireEvent.change(author, { target: { value: 'Author' } });
    fireEvent.change(year, { target: { value: 2021 } });
    fireEvent.change(number, { target: { value: 500 } });

    const buttonElement = getByText('Cadastar');

    fireEvent.click(buttonElement);
  });

  it('Submit form error upload', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue({ id: '', name: '', reserved: false });
    const { getByPlaceholderText, getByText } = render(<FormBook />);

    const nameBook = getByPlaceholderText('Nome do livro');
    const description = getByPlaceholderText('Descrição');
    const author = getByPlaceholderText('Autor');
    const year = getByPlaceholderText('Ano de lançamento');
    const number = getByPlaceholderText('Número de páginas');

    fireEvent.change(nameBook, { target: { value: 'Livro' } });
    fireEvent.change(description, { target: { value: 'Description' } });
    fireEvent.change(author, { target: { value: 'Author' } });
    fireEvent.change(year, { target: { value: 2021 } });
    fireEvent.change(number, { target: { value: 500 } });

    const buttonElement = getByText('Cadastar');

    fireEvent.click(buttonElement);
  });
});
