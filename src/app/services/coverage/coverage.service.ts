import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Coverage from 'src/app/interfaces/Coverage';
import APIResponse from 'src/app/interfaces/APIresponse';

@Injectable({
  providedIn: 'root',
})
export class CoverageService {
  API: string = 'http://localhost:4000';
  constructor(private http: HttpClient) {}

  // GET "/api/v1/coverages"
  getCoverages(): Observable<APIResponse<Coverage[]>> {
    return this.http.get<APIResponse<Coverage[]>>(
      this.API + '/api/v1/coverages'
    );
  }
}
