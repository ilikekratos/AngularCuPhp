import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { GuestComponent } from './guest/guest.component';
import { AdminComponent } from './admin/admin.component';
import { GuestHomeComponent } from './guesthome/guesthome.component';
import { RouterModule } from '@angular/router';
import { AddService } from './add.service';
import { JwPaginationComponent, JwPaginationModule } from 'jw-angular-pagination';
import { AdminHomeComponent } from './adminhome/adminhome.component';
import { AdminBrowseComponent } from './adminbrowse/adminbrowse.component';
import { AdminDeleteComponent } from './admindelete/admindelete.component';
import { AdminUpdateComponent } from './adminupdate/adminupdate.component';
import { UpdatePageComponent } from './updatepage/updatepage.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuestComponent,
    AdminComponent,
    GuestHomeComponent,
    AdminHomeComponent,
    AdminBrowseComponent,
    AdminDeleteComponent,
    AdminUpdateComponent,
    UpdatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    JwPaginationModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
