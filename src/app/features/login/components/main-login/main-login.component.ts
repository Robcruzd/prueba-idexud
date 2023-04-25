import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private sessionService: SessionService,
    private router: Router
  ) { }

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
      const session = await Auth.currentSession();
      this.sessionService.setToken(session.getAccessToken().getJwtToken());
      this.router.navigate(['estudiante']);
    } catch (error) {
      console.log('error signing in', error);
    }
  }

}
