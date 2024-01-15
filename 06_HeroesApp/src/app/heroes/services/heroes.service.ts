import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { enviroment } from 'enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl = enviroment.baseUrl

  constructor(private http: HttpClient){}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
  }

}
