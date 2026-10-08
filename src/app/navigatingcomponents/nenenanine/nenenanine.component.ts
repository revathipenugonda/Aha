import { Component } from '@angular/core';
import { NenenanineService } from '../service/nenenanine.service';

@Component({
  selector: 'app-nenenanine',
  templateUrl: './nenenanine.component.html',
  styleUrls: ['./nenenanine.component.css']
})
export class NenenanineComponent {
  images:any;
      constructor(private service:NenenanineService){}
      ngOnInit(){
        this.service.onsubmit().subscribe(data=>this.images=data);
      }
}
