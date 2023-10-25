import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from 'src/app/overview/overview.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent, OverviewComponent],
  imports: [CommonModule, RouterModule],
})
export class DashboardModule {}
