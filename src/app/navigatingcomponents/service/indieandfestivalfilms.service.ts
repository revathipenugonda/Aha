import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indieandfestivalfilms } from '../models/indieandfestivalfilms';

@Injectable({
  providedIn: 'root'
})
export class IndieandfestivalfilmsService {
  private baseurl="http://localhost:8081/api/v1/indieandfestivalfilmsdata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Indieandfestivalfilms[]>{
        return this.http.get<Indieandfestivalfilms[]>(this.baseurl);
      }
}
