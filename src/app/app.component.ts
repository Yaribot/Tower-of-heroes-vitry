import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = [
    'Superman',
    'Wonderwoman',
    'Batman',
  ];
  name = '';
  heroToAdd = '';
  // on a crée une fonction l'intérieur d'une class ce qui en fait une méthode
  // this représente l'objet quio à été crée à partir de la class
  addHero() {
    const heroName = 'Red hood';
    // si heroToAdd = '      coucou    ';
    // alors heroToAdd.trim() = 'coucou';
    // donc si heroToAdd = '        ';
    // alors heroToAdd.trim() = '';
    if(this.heroToAdd.trim().length > 0){
      this.heroes.push(this.heroToAdd.trim());
      this.heroToAdd = '';
      }
    else {
      alert('Le nom du héro ne doit pas être vide');
    
    }
  }
}
