import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Product Update Component
 *
 */
 declare var jQuery:any;
 declare var $:any;
@Component({
  selector: 'demo-app',
  templateUrl: 'templates/product/add.component.html'
})
export class ProductUpdateComponent implements OnInit  { 
	
	isEditProduct:boolean = true;
	masterName: string = "";
	position: string = "";
	office: string = "";
	age: string = "";
	startdate:string = "";
	salary:string = "";
	ngOnInit() {
		this.getOrderData();
	}

	getOrderData() {
		this.masterName = "dhaval";
		this.position = "Technical Analyst";
		this.office = "123456789";
		this.age = "27";
		this.startdate = "01/11/2017";
		this.salary = "30000";
		this.isEditProduct = true;
		
	}
}