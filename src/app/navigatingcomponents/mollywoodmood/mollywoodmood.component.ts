import { Component } from '@angular/core';
import { MollywoodmoodService } from '../service/mollywoodmood.service';

@Component({
  selector: 'app-mollywoodmood',
  templateUrl: './mollywoodmood.component.html',
  styleUrls: ['./mollywoodmood.component.css']
})
export class MollywoodmoodComponent {
  images:any;
    constructor(private service:MollywoodmoodService){}
    ngOnInit(){
      this.service.onsubmit().subscribe(data=>this.images=data);
    }
}
