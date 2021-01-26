import { Reducer } from 'redux';
import { IBookState } from './types';

const INITIAL_STATE: IBookState = {
  books: [],
  bookSelected: {
    id: '',
    author: '',
    cover: '',
    description: '',
    name: '',
    numberPages: 0,
    reserved: false,
    year: '',
  },
};

const auth: Reducer<IBookState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_BOOKS_SUCCESS': {
      return {
        ...state,
        books: action.payload,
      };
    }
    case 'GET_BOOK_SUCCESS': {
      return {
        ...state,
        bookSelected: action.payload,
      };
    }
    case 'CLEAR_STATE': {
      return {
        ...state,
        bookSelected: {
          id: '',
          author: '',
          cover: '',
          description: '',
          name: '',
          numberPages: 0,
          reserved: false,
          year: '',
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
