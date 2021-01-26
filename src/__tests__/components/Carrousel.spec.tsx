import React from 'react';
import { render } from '@testing-library/react';
import { Carrousel } from '../../components';

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

jest.mock('react-redux', () => {
  return {
    useDispatch: () => jest.fn(),
    useSelector: jest.fn(fn => fn()),
  };
});

describe('Carrousel component test', () => {
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
    render(<Carrousel books={[book]} />);
  });
});
