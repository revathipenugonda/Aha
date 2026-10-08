import { Component } from '@angular/core';
import { FamilyentertainersService } from '../service/familyentertainers.service';

@Component({
  selector: 'app-familyentertainers',
  templateUrl: './familyentertainers.component.html',
  styleUrls: ['./familyentertainers.component.css']
})
export class FamilyentertainersComponent {
  images:any;
        constructor(private service:FamilyentertainersService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
