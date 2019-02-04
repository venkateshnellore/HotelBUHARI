import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DishesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dishes',
  templateUrl: 'dishes.html',
})
export class DishesPage {

  public dishes_starter:any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishesPage');

    this.dishes_starter = [
      {item_id:1,item_img:'img/../assets/imgs/soup-2.jpg',item_name:"Soups",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:2,item_img:'img/../assets/imgs/FriesIstock.jpg',item_name:"Frnch_fries",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:3,item_img:'img/../assets/imgs/gobi-65.jpg',item_name:"Panner_65",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:4,item_img:'img/../assets/imgs/creditcards.jpg',item_name:"Gobi_65",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:5,item_img:'img/../assets/imgs/creditcards.jpg',item_name:"Crispy_veg",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"}
    ]
  }

}
