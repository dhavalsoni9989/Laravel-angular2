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
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var UserService = (function () {
    function UserService() {
        this.response = {};
    }
    UserService.prototype.userAdd = function (postData, url) {
        var _this = this;
        this.response = new Promise(function (resolve, reject) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            if (postData) {
                for (var key in postData) {
                    var value = postData[key];
                    formData.append(key, value);
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            _this.responseData = JSON.parse(xhr.response);
                            resolve(_this.responseData);
                        }
                        else {
                            resolve(_this.responseData);
                        }
                    }
                };
                xhr.open('POST', url, true);
                xhr.send(formData);
            }
        });
        return this.response;
    };
    UserService.prototype.userStatusUpdate = function (postData, url) {
        var _this = this;
        this.response = new Promise(function (resolve, reject) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            if (postData) {
                for (var key in postData) {
                    var value = postData[key];
                    formData.append(key, value);
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            _this.responseData = JSON.parse(xhr.response);
                            resolve(_this.responseData);
                        }
                        else {
                            resolve(_this.responseData);
                        }
                    }
                };
                xhr.open('POST', url, true);
                xhr.send(formData);
            }
        });
        return this.response;
    };
    UserService.prototype.userDelete = function (url) {
        var _this = this;
        this.response = new Promise(function (resolve, reject) {
            var formData = new FormData(), xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        _this.responseData = JSON.parse(xhr.response);
                        resolve(_this.responseData);
                    }
                    else {
                        resolve(_this.responseData);
                    }
                }
            };
            xhr.open('DELETE', url, true);
            xhr.send(formData);
        });
        return this.response;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map