import { Reducer } from 'redux';
import { IAuthState } from './types';

const INITIAL_STATE: IAuthState = {
  password: '',
  name: '',
  signed: false,
};

const auth: Reducer<IAuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SING_IN': {
      return {
        ...state,
        name: action.payload.name,
        signed: !state.signed,
      };
    }

    default: {
      return state;
    }
  }
};

export default auth;
