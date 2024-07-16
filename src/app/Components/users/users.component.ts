import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
import { from, Subscription, take, takeWhile } from 'rxjs';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { LoadingComponent } from "../loading/loading.component";
import { Router } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { SearchPipe } from '../../Pipes/search.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatPaginatorModule, LoadingComponent,SearchPipe,FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  constructor(private _userService:UsersService,private _router:Router){}
  // Variables
  usersList:any=[];
  obs:any = from (this.usersList);
  pageSize:number=5;
  pageIndex:number=1;
  TotalCount:number=10;
  searchValue:string='';
  value:any;
  // 
  ngOnInit(): void {
    this._userService.getUsers().subscribe((data)=>{
      console.log(data);
      this.usersList=data;
      this.TotalCount=data.headers?.get('x-total-count')
    })
    if(localStorage.getItem('UserLoggedIn')==null){
      localStorage.setItem('UserLoggedIn',JSON.stringify(false));
    }
  }
  // Toggle between pages
  nextPage(event:PageEvent):void{
    console.log(event);
    this.pageIndex=event.pageIndex+1;
    this._userService.getUsers(event.pageSize,event.pageIndex+1).subscribe((data)=>{
      console.log(data);
      this.usersList=data;
    }) 
  }
  openUser(Id:number):void{
    this._router.navigate([`/UserDetails/${Id}`])
  }
  sortUser():void{
    let doc:any = document.querySelector('.drop');
    console.log(doc.value);
    let Sort=doc.value;
    this._userService.getUsers(this.pageSize,this.pageIndex,Sort).subscribe((data)=>{
      console.log(data);
      this.usersList=data;
    })
  }
}
