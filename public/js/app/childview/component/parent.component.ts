import{Component,OnInit,ViewChild} from '@angular/core';
import{ChildComponent} from './child.component';

@Component({
    templateUrl: 'templates/viewchild/parent.html'
})

export class ParentComponent  {
    @ViewChild(ChildComponent) private childComponent:ChildComponent;
    
    ngOnInit(){
        //this.childComponent.toggleVisibility('Parent Component');
    }
    public parentclick()
    {
        console.log("parent click");
        this.childComponent.childclick();
    }

}