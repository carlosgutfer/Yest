import { Component } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { NewUserService } from 'src/app/services/new-user.service';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent {
  listRestaurant:NewUserService[]=[
    { name: "rest1", }
  ]
}
