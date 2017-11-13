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
var router_1 = require('@angular/router');
var user_service_1 = require("../services/user.service");
var ngx_modal_1 = require("ngx-modal");
require('rxjs/add/operator/toPromise');
var UserListComponent = (function () {
    function UserListComponent(router, _userService) {
        this.router = router;
        this._userService = _userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUserList();
    };
    UserListComponent.prototype.getUserList = function () {
        var self = this;
        var serviceUrl = "api/users/";
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
                { "data": "firstName", "name": "firstName", "width": "15%" },
                { "data": "lastName", "name": "lastName", "width": "15%" },
                { "data": "email", "name": "email", "width": "33%" },
                { "data": "contactNo", "name": "contactNo", "width": "15%" },
                { data: null, "className": "text-center", render: function (data, type, row) {
                        var statusStr = "";
                        if (data.status == "1") {
                            statusStr = "<button data-id=\"" + data.userId + "\" class='btn btn-sm btn-danger user-status-update' >Enable</button>";
                        }
                        else {
                            statusStr = "<button data-id=\"" + data.userId + "\" class='btn btn-sm btn-primary user-status-update' >Disable</button>";
                        }
                        return statusStr;
                    }
                },
                { "data": "action", "className": "text-center", "name": "action", "orderable": false, "searchable": false, "width": "10%" }
            ],
            fnRowCallback: function (nRow, aData, iDisplayIndex) {
                //console.log(nRow);
                var str = '<a title="Edit" id="' + aData.userId + '" class="btn btn-default btn-sm user-edit"><i class="fa fa-edit"></i></a>';
                str += '&nbsp;<a data-id="' + aData.userId + '" title="Delete" class="btn btn-default btn-sm user-delete" ><i class="fa fa-trash-o"></i></a>';
                jQuery('td:eq(5)', nRow).html(str);
                return nRow;
            },
            fnDrawCallback: function (oSettings) {
                jQuery('a.user-edit').on('click', function (e) {
                    var userId = this.id;
                    self.userEdit(userId);
                    e.preventDefault();
                });
                jQuery('.user-status-update').on('click', function (e) {
                    var userStatusIdVal = $(this).data("id");
                    self.onConfirmStatusPopup(userStatusIdVal);
                    e.preventDefault();
                });
                jQuery('a.user-delete').on('click', function (e) {
                    var userDeleteIdVal = $(this).data("id");
                    self.onConfirmDelPopup(userDeleteIdVal);
                    e.preventDefault();
                });
            }
        });
    };
    /*
    * This function is used to
    * navigat user to edit form
    */
    UserListComponent.prototype.userEdit = function (userid) {
        this.router.navigate(['/users/edit/', userid]);
    };
    UserListComponent.prototype.onConfirmStatusPopup = function (userId) {
        this.user = {};
        this.user.id = userId;
        this._popupTitle = 'User status';
        this._popupBody = 'Are you sure want to change this user status?';
        this._popupBtn = 3;
        this.firstModal.open();
    };
    /*
    * This function is used for update the user status
    */
    UserListComponent.prototype.userStatusUpdate = function () {
        var _this = this;
        var reqUrl = "api/users/changestatus";
        this.firstModal.close();
        this._userService.userStatusUpdate(this.user, reqUrl).then(function (res) {
            _this.ngOnInit();
            _this.router.navigate(['/users']);
        });
    };
    UserListComponent.prototype.onConfirmDelPopup = function (userId) {
        this.user = {};
        this.user.id = userId;
        this._popupTitle = 'User Delete?';
        this._popupBody = 'Are you sure want to delete this user?';
        this._popupBtn = 2;
        this.firstModal.open();
    };
    UserListComponent.prototype.userDelete = function () {
        var _this = this;
        var reqUrl = "api/users/" + this.user.id;
        this.firstModal.close();
        //this.user._method = 'delete';
        this._userService.userDelete(reqUrl).then(function (res) {
            _this.ngOnInit();
            _this.router.navigate(['/users']);
        });
    };
    __decorate([
        core_1.ViewChild('firstModal'), 
        __metadata('design:type', ngx_modal_1.ModalModule)
    ], UserListComponent.prototype, "firstModal", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            templateUrl: 'templates/user/list.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userlist.component.js.map