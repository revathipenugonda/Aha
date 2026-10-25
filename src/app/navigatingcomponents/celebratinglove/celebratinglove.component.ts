import { Component } from '@angular/core';
import { CelebratingloveService } from '../service/celebratinglove.service';

@Component({
  selector: 'app-celebratinglove',
  templateUrl: './celebratinglove.component.html',
  styleUrls: ['./celebratinglove.component.css']
})
export class CelebratingloveComponent {
  images:any;
    constructor(private service:CelebratingloveService){}
    ngOnInit(){
      this.service.onsubmit().subscribe(data=>this.images=data);
    }
}
