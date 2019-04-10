import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

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

  deleteRestaurant(restaurantID){
    let headers= new HttpHeaders().append( 'Content-Type', 'application/json');
    let options= new RequestOptions({headers: headers});
    const params = new HttpParams().set('_id', restaurantID);
    this.http.delete('http://localhost:3001/restaurant',{params}).subscribe(
      result => console.log(result),
      err => console.error(err)
    )
  }

}

