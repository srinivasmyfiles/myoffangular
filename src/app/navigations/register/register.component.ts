import { Component, OnInit } from '@angular/core';

import { Register } from 'src/app/Register';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  register =new  Register();
  msg='';
  constructor(  private regService:AppService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(){
  }
  reguser(){
    this.regService.Registeruser(this.register).subscribe(  
      data=>{ console.log("response recieved");
      this.router.navigate(['/knowledge']);
    },

      error=>{
        console.log("exception occured")
        this.msg=' The username already exists. Please use a different username ';
  })



    
  }

}