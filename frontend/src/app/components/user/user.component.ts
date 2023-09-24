// user-creation.component.ts
import { Component } from '@angular/core';
import { UserInterface } from '../../interfaces/user.model';
import { UserService } from '../../services/servUser/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  user: UserInterface = {
    name: '',
    firstname: '',
    secondname: '',
    permiss: '',
    email: '',
    password: '',
    gender: '',
    address: '',
    phone1: '',
    phone2 : '',
    client_id: 1,
  }
  constructor(private userService: UserService) { }

  createUser() {
    this.userService.createUser(this.user).subscribe(response => {
      console.log(response);
    }, error => {
      // Manejar errores, como mostrar un mensaje de error al usuario.
      console.log("sin servicio")
      console.log(error);
    });
  }
}