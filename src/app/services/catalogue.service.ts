import { Injectable } from '@angular/core';
import { Product } from "../models/product/product.module";
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  // products:Product[] = [
  //   new Product (1, "Product 1", "This is the product 1 description. The product is really cool", 100, "https://drive.google.com/drive/folders/1CHSMvV0GQO6R2Hb7m0XoOJ7WnAB2-yHf"),
  //   new Product (2, "Product 2", "This is the product 2 description. The product is really cool", 200, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1QcqR36J6Wma9nBEP44FY0GSqVO21gltLea9AE5teVX8HGf3N&usqp=CAU"),
  //   new Product (3, "Product 3", "This is the product 3 description. The product is really cool", 300, "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRL0BIjZEoLpTUcRPjNri50Z74ulrMzb0uJ-SjOmG0dcnlkTN7v&usqp=CAU"),
  //   new Product (4, "Product 4", "This is the product 4 description. The product is really cool", 400, "https://img.resized.co/lovindublin_com/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5sb3ZpbmR1Ymxpbi5jb21cXFwvdXBsb2Fkc1xcXC8yMDIwXFxcLzAxXFxcLzAyMTIwMzIzXFxcL2FzaGJvdXJuZS1ob3VzZS00LnBuZ1wiLFwid2lkdGhcIjoxMjAwLFwiaGVpZ2h0XCI6NjcyLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9kMjZoZTAzOGE3MGRncy5jbG91ZGZyb250Lm5ldFxcXC93cC1jb250ZW50XFxcL3RoZW1lc1xcXC9sb3ZpblxcXC9hc3NldHNcXFwvaW1nXFxcL2NhcmQtZGVmYXVsdC1sb3Zpbi1kdWJsaW4ucG5nXCJ9IiwiaGFzaCI6IjA1NjRiNTk3NDBjZDMxZTE5MmU2MjdmNWJiOTI0NTZmY2RkMjAyMzgifQ==/ashbourne-house-4.png"),
  //   new Product (5, "Product 5", "This is the product 5 description. The product is really cool", 500, "https://www.springfield.co.uk/assets/0002/7817/Forres_Exterior_blue_sky_home_banner_development_banner.jpg"),
  //   new Product (6, "Product 6", "This is the product 6 description. The product is really cool", 600, "https://www.gqmiddleeast.com/public/styles/766_431_landscape/public/images/2019/08/01/Cristiano-Ronaldo-Holiday-House-GQME1.jpg?itok=RXozwOwJ"),
  //   new Product (7, "Product 7", "This is the product 7 description. The product is really cool", 700, "https://www.artzinspired.co.uk/wp-content/uploads/2014/05/House.jpeg")
  //  ]
productDB: any
  constructor( private dbs: DatabaseService) {
    this.productDB=this.dbs.getProductFromDB()
   }

  getProducts(){
    return this.dbs.getProductFromDB()
    
  }
}
