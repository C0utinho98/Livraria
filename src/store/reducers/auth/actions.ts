import { IAuthState } from './types';

interface response {
  type: string;
  payload?: object;
}

export function handleLogin(data: IAuthState): response {
  return {
    type: 'SING_IN',
    payload: data,
  };
}
