import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BubbleSortPage } from './bubble-sort.page';

const routes: Routes = [
  {
    path: '',
    component: BubbleSortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BubbleSortPageRoutingModule {}
