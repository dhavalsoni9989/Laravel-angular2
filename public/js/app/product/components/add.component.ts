import { Component, OnInit,EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { User } from './user';
import { NgForm } from '@angular/forms';
import 'rxjs/Rx'; 
import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map'



/**
 * Product Add Component
 *
 */
 declare var jQuery:any;
 declare var $:any;
@Component({
  selector: 'demo-app',
  templateUrl: 'templates/product/add.component.html'
})
export class ProductAddComponent implements OnInit  { 
	
	user: User;
	info:String="";
	submitFlag = false;
	constructor(private router:Router,private _productService: ProductService) {
		this.user = {};
	}
	ngOnInit() {
		this.getOrderData();
	}

	getOrderData() {
		
	}
	submitData(form: NgForm){
		this.submitFlag = true;	
		var reqUrl = "api/user";
		let instance : ProductAddComponent = this;		
		//this._productService.userAdd(this.user,reqUrl);
		/*this._productService.userAdd(this.user,reqUrl).then(res => {
			this.router.navigate(['/']);
		});*/
		
		this._productService.userAdd(this.user,reqUrl).then(data => {

		console.log(this.info);
		alert(this.info);
			this.router.navigate(['/']);
		});
		

	}
}
