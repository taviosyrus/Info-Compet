import { Injectable } from '@angular/core';
import { AttribGlob } from 'src/app/attribGlob';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { HttpModule } from '@angular/http';
import { Competition } from 'src/app/classe/competition';
import { Organisateur } from 'src/app/classe/organisateur';
import { Postuler } from 'src/app/classe/postuler';


@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
    routename='competition';
  
  constructor(private http: HttpClient) { }


  getCompetitions() {
    return this.http.get(AttribGlob.BASE_API_URL+'/competition');
  }

  getCompetitions_voir() {
    return this.http.get(AttribGlob.BASE_API_URL+'/competition_voir');
  }
  getCompetitions_voir_categorie(libelle:string) {
    return this.http.get(AttribGlob.BASE_API_URL+'/competition_voir_categorie/'+libelle);
  }

  getCompetitions_voir_categorie_NVall(id_Pers:number) {
    return this.http.get(AttribGlob.BASE_API_URL+'/competition_voir_categorie_nv/'+id_Pers);
  }
  getCompetitions_voir_listecandidature(id_Comp:number) {
    return this.http.get(AttribGlob.BASE_API_URL+'/competition_voir_listecandidature/'+id_Comp);
  }
  

  getCompetitions_voir_categorie_NV(id_Pers:number,libelle:string) {
    return this.http.get(AttribGlob.BASE_API_URL+'/competition_voir_categorie_nv/'+id_Pers+'/'+libelle);
  }
  getCompetitionById(id_Comp: number) {
    return this.http.get<Competition>(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Comp);
  }

  createCompetition(competition: Competition) {
    console.log(competition);
    return this.http.post(AttribGlob.BASE_API_URL+'/'+this.routename, competition);
  }

  updateCompetition(Competition: Competition) {
    return this.http.put(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + Competition.id_Comp, Competition);
  }

  deleteCompetition(id_Comp:number) {
    return this.http.delete(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Comp);
  }

    ////autre
    getOrganisateurById2(id_Comp: number) {
      return this.http.get<Organisateur>(AttribGlob.BASE_API_URL + '/route_organisateur_detail/' + id_Comp);
    }

  getNbreParticipant(id_Comp: number) {
    return this.http.get<Competition>(AttribGlob.BASE_API_URL + '/route_nbre_participant/' + id_Comp);
  }


  createParticiper(postuler:Postuler) {
    
    return this.http.post(AttribGlob.BASE_API_URL+'/postuler', postuler);
  }

}