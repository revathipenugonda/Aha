import { Component } from '@angular/core';
import { TrendingnowService } from '../service/trendingnow.service';

@Component({
  selector: 'app-trendingnow',
  templateUrl: './trendingnow.component.html',
  styleUrls: ['./trendingnow.component.css']
})
export class TrendingnowComponent {
  images:any;
      constructor(private service:TrendingnowService){}
      ngOnInit(){
        this.service.onsubmit().subscribe(data=>this.images=data);
      }
}
