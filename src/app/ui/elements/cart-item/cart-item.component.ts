import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ibook } from '../../../core/models/Ibook.models';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input() book: Ibook;
  @Output() deleteItem= new EventEmitter<string>()

  removeFromCart(id: string){
    //acá hacer la logica para eliminar el libro del carrito
    this.deleteItem.emit(id);
  }

}
