import { Component, OnInit } from '@angular/core';
import Claim from 'src/app/interfaces/Claim';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css'],
})
export class ClaimsComponent implements OnInit {
  public isOpen: boolean = true;
  public claims: Claim[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getClaims().subscribe({
      next: ({ data }) => {
        this.claims = data;
      },
    });
  }

  toggleForm() {
    this.isOpen = !this.isOpen;
  }

  onClaimCreated(newClaim: Claim) {
    this.claims.push(newClaim);
  }
}
