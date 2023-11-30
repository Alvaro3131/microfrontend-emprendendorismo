import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';
import { Activate } from '../models/activate';

@Injectable({
  providedIn: 'root'
})
export class ActivateService {

  constructor(private http: HttpClient ) { }
   private httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );

  private agregarAuthorizationHeader(){
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25Db2RlIjoiMjAyMDEwMzk4IiwiaWF0IjoxNzAxMzAwMzI4LCJleHAiOjE3MDEzMDM5Mjh9.mqrLv2rOnqKvomxYJS_qGxEtNhgZ_9KKHgGQ83_Gfqg';
    if(token!=null){
      return this.httpHeaders.append('auth-token',token);
    }
    return this.httpHeaders;
  }


   getActivate(): Observable<any> {
    return this.http.get<any>(`${apiURL}/allactivates`, {headers: this.agregarAuthorizationHeader()});
  }

  deleteActivate(id:number): Observable<any> {
    return this.http.delete(`${apiURL}/deleteactivate/${id}`, {headers: this.agregarAuthorizationHeader()});
  }
  insertActivate(data:Activate): Observable<any> {
    return this.http.post(`${apiURL}/createactivate`,data );
  }
}
