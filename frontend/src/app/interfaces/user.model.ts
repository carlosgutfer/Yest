// user.model.ts
export interface UserInterface { //interfaz para usar con el servicio(llamada backend)
    //parametros a pasar
    name: string, 
    firstname: string;
    secondname: string;
    permiss: string;
    email: string;
    password: string;
    gender: string;
    address: string;
    phone1: string; //castear de number a string
    phone2: string;
    client_id: number
  }
  