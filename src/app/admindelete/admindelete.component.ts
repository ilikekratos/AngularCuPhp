import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from '../add.service';

import {Book} from '../types'

@Component({
  selector: 'app-admindelete',
  templateUrl: './admindelete.component.html',
  styleUrls: ['./admindelete.component.css']
})
export class AdminDeleteComponent implements OnInit {

  public edited = false;
  response = ""
  ngOnInit(): void {
    this.onLoad('none')
  }
  list: Book[] = []
  pageOfItems: Book[] = []
  constructor(private addService : AddService,private _router: Router){

  }
  onLoad(criteria:string)
  {

    console.log('loading')
    console.log(criteria)
    const fromData: FormData = new FormData()
    fromData.append('criteria', criteria)
    this.addService.getData(fromData)
    .subscribe(res => {
      console.log(res)
      console.log('got data')
      this.list = res
    })
    console.log(criteria)

  }
  onChangePage(pageOfItems : Book[]){
    this.pageOfItems = pageOfItems
  }
delete(title:string){
  if(confirm("Are you sure to delete ")){
  console.log(title);
  const fromData: FormData = new FormData()
  fromData.append('title',title);
  fromData.append('author','doesntmatter');
  fromData.append('date','doesntmatter');
  fromData.append('comment','doesntmatter');
  fromData.append('action','delete');
  this.addService.action(fromData)
  .subscribe(res => {
    //console.log(res)
    this.response = res
    this.onLoad('none');

  })}

}
setMessageGood(){
   this.edited = true;
}

}
