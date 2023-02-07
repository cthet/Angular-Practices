import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VcLogsComponent } from './vc-logs/vc-logs.component';
import { VersionControlComponent } from './version-control/version-control.component';

@NgModule({
  declarations: [
    AppComponent,
    VcLogsComponent,
    VersionControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
