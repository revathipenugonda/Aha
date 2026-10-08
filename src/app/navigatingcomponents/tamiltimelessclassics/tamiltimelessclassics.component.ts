import { Component } from '@angular/core';
import { TamiltimelessclassicsService } from '../service/tamiltimelessclassics.service';

@Component({
  selector: 'app-tamiltimelessclassics',
  templateUrl: './tamiltimelessclassics.component.html',
  styleUrls: ['./tamiltimelessclassics.component.css']
})
export class TamiltimelessclassicsComponent {
  images:any;
        constructor(private service:TamiltimelessclassicsService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
