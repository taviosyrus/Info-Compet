import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

import {from, Observable} from 'rxjs';
import { ParticipantService } from 'service/participant.service';


@Component({
  selector: 'app-listparticipant',
  templateUrl: './listparticipant.component.html',
  styleUrls: ['./listparticipant.component.css']
})
export class ListparticipantComponent implements OnInit {
data;

  constructor(private participantservice:ParticipantService) { }

  ngOnInit() {
    this.participantservice.getParticipants().subscribe(response=>{
      this.data = response
   });
  }
}
