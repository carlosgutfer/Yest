export interface stockInterface { //contructor ¿?
    name: string;
    ref_code: string;
    items_number: number;
    TAX: number;
    price_without_tax: number;
    client_id: number | null;
  }

  //TEST CLASE PARA MEJOR MANEJO
  
  export class Producto implements stockInterface {
    name: string;
    ref_code: string;
    items_number: number;
    TAX: number;
    price_without_tax: number;
    client_id: number | null;
  
    constructor(
      name: string,
      ref_code: string,
      items_number: number,
      TAX: number,
      price_without_tax: number,
      client_id: number | null
    ) {
      this.name = name;
      this.ref_code = ref_code;
      this.items_number = items_number;
      this.TAX = TAX;
      this.price_without_tax = price_without_tax;
      this.client_id = client_id;
    } 

    //metodos dentro de la clase para su manejo (no serian necesarios en el producto)
  }
  