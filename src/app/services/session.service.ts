import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setToken(token: string): void {
    localStorage.setItem('session_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('session_token');
  }

}
