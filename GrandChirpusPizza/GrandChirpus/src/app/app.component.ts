import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GrandChirpus';
  fullmenu:MenuItem[]=[
    {name:"Pepperoni Pizza", category:"Pizza", price:15.99},
    {name:"Hawaiian Pizza", category:"Pizza", price:17.99},
    {name:"Meditteranian Pizza", category:"Pizza", price:18.99},
    {name:"Meat Lovers", category:"Pizza", price:17.49},
    {name:"Club", category:"Sandwich", price:12.99},
    {name:"BLT", category:"Sandwich", price:13.49},
    {name:"Big Chungus Burger", category:"Sandwich",price:45.99},
    {name:"Sweet Thai Chili", category:"Wings", price:9.99},
    {name:"Carolina BBQ", category:"Wings", price:9.99},
    {name:"Honey BBQ", category:"Wings", price:9.99},
    {name:"Hot", category:"Wings", price:9.99},
    {name:"Pure Pain", category:"Wings", price:9.99},
  ]
}
