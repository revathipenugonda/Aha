import { Injectable } from '@angular/core';
import { Comedytime } from '../models/comedytime';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComedytimeService {
  private baseurl="http://localhost:8081/api/v1/comedytimedata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Comedytime[]>{
        return this.http.get<Comedytime[]>(this.baseurl);
      }
}
