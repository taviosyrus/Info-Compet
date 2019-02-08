import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegleComponent } from './regle/regle.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    ContactComponent,
    InscriptionComponent,
    ConnectionComponent,
    RegleComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'inscription',
        component: InscriptionComponent
      },
      {
        path: 'connection',
        component: ConnectionComponent
      },
      {
        path: 'competition',
        component: CompetitionComponent
      },
      {
        path: 'regle',
        component: RegleComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
