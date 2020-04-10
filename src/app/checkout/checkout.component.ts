import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public custName:string  = "";
	public contactNumber:string  = "";
	public email:string  = "";
	public shippingAddress:string  = "";
	public grandTotal:number = 0;

  ngOnInit()
	{
  }
	constructor(private httpObj:HttpClient, private router:Router)
	{			
			this.grandTotal  =  parseInt(sessionStorage.getItem("grandTotal"));
	}
	
	public confirmOrder()
	{
     var obj:any = {};
		 obj.customerName = this.custName;
		 obj.email = this.email;
		 obj.contactNumber = this.contactNumber;
		 obj.shippingAddress = this.shippingAddress;	
	 	 obj.status  = "Confirmed";		
		 obj.grandTotal = 	this.grandTotal;
		 obj.cartId =  sessionStorage.getItem("CartId");
	
		var url:string  = "http://localhost:3000/orders";			
		this.httpObj.post(url, obj).subscribe( (response:any) => 
		{	
			 sessionStorage.setItem("orderId",  response.id );
			 this.router.navigate(["/Complete"]);
		});	
	}

}
