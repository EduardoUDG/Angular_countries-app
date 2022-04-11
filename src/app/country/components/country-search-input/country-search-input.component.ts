import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-search-input',
  templateUrl: './country-search-input.component.html',
  styles: [
  ]
})
export class CountrySearchInputComponent {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  term: string = '';


  constructor() { }


  search() {
    this.onEnter.emit( this.term );
  }



}
