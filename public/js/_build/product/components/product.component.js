"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ProductListComponent = (function () {
    function ProductListComponent() {
    }
    /*	constructor(private _productService: ProductService) {
            
        }*/
    ProductListComponent.prototype.ngOnInit = function () {
        //this._productService.test();
        this.getOrderData();
    };
    ProductListComponent.prototype.getOrderData = function () {
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
            "searching": true,
            "responsive": true,
            language: {
                searchPlaceholder: "firstname"
            },
            "order": [[0, 'desc']],
            "ajax": {
                url: serviceUrl,
                type: 'get'
            },
            "columns": [
                { "data": "customerNumber", "name": "customerNumber", "width": "3%", "orderable": true, "searchable": false },
                { "data": "contactFirstName", "name": "contactFirstName", "width": "20%" },
                { "data": "addressLine1", "name": "addressLine1", "width": "10%" },
                { "data": "phone", "name": "phone", "width": "10%" },
                { "data": "city", "name": "city", "width": "10%" },
                { "data": "state", "name": "state", "width": "5%" },
            ]
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/product/ajaxlist.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product.component.js.map