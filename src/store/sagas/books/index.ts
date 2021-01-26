import { all, call, takeLatest, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { uuid } from 'uuidv4';

import {
  getBooksSuccess,
  getBookSuccess,
  createBookRequest,
  createBookFailure,
  createBookSuccess,
  updateBookRequest,
} from '../../reducers/book/actions';
import api from '../../../services/api';
import { IBook } from '../../reducers/book/types';

type CreateBookRequest = ReturnType<typeof createBookRequest>;
type UpdateBookRequest = ReturnType<typeof updateBookRequest>;
type CreateBookSuccess = ReturnType<typeof createBookSuccess>;
type CreateBookFailure = ReturnType<typeof createBookFailure>;

function* getBooks() {
  const booksResponse: AxiosResponse<IBook[]> = yield call(api.get, 'books');

  if (booksResponse.data) {
    yield put(getBooksSuccess(booksResponse.data));
  }
}

function* getBook({ payload }: CreateBookSuccess) {
  const booksResponse: AxiosResponse<IBook> = yield call(
    api.get,
    `books/${payload}`,
  );

  if (booksResponse.data) {
    yield put(getBookSuccess(booksResponse.data));
  }
}

function* createBook({ payload }: CreateBookRequest) {
  try {
    yield call(api.post, 'books', {
      ...payload,
      id: uuid(),
      reserved: false,
    });
    yield put(createBookSuccess('Livro criado com sucesso!'));
  } catch (err) {
    yield put(createBookFailure('Erro ao criar livro, verifique seus dados'));
  }
}

function* updateBook({ payload }: UpdateBookRequest) {
  try {
    yield call(api.put, `books/${payload?.id}`, {
      ...payload,
      reserved: false,
    });
    yield put(createBookSuccess('Livro editado com sucesso!'));
  } catch (err) {
    yield put(createBookFailure('Erro ao editar livro, verifique seus dados'));
  }
}

function* deleteBook({ payload }: CreateBookSuccess) {
  try {
    yield call(api.delete, `books/${payload}`);
    yield put(createBookSuccess('Livro excluído com sucesso!'));
  } catch (err) {
    yield put(createBookFailure('Erro ao excluir livro '));
  }
}

function* reserveBook({ payload }: CreateBookSuccess) {
  const booksResponse: AxiosResponse<IBook> = yield call(
    api.get,
    `books/${payload}`,
  );

  const booksResponseSuccess: AxiosResponse<IBook> = yield call(
    api.put,
    `books/${payload}`,
    {
      ...booksResponse.data,
      reserved: !booksResponse.data.reserved,
    },
  );

  yield put(getBookSuccess(booksResponseSuccess.data));
}

function showToastSuccess({ payload }: CreateBookSuccess) {
  toast.success(payload);
}
function showToastFailure({ payload }: CreateBookFailure) {
  toast.error(payload);
}

export default all([
  takeLatest('GET_BOOKS', getBooks),
  takeLatest('GET_BOOK', getBook),
  takeLatest('CREATE_BOOK_REQUEST', createBook),
  takeLatest('UPDATE_BOOK_REQUEST', updateBook),
  takeLatest('DELETE_BOOK', deleteBook),
  takeLatest('RESERVE_BOOK_REQUEST', reserveBook),
  takeLatest('CREATE_BOOK_SUCCESS', showToastSuccess),
  takeLatest('CREATE_BOOK_FAILURE', showToastFailure),
]);
