import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) {}



  getUserType(fromData:FormData):Observable<any>
   {
      const url = 'http://localhost/folder/userType.php'

      return this.http.post<any>(url, fromData)
   }

   action(fromData:FormData):Observable<any>
   {
      const url = 'http://localhost/folder/adminAction.php'

      return this.http.post<any>(url, fromData)
   }

   getData(fromData:FormData):Observable<any>
   {
      const url = 'http://localhost/folder/getData.php'

      return this.http.post<any>(url, fromData)
   }
}
