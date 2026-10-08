import { Component } from '@angular/core';
import { FantasticFafaService } from '../service/fantastic-fafa.service';

@Component({
  selector: 'app-fantastic-fafa',
  templateUrl: './fantastic-fafa.component.html',
  styleUrls: ['./fantastic-fafa.component.css']
})
export class FantasticFAFAComponent {
  images:any;
    constructor(private service:FantasticFafaService){}
    ngOnInit(){
      this.service.onsubmit().subscribe(data=>this.images=data);
    }
}
