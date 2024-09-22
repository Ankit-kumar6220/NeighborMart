import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {

  maxRating: number = 5 ;
 initialRating: number =4;

  stars: number[] | undefined;
  currentRating: number =0;


  constructor(){
    this.stars = Array(this.maxRating).fill(0).map((_, i) => i + 1);
    this.currentRating = this.initialRating || 0;
  }

  rate(rating: number) {
    this.currentRating = rating;
  }

}
