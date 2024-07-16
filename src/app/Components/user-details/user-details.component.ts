import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  constructor(private _userService:UsersService, private _activatedRoute:ActivatedRoute){}
  Id:number=0;
  userData:any={};
  
  ngOnInit(): void {
    let route:any=this._activatedRoute.snapshot.params;
    this.Id=route.Id;
    this._userService.getUserById(this.Id).subscribe((data)=>{
      console.log(data);
      this.userData=data;
    })
  }

}
