import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BubbleSortPageRoutingModule } from './bubble-sort-routing.module';

import { BubbleSortPage } from './bubble-sort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BubbleSortPageRoutingModule
  ],
  declarations: [BubbleSortPage]
})
export class BubbleSortPageModule {}
