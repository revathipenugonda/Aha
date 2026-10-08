import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FantasticFafa } from '../models/fantastic-fafa';

@Injectable({
  providedIn: 'root'
})
export class FantasticFafaService {
  private baseurl="assets/fantastic-fafa.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<FantasticFafa[]>{
        return this.http.get<FantasticFafa[]>(this.baseurl);
      }
}
