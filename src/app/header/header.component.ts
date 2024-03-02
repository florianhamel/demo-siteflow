import { Component, computed, effect, signal, Signal, WritableSignal } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsername } from '../auth/state/auth.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: Signal<string>;
  computedUsername: Signal<string>;
  toggle: WritableSignal<boolean> = signal<boolean>(false);

  constructor(private store: Store) {
    this.username = this.store.selectSignal(selectUsername);

    this.computedUsername = computed<string>(() =>
      this.toggle() ? '✨ Hello ' + this.username() : this.username()
    );

    effect(() => this.debugLog());
  }

  debugLog() {
    console.log('debugLog:', this.username());
  }

  toggleSwitch() {
    this.toggle.update((value) => !value);
  }
}
