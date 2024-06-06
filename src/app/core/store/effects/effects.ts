import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetCopiesService } from '../../services/copies.service';
import * as CopiesActions from '../actions/actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { LoanCopiesService } from '../../services/loan-copies.service';

@Injectable()
export class CopiesEffects {
  constructor(
    private actions$: Actions,
    private copiesService: GetCopiesService,
    private loanService: LoanCopiesService
  ) {}

  loadCopies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CopiesActions.loadCopies),
      mergeMap(() =>
        this.copiesService.getCopies().pipe(
          map((copies) => CopiesActions.loadCopiesSuccess({ copies })),
          catchError((error) => of(CopiesActions.loadCopiesFailure({ error })))
        )
      )
    )
  );

  checkoutCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CopiesActions.checkoutCart),
      mergeMap((action) =>
        this.loanService.createLoanCopies(action.checkoutRequest).pipe(
          map((response) =>
             CopiesActions.checkoutCartSuccess( { response: true }))
             
          ,          
          catchError((error) =>
            of(CopiesActions.checkoutCartFailure({ error }))
          )
        )
      )
    )
  );

  // checkoutCart$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CopiesActions.checkoutCart),
  //     mergeMap((action) =>
  //       this.loanService.createLoanCopies(action.checkoutRequest).pipe(
  //         map((response) => {
  //           if (response.status === 200) {
  //             return CopiesActions.checkoutCartSuccess({ response: true });
              
  //           }
  //           console.log('response', response);
  //         }),
  //         catchError((error) => {
  //           console.log('error', error);
  //           if (error.status === 400) {
  //             return of(CopiesActions.checkoutCartFailure({ error: error.error }));
  //             console.log('error', error);
  //           } else {
  //             return of(CopiesActions.checkoutCartFailure({ error: 'An unexpected error occurred.' }));
  //             console.log('error', error);
  //           }
            
  //         })
  //       )
  //     )
  //   )
  // );
  


}
