import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { PlacesComponent } from './places/places.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'episodes',
    component: EpisodesComponent
  },
  {
    path: 'places',
    component: PlacesComponent
  },
  {
    path: '**',
    redirectTo: 'search'
  }
]


@NgModule({
  imports: [ RouterModule.forChild( routes ), ],
  exports: [ RouterModule ]
})
export class ComponentsRoutingModule { }
