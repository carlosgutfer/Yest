import { Component } from '@angular/core';
import { loginInterface } from 'src/app/interfaces/login.module';
import { loginService } from 'src/app/services/servUser/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: loginInterface = {
    username: '',
    //email: '',
    password: '',
  }
  constructor(private loginService: loginService) { }

  loginUser() {
    this.loginService.loginUser(this.user).subscribe(response => {
      
      console.log("usuario logeado con exito")
      console.log(response);
      alert("usuario logeado con exito")

    }, error => {
      // Manejar errores, como mostrar un mensaje de error al usuario
      console.log(error.error.message)
      const campoPass = document.getElementById("password") as HTMLInputElement;
      campoPass.value=(error.error.message);
      
    });
  }
}