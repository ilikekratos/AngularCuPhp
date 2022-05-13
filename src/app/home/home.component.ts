import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from '../add.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
  }

  title = 'angular-php';
  response = ""
  constructor(private nameService:AddService, private _router: Router)
  {

  }

  onSend(role: string){
    const fromData: FormData = new FormData()
    fromData.append('role', role)
    this.nameService.getUserType(fromData)
    .subscribe(res => {
      console.log(res)
      this.response = res
    })
  }

  navigateToGuest(){
    this._router.navigateByUrl('/guesthome')
  }
  navigateToAdmin(){
    this._router.navigateByUrl('/adminhome')
  }

}
