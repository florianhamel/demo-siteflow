import { Routes } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { ItemListComponent } from './item-list/item-list.component';

export const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'item-list', component: ItemListComponent }
];
