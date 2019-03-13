import { HeroEditComponent } from './hero-edit/hero-edit.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', //localhost:4200
    component : HeroesListComponent
  },
  {
    path: 'edit/:id', //localhost:4200/edit  // les : devant id servent à intyroduire un paramètre dynamique dans la variable
    component: HeroEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
