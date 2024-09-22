import { Component } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from 'src/Data/shoes';
import { productdata } from 'src/productsData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  products:any[]=[]
  gouns:any
  saree:any
  men_kurta:any
  shoes:any

  constructor() {
    this.products = productdata.slice(0, 5);
    this.gouns= gounsPage1.slice(0,5)
    this.saree=lehngacholiPage2.slice(0,5)
    this.men_kurta=mens_kurta.slice(0,5)
    this.shoes=mensShoesPage1.slice(0,5)
  }

}
