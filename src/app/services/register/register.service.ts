import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import APIResponse from 'src/app/interfaces/APIresponse';
import User from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly API: string = 'http://localhost:4000/api/v1/auth/signup';
  public user: User = { email: '', password: '' };

  constructor(private http: HttpClient) {}

  createUser(newUser: User) {
    this.http
      .post<APIResponse<User>>(this.API, newUser)
      .subscribe(({ data }) => {
        console.log(data);
      });
  }
}
