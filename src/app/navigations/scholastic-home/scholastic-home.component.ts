import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-scholastic-home',
  templateUrl: './scholastic-home.component.html',
  styleUrls: ['./scholastic-home.component.css']
})
export class ScholasticHomeComponent implements OnInit {
  
  index = 0;
  image = null;
  public images:any = [];

  constructor(private service: AppService) { 
    interval(2000).subscribe(x => {
      this.slider();
    });
  }

  ngOnInit(): void {
    this.service.getImages()
    .subscribe(response => {
      this.images = response;
    });
  }

  slider(){
    let i;
    let dots = document.getElementsByClassName("demo");
    this.image = this.images[this.index]; 
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" teams-white", "");
    }
    this.index++;
    dots[this.index-1].className += " teams-white";
    if (this.index > this.images.length - 1) {
      this.index = 0;
    }
  }

  currentSlide(n){
    this.index = n - 1;

  }
}
