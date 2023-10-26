import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  subscriptionId: string = '';
  constructor(private http: HttpClient) {}

  holdSubscriptionId(id: string) {
    this.subscriptionId = id;
  }

  seeHeldSubscriptionId() {
    console.log(this.subscriptionId);
  }
}
