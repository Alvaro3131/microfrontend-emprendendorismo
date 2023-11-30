import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Position } from '@angular/compiler';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class TutorShipService {
  constructor(private http: HttpClient) {}


  getDataPsicology() {
  
    const endpoint = `https://back-side-h0d8.onrender.com/api/psicologia`;
    const authToken = sessionStorage.getItem('token');

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': authToken!
      });

  return this.http.get<any>(endpoint, { headers: headers });
  }
  getDataSpiritual() {
  
    const endpoint = `https://back-side-h0d8.onrender.com/api/espiritual`;
    const authToken = sessionStorage.getItem('token');

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': authToken!
      });

  return this.http.get<any>(endpoint, { headers: headers });
  }
  getDataHoursAcivate() {
  
    const endpoint = `https://back-side-h0d8.onrender.com/api/activateshours`;
    const authToken = sessionStorage.getItem('token');

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': authToken!
      });

    return this.http.get<any>(endpoint, { headers: headers });
  }

  getAllActivates() {
  
    const endpoint = `https://back-side-h0d8.onrender.com/api/allactivates`;
    const authToken = sessionStorage.getItem('token');

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': authToken!
      });

    return this.http.get<any>(endpoint, { headers: headers });
  }
  getActivateId(id:number) {
  
    const endpoint = `https://back-side-h0d8.onrender.com/api/activate/${id}`;
    const authToken = sessionStorage.getItem('token');

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'auth-token': authToken!
      });

    return this.http.get<any>(endpoint, { headers: headers });
  }





}
