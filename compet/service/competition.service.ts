import { Injectable } from '@angular/core';
import { AttribGlob } from 'src/app/attribGlob';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { HttpModule } from '@angular/http';
import { Competition } from 'src/app/classe/competition';


@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
    routename='competition';
  
  constructor(private http: HttpClient) { }


  getCompetitions() {
    return this.http.get(AttribGlob.BASE_API_URL+'/competition');
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
}