import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  features = [
    {
      title: 'Bubble Sort',
      url: '/bubble-sort',
    },
    {
      title: 'Insertion Sort',
      url: '/insertion-sort',
    },
    {
      title: 'Selection Sort',
      url: '/selection-sort',
    },
    {
      title: 'Merge Sort',
      url: '/merge-sort',
    },
    {
      title: 'Quick Sort',
      url: '/quick-sort',
    },
  ];
  constructor() {}

}
