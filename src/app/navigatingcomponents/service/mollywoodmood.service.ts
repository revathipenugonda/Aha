import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mollywoodmood } from '../models/mollywoodmood';

@Injectable({
  providedIn: 'root'
})
export class MollywoodmoodService {
  private baseurl="http://localhost:8081/api/v1/mollywoodmooddata";
    constructor(private http:HttpClient){}
    onsubmit():Observable<Mollywoodmood[]>{
      return this.http.get<Mollywoodmood[]>(this.baseurl);
    }
}