import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsername } from '../auth/state/auth.selectors';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  $username: Signal<string>;
  $computedUsername: Signal<string>;
  $fun: WritableSignal<boolean> = signal<boolean>(false);

  constructor(private store: Store) {
    this.$username = this.store.selectSignal(selectUsername);

    this.$computedUsername = computed<string>(() =>
      this.$fun() ? '✨ Hello ' + this.$username() : this.$username()
    );

    effect(() => this.debugLog());
  }

  debugLog() {
    console.log('debugLog:', this.$username());
  }

  toggleSwitch() {
    this.$fun.update((value) => !value);
  }
}
