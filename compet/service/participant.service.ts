import { Injectable } from '@angular/core';
import { AttribGlob } from 'src/app/attribGlob';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Participant } from 'src/app/classe/participant';


@Injectable({
  providedIn: 'root',
})
export class ParticipantService {
    routename='participant';
  
  constructor(private http: HttpClient) { }


  getParticipants() {
    return this.http.get(AttribGlob.BASE_API_URL+'/'+this.routename);
  }

  getParticipantById(id_Pers: number) {
    return this.http.get<Participant>(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }

  createCategorie(participant: Participant) {
    console.log(participant);
    return this.http.post(AttribGlob.BASE_API_URL+'/'+this.routename, participant);
  }

  updateCategorie(participant: Participant) {
    return this.http.put(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + participant.id_Pers, Participant);
  }

  deleteCategorie(id_Pers:number) {
    return this.http.delete(AttribGlob.BASE_API_URL + '/'+this.routename+'/' + id_Pers);
  }
}