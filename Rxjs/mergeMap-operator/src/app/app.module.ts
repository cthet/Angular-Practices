import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AppFooterComponent } from "./core/components/app-footer/app-footer.component";
import { UserCardComponent } from './core/components/user-card/user-card.component';
import { LoaderComponent } from './core/components/loader/loader.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UserDetailComponent,
        AppFooterComponent,
        UserCardComponent,
        LoaderComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      
    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule { }
