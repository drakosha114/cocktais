import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-cocktail-modal',
  templateUrl: './cocktail-modal.component.html',
  styleUrls: ['./cocktail-modal.component.css'],
})
export class CocktailModalComponent implements OnInit {

  id: string;

  constructor(private bottomSheetRef: MatBottomSheetRef<CocktailModalComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
     this.id = data.id;
  }

  ngOnInit() {
  }

}
