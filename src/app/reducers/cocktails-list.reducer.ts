import {CocktailsListActionsTypes, CocktailsListActionsUnion} from '../actions/cocktais-list.actions';
import { State } from './index';
import {CocktailsList} from '../interfases/cocktails-list';

export interface CocktailsListStateInterface {
  items: Array<CocktailsList>;
  isLoading: boolean;
  isLoaded: boolean;
}

const defautState: CocktailsListStateInterface = {
  items: [],
  isLoading: false,
  isLoaded: false,
};

export const selectCocktails = (state: State) => state.cocktails;

export function cocktailslistReducer (
  state: CocktailsListStateInterface = defautState,
  action: CocktailsListActionsUnion): CocktailsListStateInterface {

  switch (action.type) {
    case CocktailsListActionsTypes.COCKTAILS_LOAD_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CocktailsListActionsTypes.COCKTAILS_LOAD_SUCCESS: {
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        items: action.payload
      };
    }
    case CocktailsListActionsTypes.COCKTAILS_LOAD_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
      };
    }
    case CocktailsListActionsTypes.COCKTAILS_RESET: {
      return defautState;
    }
    default: {
      return state;
    }
  }
}
