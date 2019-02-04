import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{DishesPage} from '../dishes/dishes';
import{ServicePage} from '../service/service';
import{DemandPage} from '../demand/demand';
import{PaymentsPage} from '../payments/payments';


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');

  }
// main page navigations
  dishes(){
    this.navCtrl.push(DishesPage);
  }

  Service(){
    this.navCtrl.push(ServicePage);
  }

  Demand(){
    this.navCtrl.push(DemandPage);
  }

  Payments(){
    this.navCtrl.push(PaymentsPage);
  }
}
