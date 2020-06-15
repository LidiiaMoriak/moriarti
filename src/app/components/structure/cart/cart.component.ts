import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product/product.module';
import { AuthService } from 'src/app/services/authentification.service';
import { DatabaseService } from 'src/app/services/database.service';
import { zip } from 'rxjs'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  addProductToCartEvent = new EventEmitter()
  @Input() productItem:Product
  cartTotal = 0
  totalItems:any
  isLoading:boolean
  orderedItems:any
  userData:any

  constructor(private auth: AuthService,
    private dbs: DatabaseService) {
      this.isLoading= true
      this.auth.user$.subscribe((res) => {
      let total = 0;
      for (const item in res.orderedItems) {
        total += res.orderedItems[item]
      }
      this.totalItems = total;
    }
    )
   }

  ngOnInit(): void {
    zip(
      this.dbs.itemsCatalogue,
      this.auth.user$
    ).subscribe((data:any)=>{
      const items = data[0];
      this.userData = data[0];
      const { orderedItems } = data[1];
      let userOrderedInfo = new Array();
      for (const itemId in orderedItems){
        userOrderedInfo.push({...items.find(el=>el.itemId===itemId), number:orderedItems[itemId]})
      }
      console.log(userOrderedInfo)
      this.isLoading=false
      this.orderedItems= userOrderedInfo

    })

  }
  addProductToCart(item){
    this.dbs.addToCardDB(this.auth.userId,item, this.userData)
  }
  handleAddProduct(){
    this.addProductToCartEvent.emit(this.productItem)
  }
  removeProductFromCart(product:Product){
  }

}
