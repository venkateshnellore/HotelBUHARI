import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItempagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itempage',
  templateUrl: 'itempage.html',
})

export class ItempagePage {
  public itemDetails:any=[];
  public title;
  public desc;
  public img;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemDetails=this.navParams.get("item_details");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItempagePage',this.itemDetails);
    this.title=this.itemDetails.item_name;
    this.desc =this.itemDetails.item_description;
    this.img = this.itemDetails.item_img;
  }

}
