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
  public  todayspecial:any;
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishesPage');

    this.dishes_starter = [
      {item_id:1,item_img:'../assets/imgs/soup-2.jpg',item_name:"Soups",item_description:"Soup is a primarily liquid food,",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:2,item_img:'../assets/imgs/FriesIstock.jpg',item_name:"Frnch fries",item_description:"Soup is a primarily liquid food,",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:3,item_img:'../assets/imgs/gobi-65.jpg',item_name:"Panner 65",item_description:"Soup is a primarily liquid food,",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:4,item_img:'../assets/imgs/starter-4.jpg',item_name:"Gobi 65",item_description:"Soup is a primarily liquid food,",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:5,item_img:'../assets/imgs/starter-5.jpg',item_name:"Crispy veg",item_description:"Soup is a primarily liquid food,",
    item_amount:230,item_helthtips:"take one soup daily"}
    ];

    this.dishes_main = [
      {item_id:1,item_img:'../assets/imgs/main-1.jpg',item_name:"Chicken Biriyani",item_description:"Ghee rice recipe is one of the most simplest one pot aromatic rice ",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:2,item_img:'../assets/imgs/main-2.jpg',item_name:"Mutton Biriyani",item_description:" rice recipe is one of the most simplest one pot aromatic rice",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:3,item_img:'../assets/imgs/main-3.jpg',item_name:"Fish Dum Biriyani",item_description:" rice recipe is one of the most simplest one pot  rice",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:4,item_img:'../assets/imgs/main-4.jpg',item_name:"Vegetable Biriyani",item_description:" rice recipe is one of the most simplest one  aromatic rice",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:5,item_img:'../assets/imgs/main-5.jpg',item_name:"Ghee Rice",item_description:" rice recipe is one of the most simplest one rice",
    item_amount:230,item_helthtips:"take one soup daily"}
    ]

    this.todayspecial=[
      {item_id:1,item_img:'../assets/imgs/todayspecial-1.jpg',item_name:"Chicken rice",item_description:"biryani takes time and practice to make but is worth every bit of the effort.",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:1,item_img:'../assets/imgs/todayspecial-2.jpg',item_name:"chicken special",item_description:"biryani takes time and practice to make but is worth.",
    item_amount:230,item_helthtips:"take one soup daily"},
    {item_id:1,item_img:'../assets/imgs/todayspecial-3.jpg',item_name:"Mechbooes",item_description:"biryani takes time and practice to make but is  effort.",
    item_amount:230,item_helthtips:"take one soup daily"},
    ]


  }
  itemdetails(dish){
  this.navCtrl.push(ItempagePage,{"item_details":dish});
  }

}
