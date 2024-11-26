import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{
  constructor() { }
  
  productID = input.required<string>()
  httpClient = inject(HttpClient)
  productDetails: any;
  data: any;


  updateProduct(e: any) {
    e.preventDefault();
    console.log(e.target);
    
    this.data = new FormData(e.target)
    this.httpClient.patch(`https://productmanagement-api-production.up.railway.app/api/v1/products/${this.productID()}`, this.data, { withCredentials: true })
      .subscribe((res: any) => {
        console.log(res);
        if (res.status == "success") {
          alert("product updated successfully")
          window.location.href = `/dashboard`
        }
      })
  }

  getProductDetails() {
    this
      .httpClient
      .get(`https://productmanagement-api-production.up.railway.app/api/v1/products/${this.productID()}`)
      .subscribe(res => {
        this.productDetails = res
      }) 
  }

  ngOnInit(): void {
    this.getProductDetails()
  }
}
