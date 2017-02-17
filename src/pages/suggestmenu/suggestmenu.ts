import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuggestmenudetailPage } from '../suggestmenudetail/suggestmenudetail';

/*
  Generated class for the Suggestmenu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-suggestmenu',
  templateUrl: 'suggestmenu.html'
})
export class SuggestmenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestmenuPage');
  }
  SuggestmenudetailPage() {
    this.navCtrl.push(SuggestmenudetailPage);
  }

}
