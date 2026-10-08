import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private baseurl="assets/genre.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Genre[]>{
        return this.http.get<Genre[]>(this.baseurl);
      }
}
