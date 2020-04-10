import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: number;

  title: string;
  category: string;
  artist: string;
  price: number;

  public albums:any[] = [];
  constructor(private httpObj : HttpClient){
  }

  ngOnInit(){
    var url:string = "http://localhost:3000/albums";
    this.httpObj.get(url).subscribe((response:any)=>{
      console.log(response);
      this.albums=response;
    });

  }

  public f1(){
    var url:string = "http://localhost:3000/albums";
    this.httpObj.get(url).subscribe((response:any)=>{
      console.log(response);
      this.albums=response;
    });

  }


  public f2(){
    
  }
  public f3(){
    
  }
}
