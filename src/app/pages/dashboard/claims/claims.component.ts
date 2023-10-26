import { Component, OnInit } from '@angular/core';
import Claim from 'src/app/interfaces/Claim';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css'],
})
export class ClaimsComponent implements OnInit {
  claims: Claim[] = [];

  constructor(private dahsboardService: DashboardService) {}

  ngOnInit(): void {
    this.dahsboardService.getClaims().subscribe({
      next: ({ data }) => {
        console.log(data);
      },
    });
  }
}
