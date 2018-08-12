import { Action } from '@ngrx/store';

import { CocktailEntity } from '../interfases/cocktail-entity';
import { ServerError } from '../interfases/server-error';

export enum CocktailEntityActionsTypes {
  COCKTAIL_LOAD_START = '[Cocktail] LoadStart',
  COCKTAIL_LOAD_SUCCESS = '[Cocktail] LoadSuccess',
  COCKTAIL_LOAD_ERROR = '[Cocktail] LoadError',
  COCKTAIL_RESET = '[Cocktail] Reset',
}

export class LoadStart implements Action {
  readonly type = CocktailEntityActionsTypes.COCKTAIL_LOAD_START;
  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = CocktailEntityActionsTypes.COCKTAIL_LOAD_SUCCESS;
  constructor(public payload: CocktailEntity) {}
}

export class LoadError implements Action {
  readonly type = CocktailEntityActionsTypes.COCKTAIL_LOAD_ERROR;
  constructor(public payload: ServerError) {}
}

export class Reset implements Action {
  readonly type = CocktailEntityActionsTypes.COCKTAIL_RESET;
}

export type CocktailEntityActionsUnion = LoadStart | LoadSuccess | LoadError | Reset;
