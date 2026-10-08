import { Component } from '@angular/core';
import { MysteryandsupernaturalService } from '../service/mysteryandsupernatural.service';

@Component({
  selector: 'app-mysteryandsupernatural',
  templateUrl: './mysteryandsupernatural.component.html',
  styleUrls: ['./mysteryandsupernatural.component.css']
})
export class MysteryandsupernaturalComponent {
  images:any;
        constructor(private service:MysteryandsupernaturalService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
