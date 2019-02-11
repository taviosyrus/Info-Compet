import { Component, OnInit } from '@angular/core';
import { Con } from '../Connection';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  users = new Con('guigui9531free@gmail.com', 'AzertyU');
  type = ['Utilisateur', 'Administrateur'];

  constructor() { }

  ngOnInit() {
  }

}
