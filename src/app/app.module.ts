import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppwrapperComponent } from './appwrapper/appwrapper.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapList, bootstrapPersonFill } from '@ng-icons/bootstrap-icons';
import { ThreeDRendererComponent } from './three-d-renderer/three-d-renderer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AppwrapperComponent, ThreeDRendererComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapList, bootstrapPersonFill }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
