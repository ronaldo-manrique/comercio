import { createReducer, on } from "@ngrx/store";
import { ICopieModel } from "../../model/ICopiesModel";
import * as CopiesActions from "../actions/actions";

export interface CopiesState {
    copies: ICopieModel[];    
    loading: boolean;
    error: any; 
}

export const initialState: CopiesState = {
    copies: [], 
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
    }))

)





  


