import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import APIResponse from 'src/app/interfaces/APIresponse';
import Coverage from 'src/app/interfaces/Coverage';
import Profile from 'src/app/interfaces/Profile';
import { SuggestedSubscription } from 'src/app/nail-details/nail-details.component';

@Injectable({
  providedIn: 'root',
})
export class OnboardingService {
  API: string = 'http://localhost:4000';
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
  suggestedSubscription: SuggestedSubscription = 'BASIC';

  constructor(private http: HttpClient) {}

  holdSubscriptionId(id: string) {
    this.coverageId = id;
  }

  getCoverage(): Observable<APIResponse<Coverage>> {
    return this.http.get<APIResponse<Coverage>>(
      this.API + `/api/v1/coverages/${this.coverageId}`
    );
  }

  createCoverage(id: string) {
    this.http
      .post<APIResponse<Coverage>>(
        this.API + '/api/v1/subscriptions',
        { coverageId: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .subscribe({
        next: ({ data }) => {
          console.log(data);
        },
      });
  }
}
