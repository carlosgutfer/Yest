// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../../interfaces/user.model'; //test

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/v1/auth/signup';

  constructor(private http: HttpClient) { }

  createUser(user: UserInterface): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

}
