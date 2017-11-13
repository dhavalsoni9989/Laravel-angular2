import{Routes} from '@angular/router';
import{ParentComponent} from './component/parent.component';

export const ChildviewRoutes: Routes = [
    {path:'',component:ParentComponent,data:{title:"Child Routing Demo"}}
] 