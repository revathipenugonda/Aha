import { Component } from '@angular/core';
import { RegionalmixService } from '../service/regionalmix.service';

@Component({
  selector: 'app-regionalmix',
  templateUrl: './regionalmix.component.html',
  styleUrls: ['./regionalmix.component.css']
})
export class RegionalmixComponent {
  images:any;
        constructor(private service:RegionalmixService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
