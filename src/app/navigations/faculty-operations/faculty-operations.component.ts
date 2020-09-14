import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Observable } from 'rxjs';
import { Quesnaire } from 'src/app/Quesnaire';

@Component({
  selector: 'app-faculty-operations',
  templateUrl: './faculty-operations.component.html',
  styleUrls: ['./faculty-operations.component.css']
})
export class FacultyOperationsComponent implements OnInit {

  constructor(public datah:AppService) { }

  quedatas:any;
   
  quesn :Observable<Quesnaire[]>;

  ngOnInit(): void {

   this.datah.Getque().subscribe((data)=>{this.quedatas=data})

  }

  // deleteQUE(id: number) {
  //   this.datah.deleteQuesnaire(id)
  //     .subscribe(
  //       data => {
  //         console.log(data);
  //         this.datah.Getque();
  //       });
  // }
}
