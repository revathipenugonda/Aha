import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchforfree } from '../models/watchforfree';

@Injectable({
  providedIn: 'root'
})
export class WatchforfreeService {
  private baseurl="assets/watchforfree.json";
  constructor(private http:HttpClient) { }
  onsubmit():Observable<Watchforfree[]>{
    return this.http.get<Watchforfree[]>(this.baseurl);
  }
}