import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../core/store/store';
import { ICopieModel } from '../../core/models/ICopiesModel';
import { selectCart } from '../../core/store/selectors/selectors';
import * as CopiesActions from '../../core/store/actions/actions';

@Injectable({
  providedIn: 'root',
})
export class CartContainerFacade {
  constructor(private store: Store<AppState>) {}

  cart$(): Observable<ICopieModel[]> {
    return this.store.select(selectCart);
  }

  removeCopieFromCart(copieId: string): void {
    this.store.dispatch(CopiesActions.removeCopieFromCart({ copieId }));
  }

  clearCart(): void {
    this.store.dispatch(CopiesActions.clearCart());
  }
}
