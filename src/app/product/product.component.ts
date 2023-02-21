import {Component, OnInit} from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product = new Product(0,"","",0);
  products: Product[] = [new Product(1, "Lamboghini", "https://luxuo.vn/wp-content/uploads/2021/03/20210303-Supper-Car-8.jpg", 1400000),
    new Product(2, "Bugatti Veyron", "data:image/jpeg;base64,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", 1500000),
    new Product(3, "Lamborghini Aventador", "https://giaxeoto.vn/admin/upload/images/lamborghini-aventador-1603436146.jpg", 16000000)]
  createProduct(): void {
    if(this.product.id==0){
      let index = this.products.length - 1;
      let count = this.products[index].id + 1;
      let productNew = new Product(count, this.product.name, this.product.img, this.product.price);
      this.products.push(productNew);
      alert("thêm thành công!")
    }else {
      let productNew = new Product(this.product.id, this.product.name, this.product.img, this.product.price);
      for(let i=0;i<this.products.length;i++){
        if (this.products[i].id==this.product.id){
          this.products.splice(i,1,productNew);
          alert("sửa thành công!")
        }
      }
    }

  }
  cleanModal(){
    this.product.id=0;
    this.product.name="";
    this.product.img="";
    this.product.price=0;
  }
  showEditModal(id:number){
    for(let i=0;i<this.products.length;i++){
      if (this.products[i].id==id){
        this.product.id=this.products[i].id;
        this.product.name=this.products[i].name;
        this.product.img=this.products[i].img;
        this.product.price=this.products[i].price;
      }
    }
  }
deleteProduct(id:number){
for (let i=0;i<this.products.length;i++){
  if (this.products[i].id==id){
    this.products.splice(i,1);
    alert("xóa thành công!")
  }
}
}

  constructor() {
  }

  ngOnInit(): void {
  }

}
