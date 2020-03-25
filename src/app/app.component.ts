import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FbService } from './fb.service';
declare var FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'fb-login-app';
  isLoggedIn: boolean = false;

  constructor(private _fbService: FbService) { }

  ngOnInit() {
    this._fbService.fbInit();
  }
}
