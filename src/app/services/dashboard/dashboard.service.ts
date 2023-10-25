import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import APIResponse from 'src/app/interfaces/APIresponse';
import Coverage from 'src/app/interfaces/Coverage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private API: string = 'http://localhost:4000';
  constructor(public authService: AuthService, private http: HttpClient) {}

  getCoverage(): Observable<APIResponse<Coverage>> {
    return this.http.get<APIResponse<Coverage>>(
      this.API + '/api/v1/users/coverages',
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
  }
}
