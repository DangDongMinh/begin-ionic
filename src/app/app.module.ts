import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntersPage } from '../pages/enters/enters';
import { CreatemenuPage } from '../pages/createmenu/createmenu';
import { SuggestmenuPage } from '../pages/suggestmenu/suggestmenu';
import { SuggestmenudetailPage } from '../pages/suggestmenudetail/suggestmenudetail';
import { ListdayPage } from '../pages/listday/listday';
import { MenumorningPage } from '../pages/menumorning/menumorning';
import { MenuafternoonPage } from '../pages/menuafternoon/menuafternoon';
import { MenulunchPage } from '../pages/menulunch/menulunch';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntersPage,
    CreatemenuPage,
    SuggestmenuPage,
    SuggestmenudetailPage,
    ListdayPage,
    MenumorningPage,
    MenuafternoonPage,
    MenulunchPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntersPage,
    CreatemenuPage,
    SuggestmenuPage,
    SuggestmenudetailPage,
    ListdayPage,
    MenumorningPage,
    MenuafternoonPage,
    MenulunchPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
