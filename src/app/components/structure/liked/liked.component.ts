import { Component, OnInit } from '@angular/core';
import { AuthService } from '..//./../../services/authentification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {
  loginForm: FormGroup;
  authReady = false
  navItems: any;
  allowNavigation: boolean

  constructor(private fb: FormBuilder,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    this.authService.user$.subscribe(user => {
      this.allowNavigation = user !== null ? true : false;
      this.authReady = true
    })
  }
  loginHandler() {
    const { email, password } = this.loginForm.value
    this.authService.login(email, password);
    event.preventDefault();
  };
}
