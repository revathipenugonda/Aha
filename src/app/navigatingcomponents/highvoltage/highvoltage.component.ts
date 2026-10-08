import { Component } from '@angular/core';
import { HighvoltageService } from '../service/highvoltage.service';

@Component({
  selector: 'app-highvoltage',
  templateUrl: './highvoltage.component.html',
  styleUrls: ['./highvoltage.component.css']
})
export class HighvoltageComponent {
  images:any;
        constructor(private service:HighvoltageService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
