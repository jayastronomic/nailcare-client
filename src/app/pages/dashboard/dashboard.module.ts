import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from 'src/app/overview/overview.component';
import { RouterModule } from '@angular/router';
import { DashboardNavComponent } from './dashboard-nav/dashboard-nav.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapList,
  bootstrapPersonFill,
  bootstrapListUl,
  bootstrapShieldCheck,
  bootstrapClipboard2Check,
  bootstrapXLg,
} from '@ng-icons/bootstrap-icons';
import { InsuranceComponent } from './insurance/insurance.component';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { ClaimsComponent } from './claims/claims.component';
import { ClaimsContainerComponent } from './claims-container/claims-container.component';
import { NewClaimFormComponent } from './new-claim-form/new-claim-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    DashboardNavComponent,
    InsuranceComponent,
    ClaimsComponent,
    ClaimsContainerComponent,
    NewClaimFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({
      bootstrapList,
      bootstrapPersonFill,
      bootstrapListUl,
      bootstrapShieldCheck,
      bootstrapClipboard2Check,
      bootstrapXLg,
    }),
    FormsModule,
  ],
  providers: [DashboardService],
})
export class DashboardModule {}
