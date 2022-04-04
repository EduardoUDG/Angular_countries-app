import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';


  constructor() { }


  search(): void {
    if( this.term.trim().length > 0 ) {
      console.log( this.term );
      this.term = '';
    }
  }

}
