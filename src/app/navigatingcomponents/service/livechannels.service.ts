import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livechannels } from '../models/livechannels';

@Injectable({
  providedIn: 'root'
})
export class LivechannelsService {
  private baseurl="http://localhost:8081/api/v1/livechannelsdata";
      constructor(private http:HttpClient){}
      onsubmit():Observable<Livechannels[]>{
        return this.http.get<Livechannels[]>(this.baseurl);
      }
}
