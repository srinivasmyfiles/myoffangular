 import { MyChartComponent } from './navigations/my-chart/my-chart.component';
import { EditStudentsComponent } from './navigations/students/edit-students/edit-students.component';
import { ViewStudentsComponent } from './navigations/students/view-students/view-students.component';
import { StudDashboardComponent } from './navigations/stud-dashboard/stud-dashboard.component';
import { AddStudentsComponent } from './navigations/students/add-students/add-students.component';
import { SlideshowComponent } from './navigations/slideshow/slideshow.component';
import { RecordsComponent } from './navigations/records/records.component';

import { OperationsNewsComponent } from './navigations/operations-news/operations-news.component';
import { OperationsResearchComponent } from './navigations/operations-research/operations-research.component';
import { KnowledgeDevelopmentComponent } from './navigations/knowledge-development/knowledge-development.component';
import { TeamCollaborationComponent } from './navigations/team-collaboration/team-collaboration.component';
import { IndividualLearningComponent } from './navigations/individual-learning/individual-learning.component';
import { PgOperationsComponent } from './navigations/pg-operations/pg-operations.component';
import { FacultyOperationsComponent } from './navigations/faculty-operations/faculty-operations.component';
import { DigitalClassroomComponent } from './navigations/digital-classroom/digital-classroom.component';
import { ScholasticHomeComponent } from './navigations/scholastic-home/scholastic-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuesComponent } from './navigations/ques/ques.component';
import { AnsComponent } from './navigations/ans/ans.component';
import { LoginComponent } from './navigations/login/login.component';
import { RegisterComponent } from './navigations/register/register.component';
import { ReadqueComponent } from './navigations/readque/readque.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: SlideshowComponent },
    { path: 'scholastic', component: ScholasticHomeComponent },
    { path: 'digital', component: DigitalClassroomComponent },
    { path: 'faculty', component: FacultyOperationsComponent },
    { path: 'parent', component: PgOperationsComponent },
    { path: 'que', component: QuesComponent },
    { path: 'ans', component: AnsComponent},
    { path: 'individual', component: IndividualLearningComponent },
    { path: 'team', component: TeamCollaborationComponent },
    { path: 'knowledge', component: KnowledgeDevelopmentComponent },
    { path: 'research', component: OperationsResearchComponent },
    { path: 'news', component: OperationsNewsComponent },
    { path: 'records', component: RecordsComponent },
    { path: 'dash', component: StudDashboardComponent },
    { path: 'addstudent', component: AddStudentsComponent },
    { path: 'viewstudent', component: ViewStudentsComponent },
    { path: 'editstudent', component: EditStudentsComponent },
    { path: 'chart', component: MyChartComponent },
    { path: 'login', component:LoginComponent},
    { path: 'register', component:RegisterComponent},
    { path: 'read/:id', component:ReadqueComponent},
    { path: 'loginsucc', component:LoginsuccessComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
