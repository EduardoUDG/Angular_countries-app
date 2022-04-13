import { Component } from '@angular/core';
import { Country } from '../../interfaces/contry.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class ByRegionComponent {

  activeRegion    : string  = '';
  countries       : Country[] = [];
  regions         : string[]= ['africa', 'americas', 'asia', 'europe', 'oceania'];


  constructor( private countryService: CountryService ) { }

  getClassCss( region:string ): string {
    return ( region === this.activeRegion )
            ? 'btn btn-primary'
            : 'btn btn-outline-primary';
  }


  activateRegion( region: string ) {

    if( this.activeRegion === region ) return;

    this.activeRegion = region;
    this.countries    = [];

    this.countryService.getRegionByName( region )
      .subscribe({
        next: countries => {
          this.countries = countries;
        },
      });
  }


}
