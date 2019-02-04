import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{DashboardPage} from '../pages/dashboard/dashboard';
//main page imports
import{DishesPage} from '../pages/dishes/dishes';
import{ServicePage} from '../pages/service/service';
import{DemandPage} from '../pages/demand/demand';
import {PaymentsPage} from '../pages/payments/payments';
import {ItempagePage}  from '../pages/itempage/itempage';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    DishesPage,
    ServicePage,
    DemandPage,
    PaymentsPage,
    ItempagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    DishesPage,
    ServicePage,
    DemandPage,
    PaymentsPage,
    ItempagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
