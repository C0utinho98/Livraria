import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.min.css';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
export default App;
