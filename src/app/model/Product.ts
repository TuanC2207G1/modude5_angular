export class Product{
   id!:number;
   name!:String;
   img!:String;
   price!:number;

  constructor(id: number, name: String, img: String, price: number) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
  }
}
