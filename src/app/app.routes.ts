import { Routes } from '@angular/router';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'Users',pathMatch:'full'},
    {path:'UserDetails/:Id',pathMatch:'full',loadComponent:()=>import('./Components/user-details/user-details.component').then(mod=>mod.UserDetailsComponent),canActivate:[authGuard]},
    {path:'Users',pathMatch:'full',loadComponent:()=>import('./Components/users/users.component').then((mod)=>mod.UsersComponent)},
    {path:'Login',pathMatch:'full',loadComponent:()=>import('./Components/login/login.component').then((mod)=>mod.LoginComponent)},
    {path:'Register',pathMatch:'full',loadComponent:()=>import('./Components/register/register.component').then((mod)=>mod.RegisterComponent)}
];
