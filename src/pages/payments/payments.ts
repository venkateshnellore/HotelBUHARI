import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the PaymentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }

  cashpayment(){
    const toast = this.toastCtrl.create({
      message: 'Someone will come and collect cash from your table',
      duration: 3000
    });
    toast.present();
  }

  cardpayment(){
    const toast = this.toastCtrl.create({
      message: 'Sorry, card payment is not available yet in our hotel',
      duration: 3000
    });
    toast.present();
  }
}
