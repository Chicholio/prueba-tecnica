import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharactersService } from '../../services/characters.service';
import { Result as Character } from '../../interfaces/characters';
import { Result as Location } from '../../interfaces/locations';
import { Result as Episode } from '../../interfaces/episodes';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { resultChar?: Character, resultLoc?: Location, resultEpi?: Episode, info: string } ) {}
}
