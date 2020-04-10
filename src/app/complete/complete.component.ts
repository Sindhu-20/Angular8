import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  ngOnInit() {
  }

  public orderId:number  = 0;

	constructor()
	{
			this.orderId = parseInt(sessionStorage.getItem("orderId"));
	} 

}
