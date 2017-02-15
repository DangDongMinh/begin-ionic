import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreatemenuPage } from '../createmenu/createmenu';

/*
  Generated class for the Enters page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enters',
  templateUrl: 'enters.html'
})
export class EntersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.navCtrl.setRoot(EntersPage);
  }


  ionViewDidLoad() {
    console.log('Hello EntersPage page');
  }

  nextPage() {
    this.navCtrl.push(CreatemenuPage);
  }
}
