import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-knowledge-development',
  templateUrl: './knowledge-development.component.html',
  styleUrls: ['./knowledge-development.component.css']
})
export class KnowledgeDevelopmentComponent implements OnInit {

  constructor(public log:AppService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

}
