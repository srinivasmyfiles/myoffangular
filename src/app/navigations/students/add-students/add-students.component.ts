import { Student } from './../../stud-dashboard/student';
import { AppService } from './../../../app.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {

  student;
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private service: AppService) { }

  ngOnInit() {
    this.studentForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required]
    });
      // this.student = history.state.student;
  }

  addStudent(): void {
    this.service.addStudent(this.studentForm.value)
      .subscribe((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
    this.studentForm.reset();
  }

}
