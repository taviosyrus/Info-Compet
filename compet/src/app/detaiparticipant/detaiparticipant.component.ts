import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

import {from} from 'rxjs';

@Component({
  selector: 'app-detaiparticipant',
  templateUrl: './detaiparticipant.component.html',
  styleUrls: ['./detaiparticipant.component.css']
})
export class DetaiparticipantComponent implements OnInit {
detailparticipant;
listinfocompetition;

  constructor(private http: Http,private router: Router,private route: ActivatedRoute) { }
  
  ngOnInit() {
    
    let id=this.route.snapshot.params['id'];
    

    this.http.get('http://localhost:3000/route_participant/'+id).subscribe(response=>{
    //  console.log(response.json());
      this.detailparticipant = response.json();
   });

   this.http.get('http://localhost:3000/route_participant_competition/'+id).subscribe(response=>{
    //console.log(response.json());
    this.listinfocompetition = response.json();
 });


   
  }

}
