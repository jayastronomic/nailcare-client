import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { HomeComponent } from './pages/home/home.component';
import { NameEditComponent } from './name-edit/name-edit.component';
import { AddressEditComponent } from './address-edit/address-edit.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
