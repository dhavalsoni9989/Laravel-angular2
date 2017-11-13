"use strict";
var product_component_1 = require('./components/product.component');
var add_component_1 = require('./components/add.component');
var update_component_1 = require('./components/update.component');
exports.ProductRoutes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    /*{path: 'users', component: ProductListComponent,data:{title:"Product Listing Demo"} },*/
    { path: 'Product', component: product_component_1.ProductListComponent, data: { title: "Product Listing Demo" } },
    { path: 'Product/Add', component: add_component_1.ProductAddComponent, data: { title: "Product Add Demo" } },
    { path: 'Product/Edit/:id', component: update_component_1.ProductUpdateComponent, data: { title: "Product Edit Demo" } }
];
//# sourceMappingURL=product.route.js.map