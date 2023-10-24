import { Component, OnInit } from '@angular/core';
import Coverage from '../interfaces/Coverage';
import { CoverageService } from '../services/coverage/coverage.service';
import { SubscriptionService } from '../services/subscription/subscription.service';

@Component({
  selector: 'app-suggested-subscription',
  templateUrl: './suggested-subscription.component.html',
  styleUrls: ['./suggested-subscription.component.css'],
})
export class SuggestedSubscriptionComponent implements OnInit {
  coverages!: Coverage[];

  constructor(
    private coverageService: CoverageService,
    private subscriptionServcie: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.coverageService.getCoverages().subscribe(({ data }) => {
      this.coverages = data;
    });
  }

  holdSubscriptionId(id: string) {
    this.subscriptionServcie.holdSubscriptionId(id);
  }

  navigateToSignUpIfNotLoggedIn() {}
}
