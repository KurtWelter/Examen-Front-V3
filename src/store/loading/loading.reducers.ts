import { createReducer, on, Action } from '@ngrx/store';
import { hide, show } from './loading.actions';

// I Define an interface for loading state
export interface LoadingState {
  isLoading: boolean;
}

// Initial state with isLoading set to false
const initialState: LoadingState = {
  isLoading: false,
};

// Create a reducer
const reducer = createReducer(
  initialState,
  on(show, (state) => {
    // Set isLoading to true when showing loading
    return { ...state, isLoading: true };
  }),
  on(hide, (state) => {
    // Set isLoading to false when hiding loading
    return { ...state, isLoading: false };
  })
);

// Export the loading reducer function
export function loadingReducer(
  state: LoadingState | undefined,
  action: Action
) {
  return reducer(state, action);
}
