import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { RegleComponent } from './regle/regle.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { ProfilUtiComponent } from './profil-uti/profil-uti.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    ContactComponent,
    InscriptionComponent,
    ConnectionComponent,
    RegleComponent,
    HeaderComponent,
    FooterComponent,
    ProfilAdminComponent,
    ProfilUtiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
        path: 'uti',
        component: ProfilUtiComponent
      },
      {
        path: 'admin',
        component: ProfilAdminComponent
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
