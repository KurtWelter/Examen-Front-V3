import { hide, show } from './loading.actions';
import { loadingReducer } from './loading.reducers';
import { LoadingState } from './LoadingState';
import { createAction } from '@ngrx/store';

describe('Loading store', () => {
  it('show', () => {
    const initialState: LoadingState = { isLoading: false };
    const newState = loadingReducer(initialState, show());

    expect(newState).toEqual({ isLoading: true });
  });

  it('hide', () => {
    const initialState: LoadingState = { isLoading: true };
    const newState = loadingReducer(initialState, hide());

    expect(newState).toEqual({ isLoading: false });
  });

  it('should keep state if action is unkown', () => {
    const initialState: LoadingState = { isLoading: true };
    const action = createAction('UNKOWN');
    const newState = loadingReducer(initialState, action);

    expect(newState).toEqual({ isLoading: true });
  });
});
