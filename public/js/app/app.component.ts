import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit  { 
  
  //constructor(private router: Router, private titleService: Title) {}  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}
  ngOnInit() {
      console.log("test");
      //this.titleService.setTitle('My awesome app');
      /*this.router.events
      .subscribe((event) => {
        // example: NavigationStart, RoutesRecognized, NavigationEnd
        //console.log(event);
        if (event instanceof NavigationEnd) {
          console.log('NavigationEnd:', event);
        }
      });*/
      /*this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event) => {
        console.log('NavigationEnd:', event);
      });*/
      this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
        //console.log('NavigationEnd:', event);
        var testlent = Object.keys(event).length;
        //console.log(typeof(testlent));
        if(testlent > 0)
        {
          //this.titleService.setTitle(event.title);
        }
        
      });
  }
}