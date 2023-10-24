import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { HomeComponent } from './pages/home/home.component';
import { NameEditComponent } from './name-edit/name-edit.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { NailDetailsComponent } from './nail-details/nail-details.component';
import { SuggestedSubscriptionComponent } from './suggested-subscription/suggested-subscription.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
      {
        path: 'suggestedSubscription',
        component: SuggestedSubscriptionComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
