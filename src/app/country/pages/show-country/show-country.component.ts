import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/contry.interface';
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
      .subscribe( ({ id }) => {
        console.log( id );

        this.countryService.getCountryByAlpha( id )
          .subscribe({
            next: country => {
              console.log( country );
            },
            error: error => {
              console.log('Hubo un erro');
            }
          });


      });
  }

}
