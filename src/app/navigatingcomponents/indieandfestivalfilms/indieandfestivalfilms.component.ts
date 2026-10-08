import { Component } from '@angular/core';
import { IndieandfestivalfilmsService } from '../service/indieandfestivalfilms.service';

@Component({
  selector: 'app-indieandfestivalfilms',
  templateUrl: './indieandfestivalfilms.component.html',
  styleUrls: ['./indieandfestivalfilms.component.css']
})
export class IndieandfestivalfilmsComponent {
  images:any;
        constructor(private service:IndieandfestivalfilmsService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
