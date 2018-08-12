import { CocktailEntity } from '../interfases/cocktail-entity';
import { CocktailsListModel } from './cocktails-list.model';

export class CocktailEntityModel extends CocktailsListModel implements CocktailEntity {
  strCategory = null;
  strAlcoholic = null;
  strInstructions = null;
  strDrinkThumb = null;
  constructor(data: any = {}) {
    super(data);
    this.strCategory = data.strCategory;
    this.strAlcoholic = data.strAlcoholic;
    this.strInstructions = data.strInstructions;
    this.strDrinkThumb =  data.strDrinkThumb;
  }
}
