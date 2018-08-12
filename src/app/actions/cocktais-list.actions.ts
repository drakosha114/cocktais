import { Action } from '@ngrx/store';

import { CocktailsList } from '../interfases/cocktails-list';
import { ServerError } from '../interfases/server-error';

export enum CocktailsListActionsTypes {
  COCKTAILS_LOAD_START = '[Cocktails] LoadStart',
  COCKTAILS_LOAD_SUCCESS = '[Cocktails] LoadSuccess',
  COCKTAILS_LOAD_ERROR = '[Cocktails] LoadError',
  COCKTAILS_RESET = '[Cocktails] Reset',
}

export class LoadStart implements Action {
  readonly type = CocktailsListActionsTypes.COCKTAILS_LOAD_START;
  constructor(public payload: string) {}
}

export class LoadSuccess implements Action {
  readonly type = CocktailsListActionsTypes.COCKTAILS_LOAD_SUCCESS;
  constructor(public payload: Array<CocktailsList>) {}
}

export class LoadError implements Action {
  readonly type = CocktailsListActionsTypes.COCKTAILS_LOAD_ERROR;
  constructor(public payload: ServerError) {}
}

export class Reset implements Action {
  readonly type = CocktailsListActionsTypes.COCKTAILS_RESET;
}

export type CocktailsListActionsUnion = LoadStart | LoadSuccess | LoadError | Reset;
