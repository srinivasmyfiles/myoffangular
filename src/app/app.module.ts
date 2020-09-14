import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PgOperationsComponent } from './navigations/pg-operations/pg-operations.component';
import { ScholasticHomeComponent } from './navigations/scholastic-home/scholastic-home.component';
import { DigitalClassroomComponent } from './navigations/digital-classroom/digital-classroom.component';
import { FacultyOperationsComponent } from './navigations/faculty-operations/faculty-operations.component';
import { IndividualLearningComponent } from './navigations/individual-learning/individual-learning.component';
import { TeamCollaborationComponent } from './navigations/team-collaboration/team-collaboration.component';
import { KnowledgeDevelopmentComponent } from './navigations/knowledge-development/knowledge-development.component';
import { OperationsResearchComponent } from './navigations/operations-research/operations-research.component';
import { OperationsNewsComponent } from './navigations/operations-news/operations-news.component';
import { RecordsComponent } from './navigations/records/records.component';
import { SlideshowComponent } from './navigations/slideshow/slideshow.component';
import { AddStudentsComponent } from './navigations/students/add-students/add-students.component';
import { ViewStudentsComponent } from './navigations/students/view-students/view-students.component';
import { StudDashboardComponent } from './navigations/stud-dashboard/stud-dashboard.component';
import { EditStudentsComponent } from './navigations/students/edit-students/edit-students.component';
import { MyChartComponent } from './navigations/my-chart/my-chart.component';
import { AppService } from './app.service';
import { QuesComponent } from './navigations/ques/ques.component';
import { AnsComponent } from './navigations/ans/ans.component';
import { LoginComponent } from './navigations/login/login.component';
import { RegisterComponent } from './navigations/register/register.component';
import { ReadqueComponent } from './navigations/readque/readque.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideNavComponent,
    PgOperationsComponent,
    ScholasticHomeComponent,
    DigitalClassroomComponent,
    FacultyOperationsComponent,
    IndividualLearningComponent,
    TeamCollaborationComponent,
    KnowledgeDevelopmentComponent,
    OperationsResearchComponent,
    OperationsNewsComponent,
    RecordsComponent,
    SlideshowComponent,
    AddStudentsComponent,
    ViewStudentsComponent,
    StudDashboardComponent,
    EditStudentsComponent,
    MyChartComponent,
    QuesComponent,
    AnsComponent,
    LoginComponent,
    RegisterComponent,
    ReadqueComponent,
    LoginsuccessComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
