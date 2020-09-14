import { Report } from './navigations/my-chart/report';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Student } from './navigations/stud-dashboard/student';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Quesnaire } from './Quesnaire';
import { Register } from './Register';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  student = new Student();
  report = new Report();

  constructor(private http:HttpClient) { }

  // getStudents():Observable<IRecord[]>{
  //   return this.http.get<IRecord[]>("/assets/json_files/records.json");   
  // }

  getImages(): Observable<any>{
    return this.http.get("http://localhost:8080/getImages");
  }

  getReports(): Observable<Report[]>{
    return this.http.get<Report[]>("http://localhost:8080/api/reports");

  }

  getStudents():Observable<Student[]>{
    return this.http.get<Student[]>("http://localhost:8080/api/students");
  }

  addStudent(student:Student){
    let body = JSON.stringify(student);
    return this.http.post("http://localhost:8080/api/students", body, {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteStudent(studentId: string){
    return this.http.delete("http://localhost:8080/api/students/"+studentId);
  }

  getStudentById(studentId: string): Observable<any>{
    return this.http.get("http://localhost:8080/api/students/"+studentId)
    .map((response:Response) => response);
  }

  updateStudent(student: Student){
    let body = JSON.stringify(student);
    return this.http.put("http://localhost:8080/api/students/"+student.id, body, {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  private baseUrl = 'http://localhost:8080/fau/quesnaire';
  private baseUrl1 = 'http://localhost:8080/fau/quesnair';
  private baseUrl2='http://localhost:8080/reg/users';
 

  public Getque():Observable<any>{
    return this.http.get("http://localhost:8080/fau/que");
   }
   createQuesnaire(Quesnaire: Object): Observable<Object> {
    return this.http.post(("http://localhost:8080/fau/quesnaire"), Quesnaire);
  }

  deleteQuesnaire(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateQuesnaire(Quesnaire: any,value: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${Quesnaire.id}`,value);
  }
  detailsQuesnaire(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  Registeruser(Register: Object): Observable<any> {
    return this.http.post<any>(("http://localhost:8080/reg/Reg"), Register);
  }

  userverf(username: boolean): Observable<any> {
    return this.http.get((`${this.baseUrl2}/${username}`));
  }

  loginRegister(Register:Register): Observable<any> {
    return this.http.post<any>(("http://localhost:8080/reg/login"), Register);
  } 
  private handleError(error: Response){
    return Observable.throw(error);
  }
}
