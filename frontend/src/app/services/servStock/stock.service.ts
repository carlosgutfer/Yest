import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {stockInterface} from '../../interfaces/stock.module';

@Injectable({
    providedIn: 'root'
})

export class stockService{
    private apiUrl = 'url/api/stock';

    constructor(private http: HttpClient){}

//metodo para dar de alta un nuevo producto 
    newProduct(product: stockInterface): Observable<any>{
        return this.http.post(this.apiUrl, product)
    }
//metodo para obtener listado de productos x ID cliente

    //getProduct(product: stockInterface):number{
        //llamar a la API en busqueda del ID de stock
        //return product.ref_code
    //}

//metodo añadir stock 

    updateStock(product: stockInterface, newStock: number): void {
    
    product.items_number = newStock;
  }

  calculateIVA(product: stockInterface): number {
    return product.price_without_tax + (product.price_without_tax * product.TAX);
  }
}