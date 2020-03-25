import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FbService } from '../fb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isError: boolean = false;

  constructor(private _fbService: FbService, private _router: Router) { }

  onLoginClick() {
    this._fbService.fbLogin();
  }
}
