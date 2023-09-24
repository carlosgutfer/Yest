
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginInterface} from '../../interfaces/login.module'; //test

@Injectable({
  providedIn: 'root'
})
export class loginService {
  private apiUrl = 'http://localhost:3000/api/v1/auth/login';

  constructor(private http: HttpClient) { }

  loginUser(user: loginInterface): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
