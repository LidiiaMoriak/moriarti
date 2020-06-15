import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private itemsCollection: any;
  itemsCatalogue: Observable<any[]>
  user: any
  isLoading:boolean
  orderCollection:any


  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection('users');
    this.itemsCatalogue = afs.collection('products').valueChanges({idField:"itemId"});
  }
  addUserDataToDB(id, user) {
    this.itemsCollection.doc(id).set(user)
  }
  getUserDataFromDB() {

  }
  updateUserDataOnDB(id, user) {
    this.itemsCollection.doc(id).set(user)
    debugger
  }

  getProductFromDB(){
    return this.afs.collection('products').valueChanges( {idField:"itemId"})
  }
  // getOrderState(uid){
  //   return this.afStore.collection('users').doc(`${uid}/orderedItems`).valueChanges()
  // }

  addToCardDB(uid,item,user) {
    let { orderedItems }=user;
    let quantity = 1;
    if (orderedItems && orderedItems.hasOwnProperty(item.itemId)) {
      quantity=orderedItems[item.itemId] +1
    } 
    this.afs.doc(`users/${uid}/`).update({
      [`orderedItems.${item.itemId}`] : quantity
    }).then(res => {
      console.log(res,'Item added to cart')
    })
  }
}