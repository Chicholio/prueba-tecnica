import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodes } from '../interfaces/episodes';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  constructor(private http: HttpClient) { }

  searchsEpisodes(page: number): Observable<Episodes> {
    return this.http.get<Episodes>(`https://rickandmortyapi.com/api/episode?page=${page}`);
  }

  searchEpisodeTerm(page: number, term: string): Observable<Episodes> {
    return this.http.get<Episodes>(`https://rickandmortyapi.com/api/episode?page=${page}&name=${term}`);
  }
}
