import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationsButtonComponent } from './notifications-button/notifications-button.component';
import { NotificationsManagerComponent } from './notifications-manager/notifications-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsButtonComponent,
    NotificationsManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
