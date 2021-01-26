import React, { useCallback, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reserveBookRequest } from '../../store/reducers/book/actions';

import {
  Container,
  LeftContent,
  RightContent,
  Title,
  Subtitle,
  DescriptionText,
  WrapperButton,
  WrapperImg,
} from './styles';

import { Button } from '../index';
import { IState } from '../../store';
import { IBook } from '../../store/reducers/book/types';

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

interface DescriptionProps {
  book: Book;
}

const Description: React.FC<DescriptionProps> = ({ book }) => {
  const bookSelected = useSelector<IState, IBook>(
    state => state.book.bookSelected,
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const [handleButton, setHandleButton] = useState(book.reserved);

  useEffect(() => {
    if (bookSelected.id !== '') {
      setHandleButton(bookSelected.reserved);
    }
  }, [bookSelected]);

  const handleReserve = useCallback(() => {
    dispatch(reserveBookRequest(book.id));
  }, [book.id, dispatch]);

  return (
    <Container>
      <LeftContent>
        <WrapperImg>
          <img src={book.cover} alt={book.name} />
        </WrapperImg>
        <WrapperButton>
          {handleButton ? (
            <Button onClick={handleReserve}>Devolver Livro</Button>
          ) : (
            <>
              <Button onClick={handleReserve}>Alugar</Button>
              <Button
                onClick={() => history.push(`/update/${book.id}`)}
                color="#00BFFF"
              >
                Editar
              </Button>
            </>
          )}
        </WrapperButton>
      </LeftContent>

      <RightContent>
        <Title>
          <h1>{book.name}</h1>
        </Title>
        <Subtitle>
          <strong>Descrição</strong>
        </Subtitle>
        <DescriptionText>
          <span>{book.description}</span>
        </DescriptionText>
        <Subtitle>
          <strong>Característica</strong>
        </Subtitle>
        <span>{`Autor: ${book.author}`}</span>
        <span>{`Ano: ${book.year}`}</span>
        <span>{`Número de páginas: ${book.numberPages}`}</span>
      </RightContent>
    </Container>
  );
};

export default Description;
