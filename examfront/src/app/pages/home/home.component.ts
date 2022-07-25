import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
//import { LoginComponent } from '../login/login.component';
import {OwlOptions }from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn:any;
  user:any;
  constructor(private login:LoginService,private router:Router) { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
   
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }
   

  ngOnInit(): void {

    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe((data) => {
      this.isLoggedIn=this.login.isLoggedIn();
     this.user=this.login.getUser();
    });
  }


  explore(){
  

    if(this.isLoggedIn==true){
      this.router.navigate(['user-dashboard/0'])
    }else{
      this.router.navigate(['login'])
    }
  }


  register(){
  

    if(this.isLoggedIn==true){
      this.router.navigate(['user-dashboard/0'])
    }else{
      this.router.navigate(['signup'])
    }
  }

  


  
   
 
}
