import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

	public albums:any[]  = [];
		
	constructor(private httpObj:HttpClient)
	{
			
	}
	
	public ngOnInit()
	{		
		var url:string  = "http://localhost:3000/albums";
		this.httpObj.get(url).subscribe( (response:any[]) => 
		{			
			 this.albums = response;
		});	
	}
}
