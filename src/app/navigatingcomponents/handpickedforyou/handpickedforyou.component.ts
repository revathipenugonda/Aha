import { Component } from '@angular/core';
import { HandpickedforyouService } from '../service/handpickedforyou.service';

@Component({
  selector: 'app-handpickedforyou',
  templateUrl: './handpickedforyou.component.html',
  styleUrls: ['./handpickedforyou.component.css']
})
export class HandpickedforyouComponent {
  images:any;
        constructor(private service:HandpickedforyouService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
