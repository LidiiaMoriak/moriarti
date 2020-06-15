import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authentification.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  user:any
  userForm:FormGroup
  editModeEnabled:boolean

  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private dbs:DatabaseService
  ) { 
    this.userForm = this.fb.group({
      name:["", Validators.required],
      email:["", [Validators.email,Validators.required]],
      phone:["", Validators.required]
    })
  }

  ngOnInit(): void {
    this.user = this.auth.user$.subscribe((user)=>{
      const { name, email, phone } =user
      this.userForm.setValue({
        name: name, 
        email: email,
        phone: phone
      })
   
    })
  }

  switchEditMode(){
    this.editModeEnabled = !this.editModeEnabled

  }

  saveChangesHandler(){
    this.dbs.updateUserDataOnDB(this.auth.userId, this.userForm.value)
    this.editModeEnabled = !this.editModeEnabled
  }
}
