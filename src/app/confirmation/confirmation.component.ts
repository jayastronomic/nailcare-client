import { Component, OnInit } from '@angular/core';
import Coverage from '../interfaces/Coverage';
import { OnboardingService } from '../services/onboarding/onboarding.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  coverage!: Coverage;

  constructor(
    private onboardingService: OnboardingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onboardingService.getCoverage().subscribe({
      next: ({ data }) => {
        this.coverage = data;
      },
    });
  }

  confirmCoverage() {
    this.onboardingService.createCoverage(this.coverage.id);
    this.router.navigate(['/dashboard/overview']);
  }
}
