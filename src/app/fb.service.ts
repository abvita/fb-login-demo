import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class FbService {
  isLoggedIn: boolean = false;

  constructor(private _router: Router) { }

  fbInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '210720730243290',
        cookie     : true,
        xfbml      : true,
        version    : 'v6.0'
      });
    };
  }

  fbCheckStatus(){
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        // Is logged in via FB
        this.isLoggedIn = true;
      } else {
        // Not logged in via FB
        this.isLoggedIn = false;
      }
     });

     return this.isLoggedIn;     
  }

  fbLogin() {
    FB.login((response)=>
      {
        if (response.authResponse)
        {
          this.isLoggedIn = true;
          this._router.navigate(['/dashboard']);
        }
        else
        {
          this.isLoggedIn = false;
        }
    });
  }

  fbLogout(){
    FB.logout(() => {
      this.isLoggedIn = false;
    });
    this._router.navigate(['/home']);
  }

}
