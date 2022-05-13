import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrls: ['./updatepage.component.css'],

})
export class UpdatePageComponent implements OnInit {
  public edited = false;
  public edited2 = false;
  public title='';
  public author='';
  public commentary='';
  public mydate='';
  public response = ""
  constructor(private addService:AddService,private _router: ActivatedRoute){

  }
  ngOnInit(): void {
    this._router.queryParams.subscribe(params=>{
      const { title,comment,author,date} = params;
      this.title=title;
      this.author=author;
      this.commentary=comment;
      this.mydate=date;


})
  }



  onSend(mail: string,  comment: string, date: string,){

    const fromData: FormData = new FormData()
    if(mail.length==0 || this.title.length==0 || comment.length==0 || date.length==0)
    {this.edited2=false;
    this.edited=true;}
    else{
    fromData.append('author', mail)
    fromData.append('title', this.title)
    fromData.append('comment', comment)
    fromData.append('date', date)
    fromData.append('action', 'update')
    this.addService.action(fromData)
    .subscribe(res => {
      //console.log(res)
      this.response = res
    })
  }
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
