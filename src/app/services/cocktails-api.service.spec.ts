import { TestBed, inject } from '@angular/core/testing';

import { CocktailsApiService } from './cocktails-api.service';

describe('CocktailsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CocktailsApiService]
    });
  });

  it('should be created', inject([CocktailsApiService], (service: CocktailsApiService) => {
    expect(service).toBeTruthy();
  }));
});
