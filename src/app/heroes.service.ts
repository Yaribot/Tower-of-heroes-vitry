import { Hero } from './types/hero.type';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-Type' : 'application/json'
});

const httpOptions = { headers };

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  private heroesUrl = 'api/heroes';
  constructor(private http: HttpClient) {

  }
  // <Hero[]>désigne un observable qui retournera plus tard un tableau de Hero. Le lien entre Observable et Hero[] est exprimé grace à la généricité (présence de chevrons <>)
  getHeroes(): Observable<Hero[]> { //les chevron ici veulent dire que l'observable va retourner des Hero
  // La généricité permet aussi de dire à notre client http que nous lui demandons de créer un Observable  qui nous renverra un tableau de héros
    return this.http.get<Hero[]>(this.heroesUrl); // get va renvoyer des observables de héros (généricité)
  }
  createHero(name: string): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, { name }, httpOptions);
  }
  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + '/' + id);



    // return this.heroes.find(function(hero){  Méthode JavaScript
    //   return hero.id ===id;
    // });

    // for (let i=0; i <this.heroes.length; i++) {
      // for(const hero of this.heroes){
      // const hero = this.heroes[i];
      // if(id === hero.id) {
        // return hero;
      // }
    // }
    // return null;
  }

}
