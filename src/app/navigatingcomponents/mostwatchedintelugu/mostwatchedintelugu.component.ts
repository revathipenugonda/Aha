import { Component } from '@angular/core';
import { MostwatchedinteluguService } from '../service/mostwatchedintelugu.service';

@Component({
  selector: 'app-mostwatchedintelugu',
  templateUrl: './mostwatchedintelugu.component.html',
  styleUrls: ['./mostwatchedintelugu.component.css']
})
export class MostwatchedinteluguComponent {
  images:any;
        constructor(private service:MostwatchedinteluguService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
