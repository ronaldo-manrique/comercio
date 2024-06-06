import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class CartContainerFacade {
  private subscriptions: Subscription;

  constructor(
   // private readonly appState: AppState,

  ) {}

}
