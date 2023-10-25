import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import APIResponse from 'src/app/interfaces/APIresponse';
import User from 'src/app/interfaces/User';
import { AuthService } from '../auth/auth.service';
import { Token } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly API: string = 'http://localhost:4000/api/v1/auth/signup';
  public user: User = { email: '', password: '' };

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  createUser(newUser: User) {
    this.http.post<APIResponse<string>>(this.API, newUser).subscribe({
      next: ({ data: token }) => {
        this.authService.setToken(token);
      },
      error: (error) => console.log(error),
      complete: () => {
        this.router.navigate(['../confirmation'], { relativeTo: this.route });
      },
    });
  }
}
