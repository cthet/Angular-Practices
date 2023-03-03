import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReleaseLogsComponent } from './components/release-logs/release-logs.component';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { ReleaseFormComponent } from './components/release-form/release-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VersionControlComponent,
    ReleaseLogsComponent,
    ReleaseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
