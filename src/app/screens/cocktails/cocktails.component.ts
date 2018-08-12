import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { MatBottomSheet } from '@angular/material';
import { CocktailModalComponent } from '../../components/cocktail-modal/cocktail-modal.component';

import { CocktailsList } from '../../interfases/cocktails-list';
import { CocktailsListStateInterface } from '../../reducers/cocktails-list.reducer';

import * as Cocktails from '../../actions/cocktais-list.actions';
import * as fromRoot from '../../reducers/index';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit, OnDestroy {

  isLoading: boolean;
  isLoaded: boolean;
  cocktais: Array<CocktailsList>;

  private subscription: Subscription;

  constructor(private store: Store<CocktailsListStateInterface>, private modal: MatBottomSheet) {
    this.subscription = store.pipe(select(fromRoot.selectCocktails)).subscribe((state: CocktailsListStateInterface) => {
      const { isLoading, isLoaded, items} = state;
      this.isLoading = isLoading;
      this.isLoaded = isLoaded;
      this.cocktais = items;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.store.dispatch(new Cocktails.Reset());
    this.subscription.unsubscribe();
  }

  onChange(event) {
   this.store.dispatch(new Cocktails.LoadStart(event));
  }

  onClear() {
    this.store.dispatch(new Cocktails.Reset());
  }

  onPress(id) {
    this.modal.open(CocktailModalComponent, {data: {id: id}});
  }
}
