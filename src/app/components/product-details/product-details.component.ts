import { HttpClient } from '@angular/common/http';
import { Component, inject, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productID = input.required<string>()
  httpClient = inject(HttpClient)

  productDetails: any;

  fetchData() {
    this
      .httpClient
      .get(`https://productmanagement-api-production.up.railway.app/api/v1/products/${this.productID()}`)
      .subscribe(res=>this.productDetails=res)
  }



  ngOnInit(): void {
    this.fetchData()
  }


}
