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
var platform_browser_1 = require('@angular/platform-browser');
var ngx_modal_1 = require("ngx-modal");
var app_component_1 = require('./app.component');
var forms_1 = require('@angular/forms');
var app_routing_1 = require('./app.routing');
var product_component_1 = require('./product/components/product.component');
var add_component_1 = require('./product/components/add.component');
var update_component_1 = require('./product/components/update.component');
var sample_component_1 = require('./sample/components/sample.component');
var product_service_1 = require('./product/services/product.service');
var parent_component_1 = require('./childview/component/parent.component');
var child_component_1 = require('./childview/component/child.component');
var userlist_component_1 = require('./user/components/userlist.component');
var useradd_component_1 = require('./user/components/useradd.component');
var user_service_1 = require('./user/services/user.service');
var http_1 = require('@angular/http');
//import{EventMitterComponent} from './eventmitter/components/eventmitter.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.FormsModule,
                http_1.HttpModule,
                ngx_modal_1.ModalModule
            ],
            declarations: [
                app_component_1.AppComponent,
                product_component_1.ProductListComponent,
                add_component_1.ProductAddComponent,
                update_component_1.ProductUpdateComponent,
                sample_component_1.SampleListComponent,
                parent_component_1.ParentComponent,
                child_component_1.ChildComponent,
                userlist_component_1.UserListComponent,
                useradd_component_1.UserAddComponent
            ],
            providers: [
                product_service_1.ProductService,
                user_service_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map