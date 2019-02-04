import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItempagePage } from './itempage';

@NgModule({
  declarations: [
    ItempagePage,
  ],
  imports: [
    IonicPageModule.forChild(ItempagePage),
  ],
})
export class ItempagePageModule {}
