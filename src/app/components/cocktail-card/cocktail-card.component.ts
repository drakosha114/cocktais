import { Component, OnInit, Input, OnDestroy} from '@angular/core';
import {select, Store} from '@ngrx/store';
import { Subscription } from 'rxjs';

import { CocktailEntity } from '../../interfases/cocktail-entity';
import { CocktailEntityStateInterface } from '../../reducers/cocktail-entity.reducer';

import * as Cocktail from '../../actions/cocktail-entity.actions';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.css']
})
export class CocktailCardComponent implements OnInit, OnDestroy {

  cocktail: CocktailEntity = null;
  isLoading = false;
  isLoaded = false;

  private subscription: Subscription;

  @Input() id: string = null;

  constructor(private store: Store<CocktailEntityStateInterface>) {

    this.subscription = store.pipe(select(fromRoot.selectCocktail)).subscribe((state: CocktailEntityStateInterface) => {
      const { isLoading, isLoaded, item} = state;
      this.isLoading = isLoading;
      this.isLoaded = isLoaded;
      this.cocktail = item;
    });
  }

  ngOnInit() {
    this.store.dispatch(new Cocktail.LoadStart(this.id));
  }

  ngOnDestroy() {
    this.store.dispatch(new Cocktail.Reset());
    this.subscription.unsubscribe();
  }

}
