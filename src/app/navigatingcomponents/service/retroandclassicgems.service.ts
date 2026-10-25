import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Retroandclassicgems } from '../models/retroandclassicgems';

@Injectable({
  providedIn: 'root'
})
export class RetroandclassicgemsService {
  private baseurl="http://localhost:8081/api/v1/retroandclassicgemsdata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Retroandclassicgems[]>{
        return this.http.get<Retroandclassicgems[]>(this.baseurl);
      }
}
