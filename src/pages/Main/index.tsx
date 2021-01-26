import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GiArchiveResearch } from 'react-icons/gi';
import { Carrousel, Input } from '../../components';
import { IState } from '../../store';
import { getBooks, clearState } from '../../store/reducers/book/actions';
import { IBook } from '../../store/reducers/book/types';

import { Container } from './styles';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [localBooks, setLocalBooks] = useState<IBook[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const books = useSelector<IState, IBook[]>(state => state.book.books);
  useEffect(() => {
    dispatch(getBooks());
    dispatch(clearState());
  }, [dispatch]);

  useEffect(() => {
    setLocalBooks(books);
  }, [books]);

  useEffect(() => {
    if (searchTerm.length) {
      const results = localBooks.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setLocalBooks(results);
    } else {
      setLocalBooks(books);
    }
  }, [searchTerm]);

  return (
    <Container>
      <div>
        <Input
          name="search"
          icon={GiArchiveResearch}
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="Digite o nome do livro que deseja procurar"
        />
      </div>
      {localBooks.length === 0 ? (
        <span>Livro não encontrado</span>
      ) : (
        <Carrousel books={localBooks} />
      )}
    </Container>
  );
};

export default Main;
