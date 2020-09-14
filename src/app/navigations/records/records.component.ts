import { AppService } from './../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  public students = [];

  constructor(private service: AppService) { }

  ngOnInit(){
    this.service.getStudents().subscribe(data => this.students = data);
  }

}
