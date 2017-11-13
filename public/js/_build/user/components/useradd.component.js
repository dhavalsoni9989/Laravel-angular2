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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var router_1 = require("@angular/router");
var user_service_1 = require("../services/user.service");
require('rxjs/Rx');
require('rxjs/add/operator/map');
var UserAddComponent = (function () {
    function UserAddComponent(router, _userService, route, http) {
        this.router = router;
        this._userService = _userService;
        this.route = route;
        this.http = http;
        this.isEditUser = false;
        this.user = {};
        //this.http = Http;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        this.getValFromUrl();
        if (this.editUserid > 0) {
            this.isEditUser = true;
            this.getEditUserData();
        }
    };
    UserAddComponent.prototype.submitData = function () {
        var _this = this;
        this.getValFromUrl();
        if (this.editUserid > 0) {
            this.submitFlag = true;
            var reqUrl = "api/users";
            this._userService.userAdd(this.user, reqUrl).then(function (data) {
                _this.router.navigate(['/users']);
            });
        }
        else {
            this.submitFlag = true;
            var reqUrl = "api/users";
            this._userService.userAdd(this.user, reqUrl).then(function (data) {
                _this.router.navigate(['/users']);
            });
        }
    };
    /*
    * This function is used to
    * get value from url
    */
    UserAddComponent.prototype.getValFromUrl = function () {
        var _this = this;
        /*this.route.fragment.subscribe((fragment: string) => {
            console.log("My hash fragment is here => ", fragment)
        })*/
        this.route.params.subscribe(function (params) {
            var userId = params['id'];
            _this.editUserid = userId;
        });
    };
    /*
    * This function is used to
    * get userdata by userid
    */
    UserAddComponent.prototype.getEditUserData = function () {
        var _this = this;
        var reqUrl = "api/users/" + this.editUserid + "/edit";
        var returnReponse = new Promise(function (resolve, reject) {
            _this.http.get(reqUrl).toPromise().then(function (data) {
                // Read the result field from the JSON response.
                //this.results = data;
                _this.responseData = data.json();
                //this.user = this.responseData;
                resolve(_this.responseData);
                _this.user = _this.responseData[0];
            });
        });
    };
    UserAddComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/user/add.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, router_1.ActivatedRoute, http_1.Http])
    ], UserAddComponent);
    return UserAddComponent;
}());
exports.UserAddComponent = UserAddComponent;
//# sourceMappingURL=useradd.component.js.map