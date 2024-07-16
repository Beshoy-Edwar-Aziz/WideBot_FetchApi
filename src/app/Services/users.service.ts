import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  localstorage:BehaviorSubject<any>=new BehaviorSubject('');
  currentLocal=this.localstorage.asObservable();
  updateLocal(newValue:any){
    console.log(newValue);
    this.localstorage.next(newValue);
  }
  constructor(private _httpClient:HttpClient) { }
  getUsers(pageSize:number=5,pageIndex:number=1,sort:string=''):Observable<any>{
    return this._httpClient.get(`https://jsonplaceholder.typicode.com/users?_page=${pageIndex}&_limit=${pageSize}&_sort=${sort}`,{observe:'response'});
  }
  getUserById(Id:number):Observable<any>{
    return this._httpClient.get(`https://jsonplaceholder.typicode.com/users/${Id}`);
  }
}
