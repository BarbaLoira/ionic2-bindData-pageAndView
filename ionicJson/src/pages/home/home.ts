import { Component } from '@angular/core';
import { SecondPage } from '../second/second';
import { NavController } from 'ionic-angular';
import { JsonPlace } from '../../providers/json-place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 
  
  constructor(public navCtrl: NavController, public myJson: JsonPlace) {

  }
 
  launchSecondPage(placeList: string) {
let data = {
  name : placeList
}

this.navCtrl.push(SecondPage,data);
  }

  ionViewDidLoad() {
    // console.log(JSON.stringify(myJson));
    // Put here the code you want to execute
    // this.dataPage = this.myJson.showFile();

  }

}
