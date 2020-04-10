import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public albums:any[] =  [];
  public cats:string[] =  [];
  public slider:string[] = [];

  constructor(private httpObj:HttpClient)
  {
  }
  public ngOnInit()
  { 
      this.getTop5Albums(); 
      this.getCategories();
  } 
  public getTop5Albums()
  {
      var url = "http://localhost:3000/albums?_sort=id&_order=desc&_limit=5";
      
      this.httpObj.get(url).subscribe(  (response:any[])  => 
      {
        this.albums  = response;
      });
  }
  public getCategories()
  {		 
      let url = "http://localhost:3000/albums";
      this.httpObj.get(url).subscribe((response:any[]) => 
      {
        var  ar1:string[]  =  response.map( item => item.category);
        this.cats =  Array.from(new Set(ar1) );
      });	
  }

  public getSliders(){
    let url = "http://localhost:3000/slider";
    this.httpObj.get(url).subscribe((response:any[]) =>
    {
      this.slider = response;
    });
  }
}
