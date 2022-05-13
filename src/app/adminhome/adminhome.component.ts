import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../loginadmin.service';



@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminHomeComponent implements OnInit {
  public edited = false;
  response = ""
  ngOnInit(): void {
  }

  constructor(private loginService:LoginService,private _router: Router){

  }

  onSend(username: string, password: string){
    const fromData: FormData = new FormData()

    fromData.append('username', username)
    fromData.append('password', password)

    this.loginService.login(fromData)
    .subscribe(res => {
      //console.log(res)
      this.response = res
    })
  }
  navigateToPage(){
    this._router.navigateByUrl('/admin');
  }
  dontNavigate(){
    this.edited=true;

  }
  back(){
    this._router.navigateByUrl('/home');
  }
}
