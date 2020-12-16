import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  routeObs: Observable<ParamMap>;

  item : any; //Qui salverò la traccia selezionata
  apiServiceObs: Observable<Object>;

  //Usiamo la dependency injection per farci mandare i moduli del routing e dello
  //SpotifyService
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private location: Location ) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let id = params.get('id'); //Ottengo l'id dai parametri
    console.log (id); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.apiServiceObs = this.service.getItem(id) ;
    this.apiServiceObs.subscribe((data)=>this.item = data)
  }

  back()
  {
    this.location.back();
  }

}
