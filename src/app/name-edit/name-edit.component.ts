import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnboardingService } from '../services/onboarding/onboarding.service';

@Component({
  selector: 'name-edit',
  templateUrl: './name-edit.component.html',
  styleUrls: ['./name-edit.component.css'],
})
export class NameEditComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public onboardingService: OnboardingService
  ) {}

  navigateToAddressEdit() {
    this.router.navigate(['../addressEdit'], { relativeTo: this.route });
  }

  logFirstName() {
    console.log(this.onboardingService.profile);
  }
}
