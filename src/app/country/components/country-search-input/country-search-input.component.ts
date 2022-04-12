import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-search-input',
  templateUrl: './country-search-input.component.html',
  styles: [
  ]
})
export class CountrySearchInputComponent implements OnInit{

  @Input() placeholder: string= '';

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  term: string = '';


  ngOnInit()  {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe( value => {
      this.onDebounce.emit( value )
    })
  }

  keyPressed() {
    this.debouncer.next( this.term )
  }

  search() {
    this.onEnter.emit( this.term );
  }

}
