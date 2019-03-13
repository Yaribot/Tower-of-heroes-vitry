import { Hero } from './../types/hero.type';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

//  quand on déclare une variable de class on ne précise pas "let"
  heroes: Hero[] = [];
  heroToAdd = '';
  selectedHero: Hero;
  constructor(private heroesService: HeroesService) { // HeroesService= type; heroesService:le nom

  }

  ngOnInit() {
     //déplacer une ligne alt + flèche du haut ou du bas
    this.heroesService.getHeroes().subscribe(
      (heroes: Hero[]) => this.heroes = heroes // function(Hero[]) { return this.heroes = heroes; } en javascript
    );
  }
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
  addHero() {
    const heroName = 'Red hood';
    // si heroToAdd = '      coucou    ';
    // alors heroToAdd.trim() = 'coucou';
    // donc si heroToAdd = '        ';
    // alors heroToAdd.trim() = '';
    if (this.heroToAdd.trim().length > 0) {

      this.heroesService.createHero(this.heroToAdd).subscribe(
        (hero: Hero) => this.heroes.push(hero)
      );
      this.heroToAdd = '';
    }
    else {
      alert('Le nom du héro ne doit pas être vide');

    }
  }
}
