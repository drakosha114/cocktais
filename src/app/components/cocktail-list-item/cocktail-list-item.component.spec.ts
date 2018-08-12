import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailListItemComponent } from './cocktail-list-item.component';

describe('CocktailListItemComponent', () => {
  let component: CocktailListItemComponent;
  let fixture: ComponentFixture<CocktailListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
