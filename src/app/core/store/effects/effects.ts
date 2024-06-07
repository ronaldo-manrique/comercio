import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetCopiesService } from '../../services/copies.service';
import * as CopiesActions from '../actions/actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { LoanCopiesService } from '../../services/loan-copies.service';
import { AppState } from '../store';
import { Store } from '@ngrx/store';

@Injectable()
export class CopiesEffects {
  constructor(
    private actions$: Actions,
    private copiesService: GetCopiesService,
    private loanService: LoanCopiesService,
    private store: Store<AppState>
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

  // checkoutCart$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(CopiesActions.checkoutCart),
  //     mergeMap((action) =>
  //       this.loanService.createLoanCopies(action.checkoutRequest).pipe(
  //         map((response) =>
  //           CopiesActions.checkoutCartSuccess({ response: true })
  //         ),

  //         catchError((error) =>
  //           of(CopiesActions.checkoutCartFailure({ error }))
  //         )
  //       )
  //     )
  //   )
  // );

  checkoutCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CopiesActions.checkoutCart),
      mergeMap((action) => {
        this.store.dispatch(CopiesActions.showSpinner());
        return this.loanService.createLoanCopies(action.checkoutRequest).pipe(
          map((response) => {
            this.store.dispatch(CopiesActions.hideSpinner());
            return CopiesActions.checkoutCartSuccess({ response: true });
          }),
          catchError((error) => {
            this.store.dispatch(CopiesActions.hideSpinner());
            return of(CopiesActions.checkoutCartFailure({ error }));
          })
        );
      })
    )
  );




}
