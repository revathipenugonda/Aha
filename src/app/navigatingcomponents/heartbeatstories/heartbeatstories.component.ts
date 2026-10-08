import { Component } from '@angular/core';
import { HeartbeatstoriesService } from '../service/heartbeatstories.service';

@Component({
  selector: 'app-heartbeatstories',
  templateUrl: './heartbeatstories.component.html',
  styleUrls: ['./heartbeatstories.component.css']
})
export class HeartbeatstoriesComponent {
  images:any;
        constructor(private service:HeartbeatstoriesService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
