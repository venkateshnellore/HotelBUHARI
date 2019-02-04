import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the DemandPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demand',
  templateUrl: 'demand.html',
})
export class DemandPage {

  public demand:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemandPage');
    this.demand =[
      {id:1,name:"water"},
      {id:2,name:"Sambar"},
      {id:3,name:"Chutney"},
      {id:4,name:"Tissue"},
      {id:5,name:"Onion"},
      {id:6,name:"Lemon"},
      {id:7,name:"Plate"},
      {id:8,name:"Finger Bowl"},
      {id:9,name:"Raitha (Onion)"},
      {id:10,name:"Spoon"}
    ];
  }

  requestus(){
    const toast = this.toastCtrl.create({
      message: 'The items you requested will be serviced soon',
      duration: 3000
    });
    toast.present();
  }

}
