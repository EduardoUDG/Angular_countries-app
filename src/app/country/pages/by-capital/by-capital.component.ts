import { Component } from '@angular/core';
import { Country } from '../../interfaces/contry.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {

  term: string = '';
  hasError: boolean = false;
  countries: Country[] = [];


  constructor( private countryService: CountryService ) { }


  search( term: string ): void {
    this.hasError = false;
    this.term     = term;
    console.log( this.term );

    this.countryService.serachCapital( term )
      .subscribe( ( countries ) => {
        this.countries = countries;
      }, ( err ) => {
        this.hasError   = true;
        this.countries  = [];
      });
  }

}
