import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-uti',
  templateUrl: './profil-uti.component.html',
  styleUrls: ['./profil-uti.component.css']
})
export class ProfilUtiComponent implements OnInit {

  historique = ['1', 'Natation', 'Sport', '3 ème', '1450'];
  constructor() { }

  ngOnInit() {
  }

}
