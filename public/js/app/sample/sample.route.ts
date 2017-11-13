import { Routes } from '@angular/router';
import { SampleListComponent }  from './components/sample.component';

export const SampleRoutes: Routes = [
   	{path: 'Sample', component: SampleListComponent,data:{title:"sample"} }
];