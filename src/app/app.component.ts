import { Component } from '@angular/core';
import { AuthService } from './services/authentification.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'moriarti';
  constructor(
    private authService: AuthService
  ) {

  }
  ngOnInit(): void {
    // this.authService.createUser()
  }
}