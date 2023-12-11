import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { PlacesComponent } from './components/places/places.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'api',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
  },
  {
    path: '**',
    redirectTo: 'api'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
