import { createReducer, on } from '@ngrx/store';
import { LoginState } from './LoginState';
import {
  recoverPassword,
  recoverPasswordFail,
  recoverPasswordSuccess,
} from './login.actions';
import { AppInitialState } from '../AppInitialState';

const initialState: LoginState = {
  ...AppInitialState.login, // Spread the properties from AppInitialState.login
  error: null,
  isRecoveredPassword: false,
};

const reducer = createReducer(
  initialState,
  on(recoverPassword, (state) => {
    return { ...state, isRecoveringPassword: true, error: null };
  }),
  on(recoverPasswordSuccess, (state) => {
    return { ...state, isRecoveredPassword: true, error: null };
  }),
  on(recoverPasswordFail, (state, { error }) => {
    return { ...state, isRecoveredPassword: false, error };
  })
);

export function loginReducer(state: LoginState | undefined, action: any) {
  return reducer(state, action);
}
