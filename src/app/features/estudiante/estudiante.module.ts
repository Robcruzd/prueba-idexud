import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudEstudianteComponent } from './crud-estudiante/crud-estudiante.component';
import { EstudianteRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CrudEstudianteComponent],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    FormsModule
  ]
})
export class EstudianteModule { }
