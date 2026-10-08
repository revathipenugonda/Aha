import { Injectable } from '@angular/core';
import { Ahaoriginals } from '../models/ahaoriginals';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AhaoriginalsService {
  private baseurl="assets/ahaoriginals.json";
    constructor(private http:HttpClient){}
    onsubmit():Observable<Ahaoriginals[]>{
      return this.http.get<Ahaoriginals[]>(this.baseurl);
    }
}