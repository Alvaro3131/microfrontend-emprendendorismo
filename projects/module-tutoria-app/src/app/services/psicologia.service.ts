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
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJzb25Db2RlIjoiMjAyMDEwMzk4IiwiaWF0IjoxNzAwNzA0MzM3LCJleHAiOjE3MDA3MDc5Mzd9.9-Vjx7yTOBSEdlQ7nivX1k4spJSBVYJk9xAIvpYYu-s';
    if(token!=null){
      return this.httpHeaders.append('Authorization',token);
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

  editarPsicologo(id_psicologo:number, name:any, phone:any, email:any, type_person:any): Observable<any> {
    return this.http.put<any>(`${apiURL}/psicologia/${id_psicologo}`, 
    { name:name },
    
    {headers: this.agregarAuthorizationHeader()});
  }

  deletePsicologo(id_psicologo:number): Observable<any> {
    return this.http.delete<any>(`${apiURL}/psicologia/delete/${id_psicologo}`, {headers: this.agregarAuthorizationHeader()});
  }

}
