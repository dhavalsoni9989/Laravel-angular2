import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { ProductRoutes }  from './product/product.route';
import { SampleRoutes }  from './sample/sample.route';
import { ProductListComponent }  from './product/components/product.component';
import {ChildviewRoutes} from './childview/childview.routes';

import {UserRoutes} from './user/user.routing';

//import {EvemtMitterRoutes} from './eventmitter/eventmitter.route';
// All Child routes
export const childRoutes: Routes = [
  { path: '', component: AppComponent,
    children: [
      ...ProductRoutes,
      ...SampleRoutes,
      ...UserRoutes
    ],
    data:{title:"test"}
  },
  {
    path:'child-component',component:AppComponent,
    children:[
      ...ChildviewRoutes
    ],
    data:{title:"test"}
  }
  /*{ path: '**', component: ProductListComponent }*/
];

// Merge Parent & Child Routes
const appRoutes: Routes = [
    ...childRoutes,
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);