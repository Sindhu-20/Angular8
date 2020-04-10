import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guid } from "guid-typescript"; 
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
	public id: Guid;
  	public albumObj:any  = {};
	public qty:number = 1;
	
	constructor(private httpObj:HttpClient,  private route:ActivatedRoute,  private router:Router)
	
	{	
		this.id = Guid.create();
	}
   ngOnInit()
	{
		
		var albumId = this.route.snapshot.params["id"];
		var url:string  = "http://localhost:3000/albums/" + albumId;	
		this.httpObj.get(url).subscribe( (response:any) => 
		{			
			 this.albumObj = response;
		});	
	}

	public addToCart()
	{
		var obj:any = {};
		obj.albumId = this.albumObj.id;
		obj.title = this.albumObj.title;
		obj.price = this.albumObj.price;
		obj.qty = this.qty;
		obj.total = this.albumObj.price * this.qty;
		
		var  str = sessionStorage.getItem("CartId");
		
		if(str == null)
		{
			str = Guid.create().toString();
			sessionStorage.setItem("CartId", str);
		}
		
		obj.cartId = str;
		
		var url:string  = "http://localhost:3000/cart";			
		this.httpObj.post(url, obj).subscribe( (response:any) => 
		{			
			 this.router.navigate(["/ShoppingCart"]); 
		});		 
	}	
  

}
