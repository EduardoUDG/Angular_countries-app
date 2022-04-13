import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/contry.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `
  ]
})
export class ByCountryComponent {

  countries         : Country[] = [];
  hasError          : boolean = false;
  showSuggested     : boolean = false;
  suggestedCountries: Country[] = [];
  term              : string = '';


  constructor( private countryService: CountryService ) { }



  search( term: string ): void {
    this.hasError       = false;
    this.showSuggested  = false;
    this.term           = term;

    this.countryService.serachContry( term )
      .subscribe( ( countries ) => {
        console.log( countries );
        this.countries = countries;

      }, ( err ) => {
        this.hasError   = true;
        this.countries  = [];
      });
  }


  suggestion( term:string ) {

    this.hasError = false;
    this.term     = term;
    this.showSuggested = true;
    this.suggestedCountries = [];
    if( term.length < 1 ) return;

    this.hasError = false;

    this.countryService.serachContry( term )
      .subscribe({
        next: (countries) => {
          this.suggestedCountries = countries.splice(0,3);
        },
        error: (error) => {
          this.hasError = true;
        }
      })
  }

  suggestedSearch( term: string ) {
    this.search( term );
  }

}
