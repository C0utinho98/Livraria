import { IBook } from './types';

interface response {
  type: string;
  payload?: object;
}
interface responseString {
  type: string;
  payload?: string;
}

interface payloadPost {
  type: string;
  payload?: IBook;
}

export function getBooks(): response {
  return {
    type: 'GET_BOOKS',
  };
}
export function getBooksSuccess(data: IBook[]): response {
  return {
    type: 'GET_BOOKS_SUCCESS',
    payload: data,
  };
}

export function getBook(id: string): responseString {
  return {
    type: 'GET_BOOK',
    payload: id,
  };
}
export function getBookSuccess(data: IBook): response {
  return {
    type: 'GET_BOOK_SUCCESS',
    payload: data,
  };
}

export function createBookRequest(data: IBook): response {
  return {
    type: 'CREATE_BOOK_REQUEST',
    payload: data,
  };
}

export function updateBookRequest(data: IBook): payloadPost {
  return {
    type: 'UPDATE_BOOK_REQUEST',
    payload: data,
  };
}
export function createBookSuccess(message: string): responseString {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    payload: message,
  };
}

export function createBookFailure(message: string): responseString {
  return {
    type: 'CREATE_BOOK_FAILURE',
    payload: message,
  };
}

export function deleteBookRequest(id: string): responseString {
  return {
    type: 'DELETE_BOOK',
    payload: id,
  };
}

export function clearState(): response {
  return {
    type: 'CLEAR_STATE',
  };
}

export function reserveBookRequest(id: string): responseString {
  return {
    type: 'RESERVE_BOOK_REQUEST',
    payload: id,
  };
}
