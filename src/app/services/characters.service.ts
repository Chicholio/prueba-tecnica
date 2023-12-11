import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  searchsCharacters(page: number): Observable<Characters> {
    return this.http.get<Characters>(`https://rickandmortyapi.com/api/character?page=${page}`);
  }

  searchCharacterTerm(page: number, term: string): Observable<Characters> {
    return this.http.get<Characters>(`https://rickandmortyapi.com/api/character?page=${page}&name=${term}`);
  }
}
