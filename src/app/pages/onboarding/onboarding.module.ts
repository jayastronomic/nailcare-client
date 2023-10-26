import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from 'src/app/services/onboarding/onboarding.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OnboardingComponent],
  imports: [CommonModule, RouterModule],
  providers: [OnboardingService],
})
export class OnboardingModule {}
