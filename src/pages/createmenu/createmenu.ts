import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuggestmenuPage } from '../suggestmenu/suggestmenu';

/*
  Generated class for the Createmenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-createmenu',
  templateUrl: 'createmenu.html'
})
export class CreatemenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('Hello CreatemenuPage page');
  }

  SuggestmenuPage() {
    this.navCtrl.push(SuggestmenuPage);
  }

}
