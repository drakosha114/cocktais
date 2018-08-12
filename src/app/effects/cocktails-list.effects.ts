import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { CocktailsApiService } from '../services/cocktails-api.service';

import { CocktailsListActionsTypes } from '../actions/cocktais-list.actions';

@Injectable()
export class CocktailsListEffects {
  @Effect()
  cocktailsList$: Observable<Action> = this.actions$.pipe(
    ofType(CocktailsListActionsTypes.COCKTAILS_LOAD_START),
    mergeMap(action =>
      this.api.searchCocktails(action).pipe(
        map(data => ({ type: CocktailsListActionsTypes.COCKTAILS_LOAD_SUCCESS, payload: data })),
        catchError((error) => {
          console.log(error);
          return of({ type: CocktailsListActionsTypes.COCKTAILS_LOAD_ERROR,  payload: {status: error.status, message: error.message}});
        })
      )
    )
  );

  constructor(private api: CocktailsApiService, private actions$: Actions) {}
}
