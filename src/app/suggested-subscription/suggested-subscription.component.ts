import { Component, OnInit } from '@angular/core';
import Coverage from '../interfaces/Coverage';

@Component({
  selector: 'app-suggested-subscription',
  templateUrl: './suggested-subscription.component.html',
  styleUrls: ['./suggested-subscription.component.css'],
})
export class SuggestedSubscriptionComponent implements OnInit {
  coverages!: Coverage[];

  ngOnInit(): void {
    console.log(this.coverages);
  }
}
