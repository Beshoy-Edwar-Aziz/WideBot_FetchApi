import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsersService } from '../../Services/users.service';
import { Router } from '@angular/router';
let {pattern,minLength,maxLength,required}= Validators

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _userService:UsersService, private _router:Router){}
  UsersList:any=[];
  logUser:FormGroup=new FormGroup({
    email:new FormControl('',[required]),
    password:new FormControl('',[required,pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)])
  })
  handleLogin():void{
    if(localStorage.getItem('UsersList')!=null){
      let local:any= localStorage.getItem('UsersList');
      this.UsersList= JSON.parse(local);
    }
    if(this.UsersList.length!=0){
      for(let i=0;i<this.UsersList.length;i++){
        if(this.UsersList[i].email==this.logUser.value.email&&this.UsersList[i].password==this.logUser.value.password){
          Swal.fire({
            title:'Success',
            icon:'success'
          })
          localStorage.setItem('UserLoggedIn',JSON.stringify(true));
          this._userService.updateLocal(localStorage.getItem('UserLoggedIn'))
          this._router.navigate(['/Users'])
          break;
        }
      }
    }
  }
}
