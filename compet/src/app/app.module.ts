import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListparticipantComponent } from './listparticipant/listparticipant.component';
import { ListcompetitionComponent } from './listcompetition/listcompetition.component';
import { EnregcompetitionComponent } from './enregcompetition/enregcompetition.component';
import { DetaiparticipantComponent } from './detaiparticipant/detaiparticipant.component';
import { DetailcompetitionComponent } from './detailcompetition/detailcompetition.component';
import { ListeorganisateurComponent } from './listeorganisateur/listeorganisateur.component';
import { DetailorganisateurComponent } from './detailorganisateur/detailorganisateur.component';
import { EnregorganisateurComponent } from './enregorganisateur/enregorganisateur.component';
import { LoginComponent } from './login/login.component';
import { EnregcategorieComponent } from './enregcategorie/enregcategorie.component';
import { ValidecompetComponent } from './validecompet/validecompet.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ListparticipantComponent,
    ListcompetitionComponent,
    EnregcompetitionComponent,
    DetaiparticipantComponent,
    DetailcompetitionComponent,
    ListeorganisateurComponent,
    DetailorganisateurComponent,
    EnregorganisateurComponent,
    LoginComponent,
    EnregcategorieComponent,
    ValidecompetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
      path: 'login',
      component: LoginComponent
      },
      {
        path: '',
        component: AcceuilComponent
        },
        {
          path: 'listparticipant',
          component: ListparticipantComponent
          },
          {
            path: 'listcompetition',
            component: ListcompetitionComponent
            },
            {
              path: 'enregcompetition',
              component: EnregcompetitionComponent
              },
              {path: 'detailparticipant/:id',
                component: DetaiparticipantComponent
                },
                {path: 'detailcompetition/:id',
                  component: DetailcompetitionComponent
                  },
                  {path: 'listeorganisateur',
                    component: ListeorganisateurComponent
                    }
                    ,
                    {path: 'enregorganisateur',
                      component: EnregorganisateurComponent
                      }
                      ,
                    {path: 'enregcategorie',
                      component: EnregcategorieComponent
                      }
                      ,
                    {path: 'validecompet',
                      component: ValidecompetComponent
                      }
                      ,
                  {path: 'detailorganisateur/:id',
                    component: DetailorganisateurComponent
                    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
