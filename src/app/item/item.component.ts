import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

export type Item = {
  id: number;
  name: string;
  color: string;
} | null;

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnChanges {
  $data = input.required<Item>({ alias: '$itemData' });
  @Input() itemData!: Item;

  constructor() {
    effect(() => console.log('effect:', this.$data()));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', this.itemData);
  }
}
