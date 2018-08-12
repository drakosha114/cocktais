import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  public value = '';


  @Input() debounceTime = 300;

  @Input() placeholder = 'placeholder';

  @Output() ChangeValue = new EventEmitter();

  @Output() ClearValue = new EventEmitter();

  constructor() {

  }

  onChange(event) {
    this.ChangeValue.emit(event);
  }

  onClear() {
    this.value = '';
    this.ClearValue.emit();
  }
}
