import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Animation, AnimationController, createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.page.html',
  styleUrls: ['./bubble-sort.page.scss'],
})
export class BubbleSortPage implements OnInit {
  // @ViewChild('animatearray', {read: ElementRef, static: true}) animearray:ElementRef;
  @ViewChild('animearray', {read: ElementRef}) bars;
  animeRef:any;
  speed = 1000;
  array=[5, 1, 4, 2, 8];
  steps:any;
  animating = false;
  timeOutContext:any;

  constructor(  private animationController:AnimationController) { }

  ngOnInit() {
    // create a copy of the array
    const arr = [...this.array];
    this.steps = this.bubbleSort(arr);
  }
  ngAfterViewInit() {

  }

  start()
  {
    this.createAnimations();
  }

  // async animateAll(animations)
  // {
  //   this.animating = true;
  //   for(let i=0; i<animations.length/2; i+=2)
  //   {
  //     const group=this.animationController.create()
  //     .addAnimation([animations[i], animations[i+1]]);
  //     await group.play();
  //   }
  // }

  async createAnimations()
  {
    console.log(this.steps);
    const elemPost=[];
    for (let i = 0; i < this.array.length; i++) {
      const elem = this.bars.nativeElement.children[i];
      elemPost.push( [i,this.array[i],elem.getBoundingClientRect().x,elem]);
    }

    for (let i = 0; i < this.steps.length; i++) {
      const step = this.steps[i];
      if (step.swapped === true){
        // get current position of the elements from elemPost
        const index1 = elemPost.findIndex((elem) => elem[1] === this.array[step.index1]);
        const index2 = elemPost.findIndex((elem) => elem[1] === this.array[step.index2]);
        const elem1 = elemPost[index1];
        const elem2 = elemPost[index2];
        // swap the elements position using animation
        const animation1 = createAnimation()
        .addElement(elem1[3])
        .duration(this.speed)
        .fromTo('transform', `translateX(${elem1[2]}px)`, `translateX(${elem2[2]}px)`);
        const animation2 = createAnimation()
        .addElement(elem2[3])
        .duration(this.speed)
        .fromTo('transform', `translateX(${elem2[2]}px)`, `translateX(${elem1[2]}px)`);
        const group = this.animationController.create()
        .addAnimation([animation1, animation2]);
        await group.play();
        // swap the elements in the array
        const temp = this.array[step.index1];
        this.array[step.index1] = this.array[step.index2];
        this.array[step.index2] = temp;
        // swap the elements in the elemPost
        elemPost[index1] = [...elem2];
        elemPost[index2] = [...elem1];
        elemPost[index1][1] = this.array[step.index1];
        elemPost[index2][1] = this.array[step.index2];
        elemPost[index1][2] = elem1[2];
        elemPost[index2][2] = elem2[2];
        elemPost[index1][0] = elem1[0];
        elemPost[index2][0] = elem2[0];
      }

    }
  }



  bubbleSort(arr: number[])
  {
    const steps=[]
    let swapped = false;
    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++) {
        const step={
          index1:i,
          index2:i+1,
          swapped:false,
          arr:[]
        }
        if (arr[i] > arr[i + 1]) {
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
          step.swapped=true;
        }
        step.arr=[...arr];
        steps.push(step);
      }
    } while (swapped);
    return steps;
  }


  pause()
  {
    if (this.animeRef)
    {
      this.animeRef.pause();
    }
  }
}
