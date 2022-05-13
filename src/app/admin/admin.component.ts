import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddService } from '../add.service';
import {Book} from '../types'
import { JwPaginationComponent } from 'jw-angular-pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AdminComponent implements OnInit {

  constructor(private addService : AddService,private _router: Router) { }

  action = ''

  ngOnInit(): void {

  }
  goUpdate(){
    this._router.navigateByUrl('/adminupdate');
  }
  goDelete(){
    this._router.navigateByUrl('/admindelete');

  }
  goBrowse(){
    this._router.navigateByUrl('/adminbrowse');
  }
  logout(){
    this._router.navigateByUrl('/adminhome');
  }

}
