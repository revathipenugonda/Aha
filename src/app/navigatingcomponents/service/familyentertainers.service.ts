import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Familyentertainers } from '../models/familyentertainers';

@Injectable({
  providedIn: 'root'
})
export class FamilyentertainersService {
  private baseurl="assets/familyentertainers.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Familyentertainers[]>{
        return this.http.get<Familyentertainers[]>(this.baseurl);
      }
}
