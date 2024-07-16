import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  constructor(private _userService:UsersService){}
  local:any =localStorage.getItem('UserLoggedIn');
  userStatus:any=JSON.parse(this.local);
  ngOnInit(): void {
        
    if(localStorage.getItem('UserLoggedIn')!=null){
    let local:any = localStorage.getItem('UserLoggedIn')
    this.userStatus=JSON.parse(local);
    this._userService.currentLocal.subscribe((data)=>{
      console.log(data);
      if(data!=null&&data!=''){
        console.log(data);
      this.userStatus=data;
      }
    })
    }
  }
  logOut():void{
    localStorage.setItem('UserLoggedIn',JSON.stringify(false));
    this._userService.updateLocal(localStorage.getItem('UserLoggedIn'))
    this.userStatus=false;
  }
}
