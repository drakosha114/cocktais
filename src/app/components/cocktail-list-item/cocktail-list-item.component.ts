import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CocktailsList } from '../../interfases/cocktails-list';

@Component({
  selector: 'app-cocktail-list-item',
  templateUrl: './cocktail-list-item.component.html',
  styleUrls: ['./cocktail-list-item.component.css']
})
export class CocktailListItemComponent implements OnInit {

  @Input() cocktail: CocktailsList = null;
  @Output() pressHandler = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPress(id: string) {
    this.pressHandler.emit(id);
  }
}
