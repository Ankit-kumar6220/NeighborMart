import { Component, HostListener,Input, SimpleChanges } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { menCategory, navigation, womenCategory } from './navbarMenu';
import { CategoryItem } from 'src/app/Models/Category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-content',
  templateUrl: './navbar-content.component.html',
  styleUrls: ['./navbar-content.component.scss']
})
export class NavbarContentComponent {



  @Input()
  selectedSection!: string;


  category:any;

  ngOnInit() {
    
  }
  
  constructor(private router:Router){
    this.category=navigation
  }

  navigateToProducts=(path:String)=>{
    this.router.navigate([path])
    
  }

  
  
}
