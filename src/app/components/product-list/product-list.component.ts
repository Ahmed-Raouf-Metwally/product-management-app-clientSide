import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  httpClient = inject(HttpClient)
  productsArray:any[] = []

  fetchData() {
    this.httpClient.get('http://127.0.0.1:5000/api/v1/products')
      .subscribe((res: any) => {
        this.productsArray = res.data.products
      })
  }

  ngOnInit(): void {
    this.fetchData()
  }

}



