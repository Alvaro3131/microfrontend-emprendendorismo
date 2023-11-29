import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Position } from '@angular/compiler';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  companyId = sessionStorage.getItem('companyId');

  //Datos de la Persona
  loginStudent(code: string) {
    let body = {
      code: code,
    }
    const endpoint = `https://back-side-h0d8.onrender.com/api/login`;
    return this.http.post(endpoint, body);
  }
  getData(code: string) {
  
    const endpoint = `https://back-side-h0d8.onrender.com/api/person/${code}`;
    const authToken = sessionStorage.getItem('token');

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': authToken!
      });

  return this.http.get(endpoint, { headers: headers });
  }


}
