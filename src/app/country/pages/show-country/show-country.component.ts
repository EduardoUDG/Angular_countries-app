import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';
import { Country, Translation } from '../../interfaces/contry.interface';


@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {

  country   !: Country;
  languages !: Translation[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getCountryByAlpha( id ) ),
        tap( console.log )
      )
      .subscribe({
        next: (country: Country[]) => {
          this.country    = country[0]
          const {translations} = country[0];
          this.languages =  Object.values(translations);
        },
        error: (error) => {
          console.log('Hubo un error al mostrar país');
        }
      });
  }

}
