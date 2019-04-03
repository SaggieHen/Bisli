import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accountList;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3001/account').subscribe(res =>{
      this.accountList = res;
      console.log(res);
    })
  }

}