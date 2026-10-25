import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emotionalanddrama } from '../models/emotionalanddrama';

@Injectable({
  providedIn: 'root'
})
export class EmotionalanddramaService {
  private baseurl="http://localhost:8081/api/v1/emotionalanddramadata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Emotionalanddrama[]>{
        return this.http.get<Emotionalanddrama[]>(this.baseurl);
      }
}
