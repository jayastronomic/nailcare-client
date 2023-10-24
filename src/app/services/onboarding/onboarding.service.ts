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

  constructor() {}
}
