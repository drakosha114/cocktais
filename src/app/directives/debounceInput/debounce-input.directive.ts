import { Directive, EventEmitter, HostListener, Output, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Directive({
  selector: '[appDebounceInput]'
})
export class DebounceInputDirective implements OnInit, OnDestroy {

  @Input() debounceTime = 300;
  @Output() Change = new EventEmitter();
  private $value = new Subject();
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = this.$value.pipe(
      debounceTime(this.debounceTime)
    ).subscribe(event => this.Change.emit(event));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('keyup', ['$event'])
  keyUpHundler(event) {
    event.stopPropagation();
    event.preventDefault();
    this.$value.next(event.target.value);
  }
}
