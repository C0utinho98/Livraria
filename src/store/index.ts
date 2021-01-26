import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { IAuthState } from './reducers/auth/types';
import reducers from './reducers';
import sagas from './sagas';
import { IBookState } from './reducers/book/types';

export interface IState {
  auth: IAuthState;
  book: IBookState;
}
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  persistReducer(
    {
      key: 'livraria',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  ),
  composeWithDevTools(applyMiddleware(...middlewares)),
);

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
