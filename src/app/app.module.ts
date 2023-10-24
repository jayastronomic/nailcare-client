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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppwrapperComponent,
    HomeBannerComponent,
    HomeComponent,
    HomeSectionOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapList, bootstrapPersonFill }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
