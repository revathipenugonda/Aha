import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mysteryandsupernatural } from '../models/mysteryandsupernatural';

@Injectable({
  providedIn: 'root'
})
export class MysteryandsupernaturalService {
  private baseurl="http://localhost:8081/api/v1/mysteryandsupernaturaldata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Mysteryandsupernatural[]>{
        return this.http.get<Mysteryandsupernatural[]>(this.baseurl);
      }
}
