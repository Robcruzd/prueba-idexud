import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudEstudianteComponent } from './crud-estudiante/crud-estudiante.component';


const routes: Routes = [
  {
    path: "", component: CrudEstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
