import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurantsList;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3001/restaurant').subscribe(res =>{
      this.restaurantsList = res;
    })
  }

}