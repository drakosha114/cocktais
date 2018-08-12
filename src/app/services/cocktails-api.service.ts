import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import {Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CocktailsListModel } from '../models/cocktails-list.model';
import { CocktailsList } from '../interfases/cocktails-list';
import { CocktailEntity } from '../interfases/cocktail-entity';
import { CocktailEntityModel } from '../models/cocktail-entity.model';

const { apiEndpoints: { cocktail, cocktails }, apiUrl} = environment;

const cocktailsUrl = `${apiUrl}/${cocktails}`;
const cocktailUrl = `${apiUrl}/${cocktail}`;

export interface CoctailsResponceData {
  drinks: Array<Object>;
}

function normalizeCocktailsData(data: any): Array<CocktailsList> {

  if (!data || typeof data !== 'object') {
    return [];
  }
  const { drinks } = data;

  return drinks && Array.isArray(drinks) ?
    drinks.map(item => new CocktailsListModel(item)) : [];
}

function normailzeCocktailData(data: any): CocktailEntity | null {
  if (!data || typeof data !== 'object') {
    return null;
  }
  const {drinks} = data;

  return drinks && Array.isArray(drinks) && drinks.length ?
    drinks.map(item => new CocktailEntityModel(item)).splice(0, 1).reduce((res, item) => item) :
    null;
}



@Injectable({
  providedIn: 'root'
})
export class CocktailsApiService {

  constructor( private http: HttpClient) {}

  searchCocktails(searchString: any): Observable<CoctailsResponceData | Object> {
    const options = searchString.payload ?
      { params: new HttpParams().set('s', searchString.payload) } : {};
    return this.http.get(cocktailsUrl, options)
      .pipe(
        map(data => normalizeCocktailsData(data)) ,
        catchError(error =>  throwError(error))
      );
  }

  getCocktail(id: any): Observable<CoctailsResponceData | Object> {
    const options = id.payload ?
      { params: new HttpParams().set('i', id.payload) } : {};

    return this.http.get(cocktailUrl, options)
      .pipe(
        map(data => normailzeCocktailData(data)) ,
        catchError(error =>  throwError(error))
      );
  }
}
