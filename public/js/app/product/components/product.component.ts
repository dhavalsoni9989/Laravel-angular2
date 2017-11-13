import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
//import { ProductService } from '../services/product.service';



/**
 * Product List Component
 *
 */
 declare var jQuery:any;
 declare var $:any;
@Component({
  templateUrl: 'templates/product/ajaxlist.component.html'
})
export class ProductListComponent implements OnInit  { 

/*	constructor(private _productService: ProductService) {
		
	}*/
	
	ngOnInit() {
		//this._productService.test();
		this.getOrderData();
	}

	getOrderData() {
		//$("#example").DataTable();
		var serviceUrl = "api/user/";
		
		/*var dataTable = $('#example').DataTable( {
				"processing": true,
				"serverSide": true,
				"ajax": {
					url : serviceUrl,
					type: 'get'
				},
				"columns": [
					{ "data": "customerName" }
				]
				
			} );
		
		var dataTable = jQuery("#example").DataTable({
			"destroy": true,
			"serverSide": true,
			"searching":true,
			"responsive": true,
			"order": [[0, 'desc']],
			"ajax": {
				url : serviceUrl,
				type: 'get'
			},
			"columns": [
 					{"data": "customerName", "name": "customerName","width": "10%"},
				]
			});
		$.ajax({
			url: 'api/userlist',
			type: 'GET',
			dataType: 'json',
			error: function() {
			   $('#info').html('<p>An error has occurred</p>');
			},
			success: function(data) {
				console.log(data);
			}
		 });*/
		 var dataTable = jQuery("#example").DataTable({
			"destroy": true,
			"serverSide": true,
			"searching":true,
			"responsive": true,
			language: {
		        searchPlaceholder: "firstname"
		    },
			"order": [[0, 'desc']],
			"ajax": {
				url : serviceUrl,
				type: 'get'
			},
			"columns": [
					{"data": "customerNumber", "name": "customerNumber","width": "3%", "orderable": true, "searchable": false},
					{"data": "contactFirstName", "name": "contactFirstName","width": "20%"},
					{"data": "addressLine1", "name": "addressLine1","width": "10%"},
					{"data": "phone", "name": "phone","width": "10%"},
 					{"data": "city", "name": "city","width": "10%"},
 					{"data": "state", "name": "state","width": "5%"},
				]
		});
	}
}
