import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from '../state/auth.actions';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  input: string = '';

  constructor(private store: Store) {}

  logIn() {
    this.store.dispatch(authActions.logInSuccess({ username: this.input || '' }));
  }
}
