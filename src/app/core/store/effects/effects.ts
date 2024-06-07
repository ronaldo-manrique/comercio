import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetCopiesService } from '../../services/copies.service';
import * as CopiesActions from '../actions/actions';
import * as AuthActions from '../actions/auth.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/generals/storage.service';
import { Router } from '@angular/router';

@Injectable()
export class CopiesEffects {
  constructor(
    private actions$: Actions,
    private copiesService: GetCopiesService,
    private authService: AuthService,
    private readonly storageService: StorageService,
    private router: Router,
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

  loadAuths$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadAuth),
      mergeMap((action) =>
        this.authService.doRefreshToken(action.refreshToken).pipe(
          map((auths) =>{
            this.storageService.set("token",auths.token)
            this.storageService.set("userId",auths.userId)
            this.storageService.set("userName",auths.userName)
            this.router.navigate(['/commerce'])
            return AuthActions.loadAuthSuccess({ auths })
          }),
          catchError((error) => {
            window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0'; //Cambiar a Url de login
            return of(AuthActions.loadAuthFailure({ error }));
          })
        )
      )
    )
  );
}
