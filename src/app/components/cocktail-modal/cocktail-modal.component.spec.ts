import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailModalComponent } from './cocktail-modal.component';

describe('CocktailModalComponent', () => {
  let component: CocktailModalComponent;
  let fixture: ComponentFixture<CocktailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
