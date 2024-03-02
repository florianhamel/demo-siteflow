import { createActionGroup, props } from '@ngrx/store';

export const authActions = createActionGroup({
  source: 'authActions',
  events: {
    logInSuccess: props<{ username: string }>()
  }
})
