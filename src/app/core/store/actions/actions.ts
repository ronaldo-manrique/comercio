
import { createAction, props } from "@ngrx/store";
import { ICopieModel } from "../../models/ICopiesModel";


export const loadCopies = createAction('[Copies] Load copies');
export const loadCopiesSuccess = createAction('[Copies] Load copies Success', props<{ copies: ICopieModel[] }>());
export const loadCopiesFailure = createAction('[Copies] Load copies Failure', props<{ error: any }>());



export const addCopieToCart = createAction('[Copies] Add Copie to cart', props<{ copie: ICopieModel }>());
export const removeCopieFromCart = createAction('[Copies] Remove Copie from cart', props<{ copieId: string }>());
export const clearCart = createAction('[Copies] Clear Cart');

