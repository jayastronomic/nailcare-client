import { Injectable } from '@angular/core';
import Profile from 'src/app/interfaces/Profile';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  profile: Profile = {
    firstName: '',
    lastName: '',
    middleInital: '',
    birthdate: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    unitNumber: '',
  };

  coverageId: string = '';
  userId: string = '';

  holdSubscriptionId(id: string) {
    this.coverageId = id;
  }

  constructor() {}
}
