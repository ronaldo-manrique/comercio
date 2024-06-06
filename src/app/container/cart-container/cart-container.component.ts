import { Component } from '@angular/core';
import { CartBlockComponent } from '../../ui/blocks/cart-block/cart-block.component';
import { AsyncPipe } from '@angular/common';
import { Ibook } from '../../core/models/Ibook.models';

@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [CartBlockComponent, AsyncPipe],
  templateUrl: './cart-container.component.html'
})
export class CartContainerComponent {
  public selectedBooks: Ibook[]=[
    {
      id:'1a',
      title:'primer Libro',
      author:'autor del primer libro',
      availableCopies: 3,
      type:'book'
    },
    {
      id:'2b',
      title:'segundo Libro',
      author:'autor del segundo libro',
      availableCopies: 2,
      type:'novel'
    },
    {
      id:'3c',
      title:'tercer Libro',
      author:'autor del tercer libro',
      availableCopies: 1,
      type:'book'
    }
  ]
}
