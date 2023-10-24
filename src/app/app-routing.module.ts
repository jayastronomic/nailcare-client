import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { HomeComponent } from './pages/home/home.component';
import { NameEditComponent } from './name-edit/name-edit.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { NailDetailsComponent } from './nail-details/nail-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'onboarding',
    component: OnboardingComponent,
    children: [
      {
        path: 'nameEdit',
        component: NameEditComponent,
      },
      {
        path: 'addressEdit',
        component: AddressEditComponent,
      },
      {
        path: 'nailDetails',
        component: NailDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
