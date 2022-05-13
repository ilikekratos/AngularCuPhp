import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoUpdate {

  constructor(private http:HttpClient) {}




   login(fromData:FormData):Observable<any>
   {
      const url = 'http://localhost/folder/updatepage.php'

      return this.http.post<any>(url, fromData)
   }

}
