import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import APIResponse from 'src/app/interfaces/APIresponse';
import AuthenticatedUser from 'src/app/interfaces/AuthenticatedUser';
import User from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API: string = 'http://localhost:4000';
  private authenticatedUser: AuthenticatedUser | null = null;
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(localStorage.getItem('token'));

  constructor(private http: HttpClient, private router: Router) {}

  get token$(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }

  get user(): AuthenticatedUser | null {
    return this.authenticatedUser;
  }

  setAuthenticatedUser(user: AuthenticatedUser): void {
    this.authenticatedUser = user;
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  clearAuthenticatedUser(): void {
    this.authenticatedUser = null;
  }

  isAuthenticated(): boolean {
    return this.authenticatedUser !== null;
  }

  getAuthUser(token: string) {
    this.http
      .get<APIResponse<AuthenticatedUser>>(this.API + '/api/v1/auth/loggedIn', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe({
        next: ({ data }) => {
          this.setAuthenticatedUser(data);
        },
        error: (err) => {
          if (err.status === 403) {
            if (this.router.url.startsWith('/dashboard/')) {
              this.router.navigate(['/']);
            }
          }
        },
      });
  }
}
