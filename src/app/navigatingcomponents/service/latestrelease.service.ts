import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Latestrelease } from '../models/latestrelease';

@Injectable({
  providedIn: 'root'
})
export class LatestreleaseService {
  private baseurl="http://localhost:8081/api/v1/latestreleasedata";
  constructor(private http:HttpClient){}
  onsubmit():Observable<Latestrelease[]>{
    return this.http.get<Latestrelease[]>(this.baseurl);
  }
}