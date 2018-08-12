import { CocktailEntityActionsTypes, CocktailEntityActionsUnion } from '../actions/cocktail-entity.actions';
import { State } from './index';
import { CocktailEntity } from '../interfases/cocktail-entity';


export interface CocktailEntityStateInterface {
  item:  CocktailEntity;
  isLoading: boolean;
  isLoaded: boolean;
}

const defautState: CocktailEntityStateInterface = {
  item: null,
  isLoading: false,
  isLoaded: false,
};

export const selectCocktail = (state: State) => state.cocktail;

export function cocktailEntitytReducer (
  state: CocktailEntityStateInterface = defautState,
  action: CocktailEntityActionsUnion): CocktailEntityStateInterface {

  switch (action.type) {
    case CocktailEntityActionsTypes.COCKTAIL_LOAD_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CocktailEntityActionsTypes.COCKTAIL_LOAD_SUCCESS: {
      return {
        ...state,
        isLoaded: true,
        isLoading: false,
        item: action.payload,
      };
    }
    case CocktailEntityActionsTypes.COCKTAIL_LOAD_ERROR: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
      };
    }
    case CocktailEntityActionsTypes.COCKTAIL_RESET: {
      return defautState;
    }
    default: {
      return state;
    }
  }
}
