import { Component, OnInit } from '@angular/core';
import Coverage from '../interfaces/Coverage';
import { CoverageService } from '../services/coverage/coverage.service';
import { SubscriptionService } from '../services/subscription/subscription.service';
import { OnboardingService } from '../services/onboarding/onboarding.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suggested-subscription',
  templateUrl: './suggested-subscription.component.html',
  styleUrls: ['./suggested-subscription.component.css'],
})
export class SuggestedSubscriptionComponent implements OnInit {
  coverages!: Coverage[];

  constructor(
    private coverageService: CoverageService,
    private onboardingService: OnboardingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.coverageService.getCoverages().subscribe(({ data }) => {
      this.coverages = data;
    });
  }

  holdSubscriptionId(id: string) {
    this.onboardingService.holdSubscriptionId(id);
    this.naviagteToSignUp();
  }

  naviagteToSignUp() {
    this.router.navigate(['../register'], { relativeTo: this.route });
  }
}
