import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JsonPlace } from '../../providers/json-place';
/*
  Generated class for the Second page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class SecondPage {
  name= "altoDaSE";
str: any;
  example: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public jsonPlace: JsonPlace) {
     this.str=this.navParams.get('name');
 this.example= this.jsonPlace.showFile();
    
  }

  ionViewDidLoad() {
 

  }

}
