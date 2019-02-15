import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {from} from 'rxjs';


@Component({
  selector: 'app-detailorganisateur',
  templateUrl: './detailorganisateur.component.html',
  styleUrls: ['./detailorganisateur.component.css']
})
export class DetailorganisateurComponent implements OnInit {
  detailparticipant;
  listinfocompetition;
    constructor(private http: Http,private route: ActivatedRoute) { }
  
  ngOnInit() {
    let id=this.route.snapshot.params['id'];
    this.http.get('http://localhost:3000/route_organisateur/'+id).subscribe(response=>{
      console.log(response.json());
      this.detailparticipant = response.json();
   });

   this.http.get('http://localhost:3000/route_organisateur_competition/'+id).subscribe(response=>{
    console.log(response.json());
    this.listinfocompetition = response.json();
 });

  }

}
