import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from '../add.service';

import {Book} from '../types'

@Component({
  selector: 'app-adminupdate',
  templateUrl: './adminupdate.component.html',
  styleUrls: ['./adminupdate.component.css']
})
export class AdminUpdateComponent implements OnInit {

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
update(title:string,author:string,comment:string,date:string){



  const fromData: FormData = new FormData()
  fromData.append('title',title);
  this._router.navigate(['/updatepage'],{queryParams:{title: title,author:author,comment:comment,date:date}});


}


}
