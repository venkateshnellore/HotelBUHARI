import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ItempagePage} from '../itempage/itempage';

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
  public dishes_main:any;
  public dishes_special:any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishesPage');

    this.dishes_starter = [
      {item_id:1,item_img:'../assets/imgs/soup-2.jpg',item_name:"Soups",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:2,item_img:'../assets/imgs/FriesIstock.jpg',item_name:"Frnch fries",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:3,item_img:'../assets/imgs/gobi-65.jpg',item_name:"Panner 65",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:4,item_img:'../assets/imgs/starter-4.jpg',item_name:"Gobi 65",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:5,item_img:'../assets/imgs/starter-5.jpg',item_name:"Crispy veg",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"}
    ];

    this.dishes_main = [
      {item_id:1,item_img:'../assets/imgs/main-1.jpg',item_name:"Chicken Biriyani",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:2,item_img:'../assets/imgs/main-2.jpg',item_name:"Mutton Biriyani",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:3,item_img:'../assets/imgs/main-3.jpg',item_name:"Fish Dum Biriyani",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:4,item_img:'../assets/imgs/main-4.jpg',item_name:"Vegetable Biriyani",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:5,item_img:'../assets/imgs/main-5.jpg',item_name:"Ghee Rice",item_description:"hello darling",
    item_amount:230,item_helthtips:"take one soup daily"}
    ]
  }
  itemdetails(dish){
  this.navCtrl.push(ItempagePage,{"item_details":dish});
  }

}
