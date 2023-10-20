import { AppState } from './AppState';

export const AppInitialState: AppState = {
  loading: {
    isLoading: false, // Change 'show' to 'isLoading' and set the initial value
  },
  login: {
    error: null,
    isLoggedIn: false,
    isLoggingIn: false,
    isRecoveredPassword: false,
    isRecoveringPassword: false,
  },
};
