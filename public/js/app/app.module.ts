import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ModalModule} from "ngx-modal";

import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';

import { routing }  from './app.routing';
import { ProductListComponent } from './product/components/product.component';
import { ProductAddComponent } from './product/components/add.component';
import { ProductUpdateComponent } from './product/components/update.component';
import { SampleListComponent } from './sample/components/sample.component';

import { ProductService } from './product/services/product.service';
import{ParentComponent} from './childview/component/parent.component';
import{ChildComponent} from './childview/component/child.component';

import { UserListComponent }  from './user/components/userlist.component';
import { UserAddComponent }  from './user/components/useradd.component';
import { UserService } from './user/services/user.service';

import { HttpModule } from '@angular/http';


//import{EventMitterComponent} from './eventmitter/components/eventmitter.component';

@NgModule({
 imports: [ 
 	BrowserModule,
	 routing,
	 FormsModule,
	 HttpModule,
	 ModalModule
 ],
 declarations: [ 
 	AppComponent,
 	ProductListComponent,
 	ProductAddComponent,
 	ProductUpdateComponent,
	SampleListComponent,
	ParentComponent,
	ChildComponent,
	UserListComponent,
	UserAddComponent
 ],
 providers: [
	ProductService,
	UserService
 ],
 bootstrap: [ AppComponent ]
})
export class AppModule { }
