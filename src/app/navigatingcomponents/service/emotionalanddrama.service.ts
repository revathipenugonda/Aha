import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emotionalanddrama } from '../models/emotionalanddrama';

@Injectable({
  providedIn: 'root'
})
export class EmotionalanddramaService {
  private baseurl="assets/emotionalanddrama.json";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Emotionalanddrama[]>{
        return this.http.get<Emotionalanddrama[]>(this.baseurl);
      }
}
