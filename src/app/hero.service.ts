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


  private heroesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched hero od=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }

  private log(message: string) {
    this.messageService.add('HeroService: ${message)');
  }
}
