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
var router_1 = require('@angular/router');
var product_service_1 = require('../services/product.service');
require('rxjs/Rx');
require('rxjs/add/operator/map');
var ProductAddComponent = (function () {
    function ProductAddComponent(router, _productService) {
        this.router = router;
        this._productService = _productService;
        this.info = "";
        this.submitFlag = false;
        this.user = {};
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.getOrderData();
    };
    ProductAddComponent.prototype.getOrderData = function () {
    };
    ProductAddComponent.prototype.submitData = function (form) {
        var _this = this;
        this.submitFlag = true;
        var reqUrl = "api/user";
        var instance = this;
        //this._productService.userAdd(this.user,reqUrl);
        /*this._productService.userAdd(this.user,reqUrl).then(res => {
            this.router.navigate(['/']);
        });*/
        this._productService.userAdd(this.user, reqUrl).then(function (data) {
            console.log(_this.info);
            alert(_this.info);
            _this.router.navigate(['/']);
        });
    };
    ProductAddComponent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            templateUrl: 'templates/product/add.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, product_service_1.ProductService])
    ], ProductAddComponent);
    return ProductAddComponent;
}());
exports.ProductAddComponent = ProductAddComponent;
//# sourceMappingURL=add.component.js.map