import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import APIResponse from 'src/app/interfaces/APIresponse';
import Coverage from 'src/app/interfaces/Coverage';
import { Observable } from 'rxjs';
import Claim from 'src/app/interfaces/Claim';

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

  getClaims(): Observable<APIResponse<Claim[]>> {
    return this.http.get<APIResponse<Claim[]>>(this.API + '/api/v1/claims', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }

  createClaim(newClaim: Claim): Observable<APIResponse<Claim>> {
    return this.http.post<APIResponse<Claim>>(
      this.API + '/api/v1/claims',
      newClaim,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
  }
}
