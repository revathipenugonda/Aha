import { Component } from '@angular/core';
import { WatchinteluguandtamilService } from '../service/watchinteluguandtamil.service';

@Component({
  selector: 'app-watchinteluguandtamil',
  templateUrl: './watchinteluguandtamil.component.html',
  styleUrls: ['./watchinteluguandtamil.component.css']
})
export class WatchinteluguandtamilComponent {
  images:any;
      constructor(private service:WatchinteluguandtamilService){}
      ngOnInit(){
        this.service.onsubmit().subscribe(data=>this.images=data);
      }
}
