import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locations } from '../interfaces/locations';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  searchsPlaces(page: number): Observable<Locations> {
    return this.http.get<Locations>(`https://rickandmortyapi.com/api/location?page=${page}`);
  }

  searchPlaceTerm(page: number, term: string): Observable<Locations> {
    return this.http.get<Locations>(`https://rickandmortyapi.com/api/location?page=${page}&name=${term}`);
  }
}
