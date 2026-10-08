import { Component } from '@angular/core';
import { ActionarenaService } from '../service/actionarena.service';

@Component({
  selector: 'app-actionarena',
  templateUrl: './actionarena.component.html',
  styleUrls: ['./actionarena.component.css']
})
export class ActionarenaComponent {
  images:any;
    constructor(private service:ActionarenaService){}
    ngOnInit(){
      this.service.onsubmit().subscribe(data=>this.images=data);
    }
}
