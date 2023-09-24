import { Component } from '@angular/core';
import { stockInterface } from 'src/app/interfaces/stock.module';
import { stockService } from 'src/app/services/servStock/stock.service';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})

export class StockComponent {

    product: stockInterface = {
    name:'',
    ref_code:'',
    items_number: 0 ,
    TAX: 0,
    price_without_tax: 0,
    client_id: null,
  }
  
  constructor (private stockService: stockService){
  }

  newProduct(){
    this.stockService.newProduct(this.product).subscribe(response=>{
      console.log(response) //respuesta por parte del back 

    }, error =>{
        console.log(error) //manejo de errores 
    });
  }
}
