import { Component } from '@angular/core';
import { KillertwistsService } from '../service/killertwists.service';

@Component({
  selector: 'app-killertwists',
  templateUrl: './killertwists.component.html',
  styleUrls: ['./killertwists.component.css']
})
export class KillertwistsComponent {
  images:any;
        constructor(private service:KillertwistsService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
