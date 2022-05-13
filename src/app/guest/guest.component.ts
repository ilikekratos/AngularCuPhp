import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],

})
export class GuestComponent implements OnInit {
  public edited = false;
  public edited2 = false;
  response = ""
  ngOnInit(): void {
  }

  constructor(private addService:AddService,private _router: Router){

  }

  onSend(mail: string, title: string, comment: string, date: string,){
    const fromData: FormData = new FormData()
    if(mail.length==0 || title.length==0 || comment.length==0 || date.length==0)
    {this.edited2=false;
    this.edited=true;}
    else{
    fromData.append('author', mail)
    fromData.append('title', title)
    fromData.append('comment', comment)
    fromData.append('date', date)
    fromData.append('action', 'add')
    this.addService.action(fromData)
    .subscribe(res => {
      //console.log(res)
      this.response = res
    })
  }
  }
  logout(){
    this._router.navigateByUrl('/guesthome');
  }
  setMessageBad(){
    this.edited2=false;
    this.edited=true;
  }
  setMessageGood(){
    this.edited2=true;
    this.edited=false;
  }

}
