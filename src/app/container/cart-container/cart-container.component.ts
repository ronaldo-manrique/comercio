import { Component, OnInit } from '@angular/core';
import { CartBlockComponent } from '../../ui/blocks/cart-block/cart-block.component';
import { AsyncPipe } from '@angular/common';
import { ICopieModel } from '../../core/models/ICopiesModel';
import { Observable } from 'rxjs';
import { CartContainerFacade } from './cart-container.facade';
import { IloanRequest } from '../../core/models/loan-request.models';

@Component({
  selector: 'app-cart-container',
  standalone: true,
  imports: [CartBlockComponent, AsyncPipe],
  templateUrl: './cart-container.component.html',
})
export class CartContainerComponent implements OnInit {
  cart$: Observable<ICopieModel[]>;
  errorResponse$: Observable<any>;
  successResponse$: Observable<any>;
  


  constructor(private readonly facade: CartContainerFacade) {}

  ngOnInit(): void {
    this.initializeSubscriptions();
  }
  private initializeSubscriptions(): void {
    this.cart$ = this.facade.cart$();
    this.errorResponse$ = this.facade.responseErrorCart$();
    this.successResponse$ = this.facade.responseSuccessCart$();
  }

  onRemoveFromCart(copieId: string): void {
    this.facade.removeCopieFromCart(copieId);
  }
  onClearCart(): void {
    this.facade.clearCart();
  }

  onCheckoutCart(checkoutRequest: IloanRequest): void {
    this.facade.checkoutCart(checkoutRequest);
  }
}
