import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ChatMessagesComponent } from './components/chat-messages/chat-messages.component';
import { WriteMessageComponent } from './components/write-message/write-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WriteMessageComponent,
    ChatMessagesComponent,
    ChatComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, TextFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
