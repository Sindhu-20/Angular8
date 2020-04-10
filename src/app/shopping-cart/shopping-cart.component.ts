import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public  cartItems:any[]  =  [];
		public  grandTotal:number = 0;

		constructor(private httpObj:HttpClient, private router:Router)
		{
				
		}
		
		public ngOnInit()
		{
			this.getCartItems();
		}
		
		public getCartItems()
		{
			var str = sessionStorage.getItem("CartId");
			
			var url:string  = "http://localhost:3000/cart?cartId=" + str;
			
			this.httpObj.get(url).subscribe( (response:any[]) => 
			{			
				 this.cartItems = response;
				 this.getGrandTotal();
			});	
		}
		
		public getGrandTotal()
		{
			this.grandTotal = 0;
			
			for(var i in  this.cartItems )
			{
				this.grandTotal  +=  this.cartItems[i].total;
			}
    }
    
    public removeItem(n:number)
		{				 
			var url:string  = "http://localhost:3000/cart/" + n;
			this.httpObj.delete(url).subscribe( (response:any[]) => 
			{	 
				this.getCartItems();
			});	
		}
		
		
		public checkOut()
		{
       this.router.navigate(["/Checkout"]); 
			 sessionStorage.setItem("grandTotal", this.grandTotal.toString());
		}		

}
