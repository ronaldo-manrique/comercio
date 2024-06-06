import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemComponent } from '../../elements/cart-item/cart-item.component';

import { IloanRequest } from '../../../core/models/loan-request.models';
import { ICopieModel } from '../../../core/models/ICopiesModel';

@Component({
  selector: 'app-cart-block',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart-block.component.html',
  styleUrl: './cart-block.component.css',
})
export class CartBlockComponent implements OnInit {
  @Input() selectedBooks: ICopieModel[];
  @Output() removeToCopieEvent = new EventEmitter<string>();
  @Output() clearCartEvent = new EventEmitter();

  returnDate: number = 15;
  maxReturnDate: string;
  today = new Date();
  constructor() {
    const maxDate = new Date(this.today.getTime() + 14 * 24 * 60 * 60 * 1000);
    this.maxReturnDate = maxDate.toISOString().split('T')[0];
  }


  ngOnInit(): void { }
  

  deleteCopieFromCart(copieId: string) {
    this.removeToCopieEvent.emit(copieId);
  }

  clearCart(){
   this.clearCartEvent.emit();
  }

  checkout(selectedBooks:ICopieModel[]) {
    const loanRequest:IloanRequest={
      userId:'default',
      days:this.returnDate,
      copies:selectedBooks.map(b=>b.id)
    }

    console.log(loanRequest);
  }

  updateReturnDate(event: Event) {
    const target = event.target as HTMLInputElement;
    const daysDifference = this.calculateDaysDifference(target.value);
    this.returnDate = daysDifference;
    console.log(daysDifference);
  }

  calculateDaysDifference(selectedDate: string): number {
    const selectedDateObj = new Date(selectedDate);
    const timeDifference = selectedDateObj.getTime() - this.today.getTime();
    const daysDifference =
      Math.ceil(timeDifference / (1000 * 60 * 60 * 24)) + 1;
    return daysDifference;
  }
}
