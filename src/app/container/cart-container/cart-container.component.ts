import { Component, OnInit } from '@angular/core';
import { CartBlockComponent } from '../../ui/blocks/cart-block/cart-block.component';
import { AsyncPipe } from '@angular/common';
import { ICopieModel } from '../../core/models/ICopiesModel';
import { Observable } from 'rxjs';
import { CartContainerFacade } from './cart-container.facade';

@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [CartBlockComponent, AsyncPipe],
  templateUrl: './cart-container.component.html',
})
export class CartContainerComponent implements OnInit {
  cart$: Observable<ICopieModel[]>;


  constructor(private readonly facade: CartContainerFacade) {}

  ngOnInit(): void {
    this.initializeSubscriptions();
  }
  private initializeSubscriptions(): void {
    this.cart$ = this.facade.cart$();
  }


  onRemoveFromCart(copieId: string): void {
    this.facade.removeCopieFromCart(copieId);
  }
  onClearCart(): void {
    this.facade.clearCart();
  }


}
