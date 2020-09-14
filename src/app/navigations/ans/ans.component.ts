import { Component, OnInit } from '@angular/core';
import { Quesnaire } from 'src/app/Quesnaire';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ans',
  templateUrl: './ans.component.html',
  styleUrls: ['./ans.component.css']
})
export class AnsComponent implements OnInit {

  constructor(public datah:AppService,private route: ActivatedRoute,private router: Router) { }

  quedatas:Observable<Quesnaire[]>;

  ngOnInit(): void {

   this.fetchQueList();

  }
  fetchQueList() {
    this.quedatas=this.datah.Getque();
  }

  deleteQUES(id: number) {
    this.datah.deleteQuesnaire(id)
      .subscribe(
        data => {
          console.log(data);
          this.fetchQueList();
        },
        error => console.log(error));
  }

  detailsQUES(id: number){
  this.router.navigate(['read', id]);
  }
 
}
