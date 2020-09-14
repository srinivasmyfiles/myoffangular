import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Quesnaire } from 'src/app/Quesnaire';

@Component({
  selector: 'app-readque',
  templateUrl: './readque.component.html',
  styleUrls: ['./readque.component.css']
})
export class ReadqueComponent implements OnInit {
  id: number;
  quesnair :Quesnaire;

  constructor(private route: ActivatedRoute, private router: Router,
    private dataser:AppService) { }

  ngOnInit()  {
    this.quesnair=new Quesnaire();
    this.id=this.route.snapshot.params['id'];
    this.dataser.detailsQuesnaire(this.id )
    .subscribe(data => {
      console.log(data)
      this.quesnair = data;
    }, error => console.log(error));
  }
  Quesnaire(): Object {
    throw new Error("Method not implemented.");
  }
  list() {
    this.router.navigate(['que']);
  }


}
