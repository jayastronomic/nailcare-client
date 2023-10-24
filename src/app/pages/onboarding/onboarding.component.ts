import { Component, OnInit } from '@angular/core';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Component({
  selector: 'onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],
})
export class OnboardingComponent implements OnInit {
  constructor(private onboardingService: OnboardingService) {}
  ngOnInit(): void {}
}
