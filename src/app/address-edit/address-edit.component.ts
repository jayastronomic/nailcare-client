import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnboardingService } from '../services/onboarding/onboarding.service';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css'],
})
export class AddressEditComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public onboardingService: OnboardingService
  ) {}
  ngOnInit(): void {
    console.log(this.onboardingService);
  }

  navigateToNailDetails() {
    this.router.navigate(['../nailDetails'], { relativeTo: this.route });
  }
}
