import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  cookieService = inject(CookieService);
  data: any;
  httpClient = inject(HttpClient)
  
  addProduct(e: any) {
    e.preventDefault();
    this.data = new FormData(e.target)

    this.httpClient.post('http://localhost:5000/api/v1/products',
      {
        "productName": this.data.get('productName'),
        "productPrice": this.data.get('productPrice'),
        "productCategory": this.data.get('productCategory'),
        "productSupplier": this.data.get('productSupplier'),
        "productQuantity": this.data.get('productQuantity'),
        "productAvailable": this.data.get('productAvailable'),
        "productRating": this.data.get('productRate'),
        "productDescription": this.data.get('productDesc'),

      },
      {
        withCredentials: true
      }
    )
      .subscribe((res: any) => {
        console.log(res);
        if (res.status == "success") {
          alert("product added successfully")
          window.location.href = `/products`
          
          
        }
      })
  }
}
