import { Routes } from '@angular/router';
import { ProductListComponent }  from './components/product.component';
import { ProductAddComponent }  from './components/add.component';
import { ProductUpdateComponent }  from './components/update.component';

export const ProductRoutes: Routes = [
	{path: '', redirectTo: 'users',pathMatch: 'full'},
   	/*{path: 'users', component: ProductListComponent,data:{title:"Product Listing Demo"} },*/
   	{path: 'Product', component: ProductListComponent,data:{title:"Product Listing Demo"} },
   	{path: 'Product/Add', component: ProductAddComponent,data:{title:"Product Add Demo"} },
   	{path: 'Product/Edit/:id', component: ProductUpdateComponent,data:{title:"Product Edit Demo"} }
];