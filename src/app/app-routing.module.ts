import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { GuestComponent } from './guest/guest.component';
import { HomeComponent } from './home/home.component';
import { GuestHomeComponent} from './guesthome/guesthome.component';
import{AdminHomeComponent} from './adminhome/adminhome.component';
import{AdminBrowseComponent}from './adminbrowse/adminbrowse.component';
import { AdminDeleteComponent } from './admindelete/admindelete.component';
import { AdminUpdateComponent } from './adminupdate/adminupdate.component';
import { UpdatePageComponent } from './updatepage/updatepage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
{ path: '', redirectTo: 'home', pathMatch:'full'},
{ path: 'guest', component: GuestComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'adminhome', component: AdminHomeComponent },
{path: 'guesthome', component: GuestHomeComponent},
{path: 'adminbrowse',component: AdminBrowseComponent},
{path: 'admindelete',component: AdminDeleteComponent},
{path: 'adminupdate',component:AdminUpdateComponent},
{path: 'updatepage',component:UpdatePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
