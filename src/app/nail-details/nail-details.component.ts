import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nail-details',
  templateUrl: './nail-details.component.html',
  styleUrls: ['./nail-details.component.css'],
})
export class NailDetailsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToSubscriptionSuggestion() {
    this.router.navigate(['../suggestedSubscription'], {
      relativeTo: this.route,
    });
  }
}
