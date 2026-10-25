import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Familyentertainers } from '../models/familyentertainers';

@Injectable({
  providedIn: 'root'
})
export class FamilyentertainersService {
  private baseurl="http://localhost:8081/api/v1/familyentertainersdata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Familyentertainers[]>{
        return this.http.get<Familyentertainers[]>(this.baseurl);
      }
}
