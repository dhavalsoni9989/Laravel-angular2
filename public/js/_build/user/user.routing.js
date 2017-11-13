"use strict";
var userlist_component_1 = require('./components/userlist.component');
var useradd_component_1 = require('./components/useradd.component');
exports.UserRoutes = [
    { path: 'users', component: userlist_component_1.UserListComponent, data: { title: "List Users" } },
    { path: 'users/add', component: useradd_component_1.UserAddComponent, data: { title: "Add Users" } },
    { path: 'users/edit/:id', component: useradd_component_1.UserAddComponent, data: { title: "Edit Users" } }
];
//# sourceMappingURL=user.routing.js.map