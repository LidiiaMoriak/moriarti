import { Component, OnInit } from '@angular/core';
import { AuthService } from '..//./../../services/authentification.service';
import { throttleTime } from 'rxjs/operators';
import { observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  styles: [`
  .cart-link{
    max-height: 50px;
    cursor:pointer;
  }
  .notification-badge {
    position: relative;
    top: -30px;
    left: 17px;
    background-color: red;
    line-height: 100%;
    text-align: center;
    border-radius: 50%;
    min-width: 25px;
    min-height: 25px;
    padding-top: 5px;
    width:10px;
    margin-left:55px;
    margin-top:15px;
}`]
})
export class NavComponent implements OnInit {
  authReady = false
  navItems: any;
  allowNavigation: boolean
  ordersTotal: any;
  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    // this.authService.user$.subscribe(user => {
    //   this.allowNavigation = user !== null ? true : false;
    //   this.authReady = true
    // })
    this.authService.user$.subscribe(user => {
      this.allowNavigation = user !== null ? true : false;
      if (this.allowNavigation) {
        this.ordersTotal = Object.values(user.orderedItems).length > 0 ? 
        Object.values(user.orderedItems).reduce((a: number, b: number): number => { return a + b }) : 0
      } else {
        this.ordersTotal = 0;
      }
      this.authReady = true
    })
  }
  logoutHandler() {
    this.authService.logout();
  }

}