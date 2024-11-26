import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  httpClient = inject(HttpClient)
  productsArray: any[] = []

  fetchData() {
    this.httpClient.get('https://productmanagement-api-production.up.railway.app/api/v1/products')
      .subscribe((res: any) => {
        this.productsArray = res.data.products
      })
  }

  ngOnInit(): void {
    this.fetchData()
  }

  deleteProduct(id: string) {
    this.httpClient.delete(`https://productmanagement-api-production.up.railway.app/api/v1/products/${id}`, {
      withCredentials: true
    })
      .subscribe((res) => {
        this.fetchData()
      })
  }

}
