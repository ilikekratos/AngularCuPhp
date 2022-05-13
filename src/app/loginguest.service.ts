import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}




   login(fromData:FormData):Observable<any>
   {
      const url = 'http://localhost/folder/userlogin.php'

      return this.http.post<any>(url, fromData)
   }

}
