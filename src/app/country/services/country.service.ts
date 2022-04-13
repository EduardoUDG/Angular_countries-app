import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { Country } from '../interfaces/contry.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';


  constructor( private http: HttpClient ) { }


  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,population,cca2,flags;')
  }

  serachContry( term: string ):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }


  serachCapital( term: string ):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  getCountryByAlpha( id: string ):Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>( url );
  }

  getRegionByName( region: string ):Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )
      .pipe( tap( console.log ) )
  }


}
