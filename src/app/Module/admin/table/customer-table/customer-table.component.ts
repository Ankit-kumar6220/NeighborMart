import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent {

  @Input() customers:any

  displayedColumns: string[] = [
    'id',
    'imageUrl',
    'firstName',
    'lastName',
    'email',
    
    
  ];

}
