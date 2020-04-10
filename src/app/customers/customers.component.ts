import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
//name:string ="sindhu";
  public customers:any[]=[];
 
  constructor(private httpObj : HttpClient) { }

  ngOnInit() {
    var url:string = "http://localhost:3000/customers";
    this.httpObj.get(url).subscribe((response:any)=>{
     this.customers = response;
    });
  }

  public f1(){
    alert("called");
  }


}
