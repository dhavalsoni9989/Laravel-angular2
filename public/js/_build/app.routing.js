"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var product_route_1 = require('./product/product.route');
var sample_route_1 = require('./sample/sample.route');
var childview_routes_1 = require('./childview/childview.routes');
var user_routing_1 = require('./user/user.routing');
//import {EvemtMitterRoutes} from './eventmitter/eventmitter.route';
// All Child routes
exports.childRoutes = [
    { path: '', component: app_component_1.AppComponent,
        children: product_route_1.ProductRoutes.concat(sample_route_1.SampleRoutes, user_routing_1.UserRoutes),
        data: { title: "test" }
    },
    {
        path: 'child-component', component: app_component_1.AppComponent,
        children: childview_routes_1.ChildviewRoutes.slice(),
        data: { title: "test" }
    }
];
// Merge Parent & Child Routes
var appRoutes = exports.childRoutes.slice();
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map