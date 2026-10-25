import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Celebratinglove } from '../models/celebratinglove';

@Injectable({
  providedIn: 'root'
})
export class CelebratingloveService {
  private baseurl="http://localhost:8081/api/v1/celebratinglovedata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Celebratinglove[]>{
        return this.http.get<Celebratinglove[]>(this.baseurl);
      }
}
