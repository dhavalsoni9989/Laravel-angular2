import{Routes} from "@angular/router";
import { UserListComponent }  from './components/userlist.component';
import { UserAddComponent }  from './components/useradd.component';

export const UserRoutes: Routes = [
    {path: 'users', component: UserListComponent,data:{title:"List Users"} },
    {path: 'users/add', component: UserAddComponent,data:{title:"Add Users"} },
    {path: 'users/edit/:id', component: UserAddComponent,data:{title:"Edit Users"} }
];