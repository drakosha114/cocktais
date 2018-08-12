import { CocktailsList } from './cocktails-list';
export interface CocktailEntity extends CocktailsList {
  strCategory: string;
  strAlcoholic: string;
  strInstructions: string;
  strDrinkThumb: string;
}
