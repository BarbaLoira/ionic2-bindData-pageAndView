import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { jsonFile } from '../assets/json/jsonPlace.json';

/*
  Generated class for the JsonPlace provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class JsonPlace {

  constructor(public http: Http) {
    console.log('Hello JsonPlace Provider');
  }

  

   showFile() {
   let example = {
    "igrejas": [
      { "id": "1", "name": "Windstorm" },
      { "id": "2", "name": "Bombasto" },
      { "id": "3", "name": "Magneta" },
      { "id": "4", "name": "Tornado" }
    ],
    "monumentos": [
      { "id": "1", "name": "monumentos" },
      { "id": "2", "name": "monumentos" },
      { "id": "3", "name": "monumentos" },
      { "id": "4", "name": "monumentos" }
    ]
  };
   return example;
  }


}
