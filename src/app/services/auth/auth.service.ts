import { Injectable } from '@angular/core';
import User from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticatedUser: User | null = null;
  private token: string = '';

  get user(): User | null {
    return this.authenticatedUser;
  }

  setAuthenticatedUser(user: User): void {
    this.authenticatedUser = user;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  clearAuthenticatedUser(): void {
    this.authenticatedUser = null;
  }

  isAuthenticated(): boolean {
    return this.authenticatedUser !== null;
  }
}
