import { CocktailsList } from '../interfases/cocktails-list';

export class CocktailsListModel implements CocktailsList {
  idDrink = null;
  strDrink = null;
  constructor(data: any = {}) {
    this.idDrink = data.idDrink;
    this.strDrink = data.strDrink;
  }
}
