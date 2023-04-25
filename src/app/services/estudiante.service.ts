import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/Estudiante.model';

const BASE_URL = 'https://yfzg5omf09.execute-api.us-east-2.amazonaws.com/dev/v1/idexud';

@Injectable({
providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]> {
  return this.http.get<Estudiante[]>(`${BASE_URL}/getAllItems`);
  }

  getEstudiante(codigoEstudiantil: string): Observable<Estudiante> {
  return this.http.get<Estudiante>(`${BASE_URL}/getItem/${codigoEstudiantil}`);
  }

  addEstudiante(estudiante: Estudiante): Observable<Estudiante> {
  return this.http.post<Estudiante>(`${BASE_URL}/create`, estudiante);
  }

  updateEstudiante(estudiante: Estudiante): Observable<Estudiante> {
  return this.http.put<Estudiante>(`${BASE_URL}/update`, estudiante);
  }

  deleteEstudiante(estudiante: Estudiante): Observable<any> {
  return this.http.delete<any>(`${BASE_URL}/deleteItem/${estudiante.codigoEstudiantil}`);
  }
}