import { Component } from '@angular/core';
import { LaughterloadedService } from '../service/laughterloaded.service';

@Component({
  selector: 'app-laughterloaded',
  templateUrl: './laughterloaded.component.html',
  styleUrls: ['./laughterloaded.component.css']
})
export class LaughterloadedComponent {
  images:any;
        constructor(private service:LaughterloadedService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
