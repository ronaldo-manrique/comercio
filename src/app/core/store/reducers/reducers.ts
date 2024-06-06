import { createReducer, on } from "@ngrx/store";
import { ICopieModel } from "../../models/ICopiesModel";
import * as CopiesActions from "../actions/actions";

export interface CopiesState {
    copies: ICopieModel[]; 
    cart: ICopieModel[];   
    loading: boolean;
    error: any; 
}

export const initialState: CopiesState = {
    copies: [], 
    cart: [],
    loading: false,
    error: null,    
};

export const copiesReducer = createReducer(
    initialState,
    on(CopiesActions.loadCopies, (state) => ({ ...state, loading: true })),

    on(CopiesActions.loadCopiesSuccess, (state, { copies }) => ({
      ...state,
      copies,
      loading: false,
    })),
    
    on(CopiesActions.loadCopiesFailure, (state, { error }) => ({
      ...state,
      error,
      loading: false,
    })),

    // ====== cart actions=====
    // on(CopiesActions.addCopieToCart, (state, { copie }) => ({
    //   ...state,
    //   cart: [...state.cart, copie],
    // })),
    on(CopiesActions.addCopieToCart, (state, { copie }) => {
      const isBookInCart = state.cart.some(item => item.id === copie.id);
      return {
        ...state,
        cart: isBookInCart ? state.cart : [...state.cart, copie],
      };
    }),


    on(CopiesActions.removeCopieFromCart, (state, { copieId }) => ({
      ...state,
      cart: state.cart.filter(item => item.id !== copieId),
    })),

    on(CopiesActions.clearCart, (state) => ({ ...state, cart: [] })),






)





  


