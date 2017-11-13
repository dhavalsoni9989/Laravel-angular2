import {Component,OnInit} from "@angular/core";
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from "./user";
import { Router,ActivatedRoute,Params } from "@angular/router";
import {UserService} from "../services/user.service";
import { NgForm } from '@angular/forms';
import 'rxjs/Rx'; 
import {Observable} from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

/**
 * User Add Component
 *
 */
declare var jQuery:any;
declare var $:any;
@Component({
 templateUrl: 'templates/user/add.component.html'
})

export class UserAddComponent implements OnInit{
    
    user:User;
    editUserid : number;
    isEditUser:boolean = false;
    results:any;
    responseData:any;
    
    constructor(private router:Router,private _userService: UserService,private route:ActivatedRoute,private http: Http)
    {
        this.user = {};
        //this.http = Http;
    }
    ngOnInit(): void {
        this.getValFromUrl();
        if(this.editUserid > 0)
        {
            this.isEditUser = true;
            this.getEditUserData();
        }
    }
    submitData()
    {
        this.getValFromUrl();

        if(this.editUserid > 0)
        {
            this.submitFlag = true;	
            var reqUrl = "api/users";
            this._userService.userAdd(this.user,reqUrl).then(data => {
                this.router.navigate(['/users']);
            });
        }
        else{
            this.submitFlag = true;	
            var reqUrl = "api/users";
            this._userService.userAdd(this.user,reqUrl).then(data => {
                this.router.navigate(['/users']);
            });
        }
        
    }
    /*
    * This function is used to 
    * get value from url
    */
    getValFromUrl(){
        /*this.route.fragment.subscribe((fragment: string) => {
            console.log("My hash fragment is here => ", fragment)
        })*/
        this.route.params.subscribe((params: Params) => {
            let userId = params['id'];
            this.editUserid = userId;
          });
    }
    /*
    * This function is used to 
    * get userdata by userid
    */
    getEditUserData()
    {
        var reqUrl = "api/users/"+this.editUserid+"/edit";
        var returnReponse = new Promise((resolve, reject) => {
            this.http.get(reqUrl).toPromise().then(data => {
                // Read the result field from the JSON response.

                 //this.results = data;
                 this.responseData = data.json();
                 //this.user = this.responseData;
                 resolve(this.responseData);
                 this.user = this.responseData[0];
            });
        });
    }
}