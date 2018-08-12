import {
  ActionReducerMap,
  createSelector,
} from '@ngrx/store';

import * as cocktails from './cocktails-list.reducer';
import * as cocktail from './cocktail-entity.reducer';

export interface State {
  cocktails: cocktails.CocktailsListStateInterface;
  cocktail: cocktail.CocktailEntityStateInterface;
}

export const reducers: ActionReducerMap<State> = {
  cocktails: cocktails.cocktailslistReducer,
  cocktail: cocktail.cocktailEntitytReducer
};

export const selectCocktails = createSelector(
  cocktails.selectCocktails,
  (state: cocktails.CocktailsListStateInterface) => state
);

export const selectCocktail = createSelector(
  cocktail.selectCocktail,
  (state: cocktail.CocktailEntityStateInterface) => state
);
