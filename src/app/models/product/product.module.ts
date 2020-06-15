export class Product {
  id:number;
  name:string;
  description:string;
  price:number;
  imageUrl:string;

  constructor (id, name, description ="", price=0, imageUrl="https://dictionary.cambridge.org/ru/images/thumb/house_noun_002_18270.jpg?version=5.0.94"){
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imageUrl = imageUrl
  }
}
