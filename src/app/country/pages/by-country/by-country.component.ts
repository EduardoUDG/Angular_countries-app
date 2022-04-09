import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {

  term: string = '';
  hasError: boolean = false;


  constructor( private countryService: CountryService ) { }



  search(): void {
    this.hasError = false;
    console.log( this.term );

    this.countryService.serachContry( this.term )
      .subscribe( ( countries ) => {
        console.log( countries );
      }, ( err ) => {
        this.hasError = true;
      });
  }

}
