import { Component, OnInit } from '@angular/core';
import { interval, observable } from 'rxjs';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  events = ["Select", "Event1", "Event2", "Event3", "Event4"];
  index = 0;
  image = null;
  images = [
      { src: "/assets/images/1.jpg", name: "city" },
      { src: "/assets/images/2.jpg", name: "mountains" },
      { src: "/assets/images/3.jpg", name: "cliff" },
      { src: "/assets/images/4.jpg", name: "snow" },
      { src: "/assets/images/5.jpg", name: "forest" }
  ]; 

  constructor() { 
    interval(2000).subscribe(x => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    let i;
    let dots = document.getElementsByClassName("demo");
    this.image = this.images[this.index]; 
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" teams-white", "");
    }
    this.index++;
    dots[this.index - 1].className += " teams-white";
    if (this.index > this.images.length - 1) {
      this.index = 0;
    }
  }

  currentSlide(n){
    this.index = n - 1;
  }

}
