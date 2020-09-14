import { AppService } from './../../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit-students.component.html',
  styleUrls: ['./edit-students.component.css']
})
export class EditStudentsComponent implements OnInit {

  student;
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.student = history.state.student;
  }

  updateStudent(): void{
    this.service.updateStudent(this.student)
    .subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    }
  );

  }
}
