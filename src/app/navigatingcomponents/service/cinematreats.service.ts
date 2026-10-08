import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cinematreats } from '../models/cinematreats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinematreatsService {
  private baseurl="assets/cinematreats.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Cinematreats[]>{
        return this.http.get<Cinematreats[]>(this.baseurl);
      }
}
