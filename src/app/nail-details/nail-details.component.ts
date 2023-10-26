import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnboardingService } from '../services/onboarding/onboarding.service';

type Answers = {
  nailsDoneFrequency: string;
  nailMaintenanceExpense: string;
  nailDamage: string;
  nailBreakageFrequency: string;
  nailBreakCount: string;
  nailBreakCause: string;
};

export type SuggestedSubscription = 'BASIC' | 'PREMIUM' | 'STANDARD';

@Component({
  selector: 'nail-details',
  templateUrl: './nail-details.component.html',
  styleUrls: ['./nail-details.component.css'],
})
export class NailDetailsComponent {
  public answers: Answers = {
    nailsDoneFrequency: '',
    nailMaintenanceExpense: '',
    nailDamage: '',
    nailBreakageFrequency: '',
    nailBreakCount: '',
    nailBreakCause: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private onboardingService: OnboardingService
  ) {}

  navigateToSubscriptionSuggestion(answers: Answers): void {
    this.onboardingService.suggestedSubscription =
      this.calculateSuggestion(answers);
    this.router.navigate(['../suggestedSubscription'], {
      relativeTo: this.route,
    });
  }

  log() {}

  calculateSuggestion(answers: Answers): SuggestedSubscription {
    // Initialize a score for each subscription plan
    let basicScore = 0;
    let standardScore = 0;
    let premiumScore = 0;

    // Adjust scores based on answers
    if (answers.nailsDoneFrequency === 'weekly') {
      premiumScore += 2;
      standardScore += 1;
    } else if (answers.nailsDoneFrequency === 'monthly') {
      standardScore += 2;
      basicScore += 1;
    }

    if (answers.nailMaintenanceExpense === '100plus') {
      premiumScore += 2;
      standardScore += 1;
    } else if (answers.nailMaintenanceExpense === '51-100') {
      standardScore += 2;
      basicScore += 1;
    }

    if (answers.nailDamage === 'true') {
      premiumScore += 2;
      standardScore += 1;
    }

    if (answers.nailBreakageFrequency === 'frequently') {
      premiumScore += 2;
      standardScore += 1;
    } else if (answers.nailBreakageFrequency === 'occasionally') {
      standardScore += 2;
      basicScore += 1;
    }

    if (answers.nailBreakCause === 'actions') {
      basicScore += 2;
    }

    // Determine the suggested plan based on scores
    if (premiumScore >= standardScore && premiumScore >= basicScore) {
      return 'PREMIUM';
    } else if (standardScore >= premiumScore && standardScore >= basicScore) {
      return 'STANDARD';
    } else {
      return 'BASIC';
    }
  }
}
