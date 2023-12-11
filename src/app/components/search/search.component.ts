import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharactersService } from '../../services/characters.service';
import { PlacesService } from '../../services/places.service';
import { EpisodesService } from '../../services/episodes.service';
import { Result as Character } from '../../interfaces/characters';
import { Result as Location } from '../../interfaces/locations';
import { Result as Episode } from '../../interfaces/episodes';
import { PageEvent } from '@angular/material/paginator';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  characters: Character[] = [];
  pagesChar: number = 0;
  locations: Location[] = [];
  pagesLoc: number = 0;
  episodes: Episode[] = [];
  pagesEpi: number = 0;

  constructor (private charactersService: CharactersService, private episodesService: EpisodesService, private placesService: PlacesService, public dialog: MatDialog) {

  }

  searchCharEpiLoc( term: string ): void {
    console.log(term)

    this.charactersService.searchCharacterTerm(1, term).subscribe(character => {
      this.characters = character.results;
      this.pagesChar = character.info.count;
    })
    this.episodesService.searchEpisodeTerm(1, term).subscribe(episode => {
      this.episodes = episode.results;
      this.pagesEpi = episode.info.count;
    })
    this.placesService.searchPlaceTerm(1, term).subscribe(location => {
      this.locations = location.results;
      this.pagesLoc = location.info.count;
    })
  }

  searchCharacters(e: PageEvent, term: string, info: string) {
    console.log(e);
    if (info === "char") {
      this.charactersService.searchCharacterTerm(e.pageIndex + 1, term).subscribe( characters => {
        this.characters = characters.results;
        this.pagesChar = characters.info.count;
      });
    }
    if (info === "epi") {
      this.episodesService.searchEpisodeTerm(e.pageIndex + 1, term).subscribe( episode => {
        this.episodes = episode.results;
        this.pagesEpi = episode.info.count;
      });
    }
    if (info === "loc") {
      this.placesService.searchPlaceTerm(e.pageIndex + 1, term).subscribe( location => {
        this.locations = location.results;
        this.pagesLoc = location.info.count;
      });
    }
  }

  openDialogChar(character: Character) {
    const dialogRef = this.dialog.open(DialogComponent, { data: { resultChar: character, info: "character" } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogLoc(location: Location) {
    const dialogRef = this.dialog.open(DialogComponent, { data: { resultLoc: location, info: "location" } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEpi(episode: Episode) {
    const dialogRef = this.dialog.open(DialogComponent, { data: { resultEpi: episode, info: "episode" } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
