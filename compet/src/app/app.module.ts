import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListparticipantComponent } from './listparticipant/listparticipant.component';

@NgModule({
  declarations: [
    AppComponent,
    ListparticipantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
