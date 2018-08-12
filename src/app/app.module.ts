import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

import { P404Component } from './screens/p404/p404.component';
import { CocktailsComponent } from './screens/cocktails/cocktails.component';

import { CocktailsApiService } from './services/cocktails-api.service';

import { reducers } from './reducers/';
import { CocktailsListEffects } from './effects/cocktails-list.effects';
import { CocktailsEntityEffects } from './effects/cocktail-entity.effects';

import { PageTitleComponent } from './components/page-title/page-title.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { DebounceInputDirective } from './directives/debounceInput/debounce-input.directive';
import { CocktailListItemComponent } from './components/cocktail-list-item/cocktail-list-item.component';
import { CocktailCardComponent } from './components/cocktail-card/cocktail-card.component';
import { CocktailModalComponent } from './components/cocktail-modal/cocktail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    P404Component,
    CocktailsComponent,
    PageTitleComponent,
    SearchInputComponent,
    CocktailsListComponent,
    DebounceInputDirective,
    CocktailListItemComponent,
    CocktailCardComponent,
    CocktailModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot( reducers ),
    EffectsModule.forRoot([CocktailsListEffects, CocktailsEntityEffects]),
    AppRouterModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatBottomSheetModule,
  ],
  providers: [
    CocktailsApiService,
  ],
  entryComponents: [
    CocktailModalComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
