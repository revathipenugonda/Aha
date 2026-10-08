import { Component } from '@angular/core';
import { EmotionalanddramaService } from '../service/emotionalanddrama.service';

@Component({
  selector: 'app-emotionalanddrama',
  templateUrl: './emotionalanddrama.component.html',
  styleUrls: ['./emotionalanddrama.component.css']
})
export class EmotionalanddramaComponent {
  images:any;
        constructor(private service:EmotionalanddramaService){}
        ngOnInit(){
          this.service.onsubmit().subscribe(data=>this.images=data);
        }
}
