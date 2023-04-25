import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/Estudiante.model';
import { SessionService } from './session.service';

const BASE_URL = 'https://yfzg5omf09.execute-api.us-east-2.amazonaws.com/dev/v1/idexud';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.sessionService.getToken()}`
    })
  };

  constructor(private http: HttpClient,
    private sessionService: SessionService) { }

  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${BASE_URL}/getAllItems`, this.httpOptions);
  }

  getEstudiante(codigoEstudiantil: string): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${BASE_URL}/getItem/${codigoEstudiantil}`, this.httpOptions);
  }

  addEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(`${BASE_URL}/create`, estudiante, this.httpOptions);
  }

  updateEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${BASE_URL}/update`, estudiante, this.httpOptions);
  }

  deleteEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.delete<any>(`${BASE_URL}/deleteItem/${estudiante.codigoEstudiantil}`, this.httpOptions);
  }
}