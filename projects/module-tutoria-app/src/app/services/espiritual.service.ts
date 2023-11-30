import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';

@Injectable({
  providedIn: 'root'
})
export class EspiritualService {

  constructor(private http: HttpClient) { }
  
  private httpHeaders = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );
  
  private agregarAuthorizationHeader(){
    let token = sessionStorage.getItem('token');
    if(token!=null){
      return this.httpHeaders.append('auth-token',token);
    }
    return this.httpHeaders;
  }

  getAsesores(): Observable<any> {
    return this.http.get<any>(`${apiURL}/espiritual`, {headers: this.agregarAuthorizationHeader()});
  }

  getAsesorById(id_asesor:number): Observable<any> {
    return this.http.get<any>(`${apiURL}/espiritual/${id_asesor}`, {headers: this.agregarAuthorizationHeader()});
  }

  registrarAsesor(asesor_espiritual: any): Observable<any> {
    return this.http.post<any>(`${apiURL}/espiritual/create`, asesor_espiritual, {headers: this.agregarAuthorizationHeader()});
  }

  /*
  editarAsesor(id_asesor:number, asesor_espiritual:any): Observable<any> {
    return this.http.put<any>(`${apiURL}/espiritual/${id_asesor}`, asesor_espiritual,
    {headers: this.agregarAuthorizationHeader()});
  }
  */

  editarAsesor(id_asesor:number, name:string, phone:string, email:string, type_person:string): Observable<any> {
    return this.http.put<any>(`${apiURL}/espiritual/${id_asesor}`, 
    {
      name:name,
      phone:phone,
      email:email,
      type_person:type_person
    },
    {headers: this.agregarAuthorizationHeader()});
  }

  deleteAsesor(id_asesor:number): Observable<any> {
    return this.http.delete<any>(`${apiURL}/espiritual/${id_asesor}`, {headers: this.agregarAuthorizationHeader()});
  }
}
