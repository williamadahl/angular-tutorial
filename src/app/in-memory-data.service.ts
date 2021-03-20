import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const heroes = [
      {id: 11, name: 'Dr Nasty'},
      {id: 12, name: 'Narcos'},
      {id: 13, name: 'Bomboon'},
      {id: 14, name: 'Cliteritas'},
      {id: 15, name: 'Smegma'},
      {id: 16, name: 'CondomMan'},
      {id: 17, name: 'DynaMama'},
      {id: 18, name: 'Dr lowIQ'},
      {id: 19, name: 'Smegarella'},
      {id: 20, name: 'Tornada'}
    ];
    return {heroes};
  }
  constructor() { }

  genId(heroes: Hero[]): number {
    return heroes.length > 0? Math.max(...heroes.map(hero => hero.id)) +1 :11;
  }
}
