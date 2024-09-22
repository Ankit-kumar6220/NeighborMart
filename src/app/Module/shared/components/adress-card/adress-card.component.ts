import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-adress-card',
  templateUrl: './adress-card.component.html',
  styleUrls: ['./adress-card.component.scss']
})
export class AdressCardComponent {

  @Input() address:any

  
}
