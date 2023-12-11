import { Component, OnInit } from '@angular/core';
import { Characters, Result } from '../../interfaces/characters';
import { CharactersService } from '../../services/characters.service';
import { PageEvent } from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters: Result[] = [];
  pages: number = 0;

  constructor(private charactersService: CharactersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchForPage();
  }

  searchForPage(){
    this.charactersService.searchsCharacters(1).subscribe( characters => {
      this.characters = characters.results;
      this.pages = characters.info.count;
    });
  }

  searchCharacters(e: PageEvent) {
    console.log(e);
    this.charactersService.searchsCharacters(e.pageIndex + 1).subscribe( characters => {
      this.characters = characters.results;
      this.pages = characters.info.count;
    });
  }

  openDialog(character: Result) {
    const dialogRef = this.dialog.open(DialogComponent, { data: { resultChar: character, info: "character" } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
