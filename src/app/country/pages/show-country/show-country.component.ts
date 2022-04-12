import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';


@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {


  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getCountryByAlpha( id ) )
      )
      .subscribe( resp => {
        console.log( resp );
      })

  }

}
