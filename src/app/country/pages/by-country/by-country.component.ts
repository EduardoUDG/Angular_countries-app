import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/contry.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];


  constructor( private countryService: CountryService ) { }



  search( term: string ): void {
    this.hasError = false;
    this.term     = term;
    console.log( this.term );

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
    
  }
}
