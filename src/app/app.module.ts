import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppwrapperComponent } from './appwrapper/appwrapper.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapList, bootstrapPersonFill } from '@ng-icons/bootstrap-icons';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeSectionOneComponent } from './home-section-one/home-section-one.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { NameEditComponent } from './name-edit/name-edit.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { NailDetailsComponent } from './nail-details/nail-details.component';
import { SuggestedSubscriptionComponent } from './suggested-subscription/suggested-subscription.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { OnboardingModule } from './pages/onboarding/onboarding.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppwrapperComponent,
    HomeBannerComponent,
    HomeComponent,
    HomeSectionOneComponent,
    NameEditComponent,
    AddressEditComponent,
    NailDetailsComponent,
    SuggestedSubscriptionComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons({ bootstrapList, bootstrapPersonFill }),
    OnboardingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
