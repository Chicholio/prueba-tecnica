import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';
import { MatDialog } from '@angular/material/dialog';
import { Result } from '../../interfaces/locations';
import { PageEvent } from '@angular/material/paginator';
import { CharactersService } from '../../services/characters.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrl: './places.component.css'
})
export class PlacesComponent implements OnInit {
  locations: Result[] = [];
  pages: number = 0;

  constructor(private placesService: PlacesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchForPage();
  }

  searchForPage(){
    this.placesService.searchsPlaces(1).subscribe( locations => {
      this.locations = locations.results;
      this.pages = locations.info.count;
    });
  }

  searchCharacters(e: PageEvent) {
    console.log(e);
    this.placesService.searchsPlaces(e.pageIndex + 1).subscribe( locations => {
      this.locations = locations.results;
      this.pages = locations.info.count;
    });
  }

  openDialog(location: Result) {
    const dialogRef = this.dialog.open(DialogComponent, { data: { resultLoc: location, info: "location" } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
