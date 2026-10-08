import { Component } from '@angular/core';
import { LivechannelsService } from '../service/livechannels.service';

@Component({
  selector: 'app-livechannels',
  templateUrl: './livechannels.component.html',
  styleUrls: ['./livechannels.component.css']
})
export class LivechannelsComponent {
  images:any;
        constructor(private service:LivechannelsService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
