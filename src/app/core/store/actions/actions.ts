
import { createAction, props } from "@ngrx/store";
import { ICopieModel } from "../../model/ICopiesModel";


export const loadCopies = createAction('[Copies] Load copies');
export const loadCopiesSuccess = createAction('[Copies] Load copies Success', props<{ copies: ICopieModel[] }>());
export const loadCopiesFailure = createAction('[Copies] Load copies Failure', props<{ error: any }>());


