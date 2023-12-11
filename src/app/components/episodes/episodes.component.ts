import { Component } from '@angular/core';
import { Result } from '../../interfaces/episodes';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PageEvent } from '@angular/material/paginator';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.css'
})
export class EpisodesComponent {
  episodes: Result[] = [];
  pages: number = 0;

  constructor(private episodesService: EpisodesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.searchForPage();
  }

  searchForPage(){
    this.episodesService.searchsEpisodes(1).subscribe( episode => {
      this.episodes = episode.results;
      this.pages = episode.info.count;
    });
  }

  searchCharacters(e: PageEvent) {
    console.log(e);
    this.episodesService.searchsEpisodes(e.pageIndex + 1).subscribe( episode => {
      this.episodes = episode.results;
      this.pages = episode.info.count;
    });
  }

  openDialog(character: Result) {
    const dialogRef = this.dialog.open(DialogComponent, { data: { resultEpi: character, info: "episode" } });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
