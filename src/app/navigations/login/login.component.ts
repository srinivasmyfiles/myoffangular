import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Register } from 'src/app/Register';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  register =new  Register();
  msg='';
  constructor(public log:AppService,private route: ActivatedRoute,private router: Router) {   }

  ngOnInit() {
  }

 handleLogin() {
    this.log.loginRegister(this.register).subscribe(  
      data=>{ console.log("response recieved");
      this.router.navigate(['/loginsucc']);
    },

      error=>{
        console.log("exception occured")
        this.msg='Invaild username or password';
  })
  }
}