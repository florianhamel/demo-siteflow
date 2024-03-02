import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from './auth.actions';

type AuthState = { username: string };

const initialState = {
  username: ''
};

export const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer<AuthState>(
    initialState,
    on(authActions.logInSuccess, (_, authData) => ({ ...authData }))
  )
});
