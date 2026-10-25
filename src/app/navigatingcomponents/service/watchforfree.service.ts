import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchforfree } from '../models/watchforfree';

@Injectable({
  providedIn: 'root'
})
export class WatchforfreeService {
  private baseurl="http://localhost:8081/api/v1/watchforfreedata";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Watchforfree[]>{
    return this.http.get<Watchforfree[]>(this.baseurl);
  }
}