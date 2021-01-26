import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage,
      whitelist: [],
    },
    reducers,
  );

  return persistedReducer;
};
