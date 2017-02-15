import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EntersPage } from '../pages/enters/enters';
import { CreatemenuPage } from '../pages/createmenu/createmenu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EntersPage,
    CreatemenuPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EntersPage,
    CreatemenuPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
