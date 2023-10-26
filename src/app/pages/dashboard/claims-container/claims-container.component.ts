import { Component, Input, OnInit } from '@angular/core';
import Claim from 'src/app/interfaces/Claim';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';

@Component({
  selector: 'claims-container',
  templateUrl: './claims-container.component.html',
  styleUrls: ['./claims-container.component.css'],
})
export class ClaimsContainerComponent {
  @Input() claims: Claim[] = [];

  constructor(private dashboardService: DashboardService) {}
}
