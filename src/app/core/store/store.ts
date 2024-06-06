import { Action, ActionReducer } from "@ngrx/store";
import { CopiesState, copiesReducer } from "./reducers/reducers";
import { CopiesEffects } from "./effects/effects";



export interface AppState {
    copies: CopiesState;
  }
  
  export interface AppStore {
    copies: ActionReducer<CopiesState, Action>;
  }
  
  export const appStore: AppStore = {
    copies: copiesReducer,
  };
  
  
export const appEffects = [CopiesEffects];