import { Component } from '@angular/core';
import { WatchforfreeService } from '../service/watchforfree.service';

@Component({
  selector: 'app-watchforfree',
  templateUrl: './watchforfree.component.html',
  styleUrls: ['./watchforfree.component.css']
})
export class WatchforfreeComponent {
  images:any;
  constructor(private service:WatchforfreeService){}
  ngOnInit(){
    this.service.onsubmit().subscribe(data=>this.images=data);
  }
}
