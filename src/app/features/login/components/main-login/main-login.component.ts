import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent implements OnInit {

  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
    console.log("mainloing");
  }

  onSubmit() {
    this.signIn();
  }

  async signIn(): Promise<void> {
    try {
      const user = await Auth.signIn(this.email, this.password);
      console.log("user: ", user);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

}
