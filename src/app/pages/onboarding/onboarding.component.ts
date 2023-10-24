import { Component } from '@angular/core';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';

@Component({
  selector: 'onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css'],
})
export class OnboardingComponent {
  constructor(private onboardingService: OnboardingService) {}
}
