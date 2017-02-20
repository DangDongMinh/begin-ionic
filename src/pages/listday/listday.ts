import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenumorningPage } from '../menumorning/menumorning';
import { MenuafternoonPage } from '../menuafternoon/menuafternoon';
import { MenulunchPage } from '../menulunch/menulunch';

/*
  Generated class for the Listday page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-listday',
  templateUrl: 'listday.html'
})
export class ListdayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListdayPage');
  }

  menumorning() {
    this.navCtrl.push(MenumorningPage);
  }

  menuafternoon() {
    this.navCtrl.push(MenuafternoonPage);
  }

  menulunch() {
    this.navCtrl.push(MenulunchPage);
  }

}
