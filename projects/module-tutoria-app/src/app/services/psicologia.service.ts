import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiURL } from './global';

@Injectable({
  providedIn: 'root'
})
export class PsicologiaService {

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

  

  getPsicologos(): Observable<any> {
    return this.http.get<any>(`${apiURL}/psicologia`, {headers: this.agregarAuthorizationHeader()});
  }

  getPsicologoById(id_psicologo:number): Observable<any> {
    return this.http.get<any>(`${apiURL}/psicologia/${id_psicologo}`, {headers: this.agregarAuthorizationHeader()});
  }

  registrarPsicologo(psicologo: any): Observable<any> {
    return this.http.post<any>(`${apiURL}/psicologia/create`, psicologo, {headers: this.agregarAuthorizationHeader()});
  }

  editarPsicologo(id_psicologo:number, name:string, phone:string, email:string, type_person:string): Observable<any> {
    return this.http.put<any>(`${apiURL}/psicologia/${id_psicologo}`, 
    {
      name:name,
      phone:phone,
      email:email,
      type_person:type_person
    },
    {headers: this.agregarAuthorizationHeader()});
  }

  deletePsicologo(id_psicologo:number): Observable<any> {
    return this.http.delete<any>(`${apiURL}/psicologia/${id_psicologo}`, {headers: this.agregarAuthorizationHeader()});
  }

}
