import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) { }

  get httpParams(){
    return new HttpParams().set('fields', 'flags,capital,name,population,cca2');
  }

  searchByCountry = (searched: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/name/${searched}`;
    return this.http.get<Country[]>(url);
  }

  searchByCapital = (searched: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/capital/${searched}`;
    return this.http.get<Country[]>(url);
  }

  getCountryByCode = (id: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  searchByRegion = (region: string): Observable<Country[]> => {
    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url,{params: this.httpParams});
  }
}
