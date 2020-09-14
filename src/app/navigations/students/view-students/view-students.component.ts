import { Student } from './../../stud-dashboard/student';
import { AppService } from './../../../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  public students = [];
  student = new Student();

  constructor(private service:AppService) { }

  ngOnInit(): void{
    this.getStudents();
  }

  getStudents(): void{
    this.service.getStudents().subscribe(data => this.students = data);
  }

  deleteStudent(studentId: string){
    this.service.deleteStudent(studentId)
    .subscribe((response) => {
      console.log(response);
      this.getStudents();
    }, (error) => {
      console.log(error);
    })
  }

  getStudentById(studentId: string){
    this.service.getStudentById(studentId)
    .subscribe((studentData) => {
      this.student = studentData;
    }, (error) => {
      console.log(error);
    })
  }

}
