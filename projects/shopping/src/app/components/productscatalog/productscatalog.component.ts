import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-productscatalog',
  templateUrl: './productscatalog.component.html',
  styleUrls: ['./productscatalog.component.css']
})
export class ProductscatalogComponent implements OnInit {

 Products:any[] = [];
 AllCount:number = 0;
 ElectronicsCount = 0;
 JeweleryCount:number = 0;
 MensCount:number = 0;
 WomensCount:number = 0;



  LoadProducts(url:string){
    fetch(url)
    .then(response => response.json())
    .then(data=>{
      this.Products = data;
      this.AllCount = data.length;
      this.ElectronicsCount = data.filter(function(product:any){
        return product.category=="electronics";
      }).length;
      this.JeweleryCount = data.filter(function(product:any){
        return product.category=="jewelery";
      }).length;
      this.MensCount = data.filter(function(product:any){
        return product.category=="jewelery";
      }).length;
      this.WomensCount = data.filter(function(product:any){
        return product.category=="jewelery";
      }).length;
    })
  }
  constructor() { }

  ngOnInit(): void {
   this.LoadProducts(`http://fakestoreapi.com/products`);
  }
  FilterChanged(category:string){
    if(category=='all'){
    this.LoadProducts(`http://fakestoreapi.com/products`);
  }else{
    fetch(`http://fakestoreapi.com/products/category/${category}`)
    .then(response => response.json())
    .then(data => {
      this.Products = data;
    })
  }
}
}