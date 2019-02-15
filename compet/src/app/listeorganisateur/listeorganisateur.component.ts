import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {from} from 'rxjs';
import { OrganisateurService } from 'service/organisateur.service';




@Component({
  selector: 'app-listeorganisateur',
  templateUrl: './listeorganisateur.component.html',
  styleUrls: ['./listeorganisateur.component.css']
})
export class ListeorganisateurComponent implements OnInit {

  data;

  constructor(private organisateurservice:OrganisateurService) { }

  ngOnInit() {
    // this.attribGlob.globalVar=1;
    // this.attribGlob.globalEtat=true;

    this.organisateurservice.getOrganisateurs().subscribe(response=>{
      this.data = response
   });

 
  }

}
