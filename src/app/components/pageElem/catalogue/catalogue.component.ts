import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CatalogueService } from 'src/app/services/catalogue.service';
import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  items: any;
  isLoading: boolean;
  userData: any;
  productList:any
  user:any
  
  constructor(private productService: CatalogueService,
    private authService:AuthService,
    private dbs:DatabaseService ) { 
      this.isLoading = true;
      // this.authService.itemsCatalogue.subscribe((res)=>{
      //   this.items =res
      //   this.isLoading = false
      // });
      this.authService.user$.subscribe((res)=>{
        this.userData =res
      })
    }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res)=>{
      this.productList = res
    })
  }
  addItemToCartHandler(item){
    this.dbs.addToCardDB(this.authService.userId,item, this.userData)
  }
}
