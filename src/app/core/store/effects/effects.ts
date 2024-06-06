import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetCopiesService } from '../../services/copies.service';
import * as CopiesActions from '../actions/actions';
import { catchError, map, mergeMap, of } from 'rxjs';


@Injectable()
export class CopiesEffects {
  constructor(
    private actions$: Actions,
    private copiesService: GetCopiesService
  ) {}


  loadCopies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CopiesActions.loadCopies),
      mergeMap(() =>
        this.copiesService.getCopies().pipe(
          map(copies => CopiesActions.loadCopiesSuccess({ copies })),
          catchError(error => of(CopiesActions.loadCopiesFailure({ error })))
        )
      )
    )
  );






}
