import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product/product.module';
import { MessengerService } from 'src/app/services/messenger.service'

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  @Output() addItemToCartEvent = new EventEmitter()
  @Input() productItem:Product

  constructor(private msg:MessengerService) { }

  ngOnInit(): void {
  }
  handleAddToCart(){
    this.addItemToCartEvent.emit(this.productItem)
    // this.msg.sendMsg(this.productItem,"actionAdd")

  }

}
