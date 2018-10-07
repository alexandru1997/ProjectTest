import { Injectable } from '@angular/core';
import { Hero } from 'src/app/hero';
import { Observable, of } from 'rxjs';
import { MessageService} from './message.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched hero od=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }
}
