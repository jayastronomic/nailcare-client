import { Component, OnInit } from '@angular/core';
import Coverage from 'src/app/interfaces/Coverage';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
})
export class InsuranceComponent implements OnInit {
  public coverage!: Coverage;
  constructor(private dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.dashboardService.getCoverage().subscribe({
      next: ({ data }) => {
        this.coverage = data;
      },
    });
  }
}
