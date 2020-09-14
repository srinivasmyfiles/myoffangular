import { Component, OnInit } from '@angular/core';
import { Quesnaire } from 'src/app/Quesnaire';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-ques',
  templateUrl: './ques.component.html',
  styleUrls: ['./ques.component.css']
})
export class QuesComponent implements OnInit {
  quesnaire: Quesnaire =new  Quesnaire();
  submitted = false;
  constructor(  private queService:AppService) { }

   
  ngOnInit(): void {
  }
 newQuesnaire():void{
   this.submitted=false;
   this.quesnaire=new Quesnaire();
 }
 save(){
  this.queService.createQuesnaire(this.quesnaire)
   .subscribe(data=>console.log(data));
   this.quesnaire=new Quesnaire();
 }
 
onSubmit() {
  this.submitted = true;
  this.save();    
}

}


