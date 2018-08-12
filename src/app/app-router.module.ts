import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CocktailsComponent } from './screens/cocktails/cocktails.component';
import { P404Component } from './screens/p404/p404.component';

const appRoutes: Routes = [{
  path: '',
  component: CocktailsComponent,
  pathMatch: 'full',
}, {
  path: '**',
  component: P404Component
}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {

}
