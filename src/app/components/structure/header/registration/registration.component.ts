import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../..//./.././../services/authentification.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
registerForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    this.registerForm= this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    })
    this.registerForm.valueChanges.subscribe((form)=>{
      console.log(this.registerForm)
    })
  }

  registerHandler(){
    this.auth.createUser(this.registerForm.value)
  }

}
