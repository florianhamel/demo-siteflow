import { Component } from '@angular/core';
import { Item, ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items: Array<Item>;

  constructor() {
    this.items = Array.from({ length: 15 }, (_, k) => k + 1).map((id) => ({
      id,
      name: `${id}_name`,
      color: id % 2 ? 'lightgreen' : 'lightpink'
    }));
  }

  changeColorFirstElem() {
    // this.items = this.items.with(0, { ...this.items[0]!, color: 'lightyellow' });
    this.items[0]! = { ...this.items[0]!, color: 'lightyellow' };
  }
}
