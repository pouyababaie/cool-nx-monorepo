import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';

import { FrontModule } from '@rihno-project/front/src';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    FrontModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
})
export class AppModule { }
