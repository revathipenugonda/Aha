import { Component } from '@angular/core';
import { TelugutimelessclassicsService } from '../service/telugutimelessclassics.service';

@Component({
  selector: 'app-telugutimelessclassics',
  templateUrl: './telugutimelessclassics.component.html',
  styleUrls: ['./telugutimelessclassics.component.css']
})
export class TelugutimelessclassicsComponent {
  images:any;
        constructor(private service:TelugutimelessclassicsService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
