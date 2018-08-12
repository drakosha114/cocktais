import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { CocktailsApiService } from '../services/cocktails-api.service';

import { CocktailEntityActionsTypes } from '../actions/cocktail-entity.actions';

@Injectable()
export class CocktailsEntityEffects {

  @Effect()
  cocktailEntity$: Observable<Action> = this.actions$.pipe(
    ofType(CocktailEntityActionsTypes.COCKTAIL_LOAD_START),
    mergeMap(action =>
      this.api.getCocktail(action).pipe(
        map(data => ({ type: CocktailEntityActionsTypes.COCKTAIL_LOAD_SUCCESS, payload: data })),
        catchError((error) => {
          console.log(error);
          return of({ type: CocktailEntityActionsTypes.COCKTAIL_LOAD_ERROR,  payload: {status: error.status, message: error.message}});
        })
      )
    )
  );

  constructor(private api: CocktailsApiService, private actions$: Actions) {}
}
