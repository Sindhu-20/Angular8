import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  public albums:any[]=[];
  public catName:string="";
  constructor(private httpObj:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.catName = this.route.snapshot.params["id"];
    var url:string  = "http://localhost:3000/albums?category=" + this.catName;
    this.httpObj.get(url).subscribe( (response:any[]) => 
      {	
         this.albums = response;
      });	
    
  }

}
