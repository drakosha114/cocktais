import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import {CocktailsList} from '../../interfases/cocktails-list';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.css']
})
export class CocktailsListComponent implements OnInit {

  @Input() isLoading = false;
  @Input() isLoaded = false;
  @Input() items: Array<CocktailsList> = [];
  @Output() itemPressHandler = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onPress(id: string) {
    this.itemPressHandler.emit(id);
  }
}
