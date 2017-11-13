import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class UserService {
  response = {};
  responseData: any;
  
  userAdd(postData,url)
  {
    
    this.response = new Promise((resolve, reject) => {
        let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();
        if(postData){
            for(var key in postData) {
                var value = postData[key];
                formData.append(key,value);
            }
            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.responseData = JSON.parse(xhr.response);
                    resolve(this.responseData);
                } else {
                    resolve(this.responseData);
                }
              }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        }
    });
    return this.response;
  }
  userStatusUpdate(postData,url)
  {
    this.response = new Promise((resolve, reject) => {
        let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();
        if(postData){
            for(var key in postData) {
                var value = postData[key];
                formData.append(key,value);
            }
            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.responseData = JSON.parse(xhr.response);
                    resolve(this.responseData);
                } else {
                    resolve(this.responseData);
                }
              }
            };
            xhr.open('POST', url, true);
            xhr.send(formData);
        }
    });
    return this.response;
  }
  userDelete(url)
  {
    this.response = new Promise((resolve, reject) => {
        let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();
        
            
            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    this.responseData = JSON.parse(xhr.response);
                    resolve(this.responseData);
                } else {
                    resolve(this.responseData);
                }
              }
            };
            xhr.open('DELETE', url, true);
            xhr.send(formData);
        
    });
    return this.response;
  }
}
