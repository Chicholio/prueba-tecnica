import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsRoutingModule } from './components-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { PlacesComponent } from './places/places.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    CharactersComponent,
    PlacesComponent,
    EpisodesComponent,
    DialogComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MaterialModule
  ],
  exports: [DialogComponent]
})
export class ComponentsModule { }
