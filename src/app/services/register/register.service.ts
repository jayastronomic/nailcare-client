import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import APIResponse from 'src/app/interfaces/APIresponse';
import User from 'src/app/interfaces/User';
import { AuthService } from '../auth/auth.service';
import { Token } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
import { OnboardingService } from '../onboarding/onboarding.service';
import Profile from 'src/app/interfaces/Profile';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly API: string = 'http://localhost:4000';
  public user: User = { email: '', password: '' };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private onboardingService: OnboardingService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  createUser(newUser: User) {
    this.http
      .post<APIResponse<string>>(this.API + '/api/v1/auth/signup', newUser)
      .subscribe({
        next: ({ data: token }) => {
          this.authService.setToken(token);
        },
        error: (error) => console.log(error),
        complete: () => {
          this.createProfile(this.onboardingService.profile);
        },
      });
  }

  createProfile(profile: Profile) {
    this.http
      .post<APIResponse<Profile>>(this.API + '/api/v1/profiles', profile, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .subscribe({
        next: ({ data }) => {
          console.log(data);
        },
        complete: () => {
          this.router.navigate(['/onboarding/confirmation']);
        },
      });
  }
}
