import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {from} from 'rxjs';

@Component({
  selector: 'app-detailcompetition',
  templateUrl: './detailcompetition.component.html',
  styleUrls: ['./detailcompetition.component.css']
})
export class DetailcompetitionComponent implements OnInit {
detailcompetition;
competition_organisateur;
nbre_participant;
  constructor(private http: Http,private route: ActivatedRoute) { }

  ngOnInit() {

    let id=this.route.snapshot.params['id'];
    
    this.http.get('http://localhost:3000/route_competition_detail/'+id).subscribe(response=>{
      console.log(response.json());
      this.detailcompetition = response.json();
   });
   
   this.http.get('http://localhost:3000/route_nbre_participant/'+id).subscribe(response=>{
    console.log(response.json());
    this.nbre_participant = response.json();
 });
   this.http.get('http://localhost:3000/route_organisateur_detail/'+id).subscribe(response=>{
    console.log(response.json());
    this.competition_organisateur = response.json();
 });

  }

}
