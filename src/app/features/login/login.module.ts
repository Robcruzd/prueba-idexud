import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLoginComponent } from './components/main-login/main-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
