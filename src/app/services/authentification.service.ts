import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { DatabaseService } from './database.service'

import { User } from './auth.modules';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>
  userId:string

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private dbs: DatabaseService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          this.userId = user.uid;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    );
    
    this.afAuth.authState.subscribe(console.log)
  }
  createUser(userData) {

    let { name, email, phone, password } = userData
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        //res - повідомлення від сервера про успішне виконання
        // процесу створення юзера
        // після створення юзера додаємо в базу даних документ з інформацією про юзера
        
        this.dbs.addUserDataToDB(res.user.uid, { name, email, phone, password })
        Swal.fire({
          text: "Account created successfully",
          icon: "success",
          position: 'top-top',
          showConfirmButton: false,
          timer: 1500
        });
        // this.router.navigate(['/main'])
      })
      // .then(() => {
      //   this.afAuth.signOut()
      // })
      .catch((err) => {
        alert(err.message)
      });
  }
  login(email, password) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Logined', this.afAuth.authState);
        Swal.fire({
          text: "Logined successfully",
          icon: "success",
          position: 'top-top',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/main'])
      })
      .catch(err => {
        Swal.fire(
          'Authentication Error',
          err.message,
          'error'
        )
        // alert(err.message)
      });
  }
  logout() {
    this.afAuth.signOut().then(res => {
      // console.log('Loguout', this.afAuth.authState)
      this.router.navigate(['/login'])
    });
  }
}