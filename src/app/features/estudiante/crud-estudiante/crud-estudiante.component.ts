import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../../services/estudiante.service';
import { Estudiante } from '../../../model/Estudiante.model';
import { Auth } from 'aws-amplify';
import { Session } from 'protractor';

@Component({
  selector: 'app-crud-estudiante',
  templateUrl: './crud-estudiante.component.html',
  styleUrls: ['./crud-estudiante.component.scss']
})
export class CrudEstudianteComponent implements OnInit {

  estudiantes: Estudiante[];
  estudiante: Estudiante = new Estudiante();

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
    this.getEstudiantes();
    Auth.currentSession().then(session => {
      console.log("session: ", session);
    });
  }

  getEstudiantes(): void {
    this.estudianteService.getEstudiantes()
      .subscribe(estudiantes => this.estudiantes = estudiantes);
  }

  addEstudiante(): void {
    this.estudianteService.addEstudiante(this.estudiante)
      .subscribe(estudiante => {
        this.estudiantes.push(estudiante);
        this.estudiante = new Estudiante();
      });
  }

  deleteEstudiante(estudiante: Estudiante): void {
    this.estudiantes = this.estudiantes.filter(e => e !== estudiante);
    this.estudianteService.deleteEstudiante(estudiante).subscribe();
  }

}
