import { Component } from '@angular/core';
import { FbService } from '../fb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  constructor(private _fbService: FbService) { }

  onLogoutClick() {
    this._fbService.fbLogout();
  }
}
