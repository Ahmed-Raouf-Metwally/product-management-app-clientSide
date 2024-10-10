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
    this.httpClient.post('http://localhost:5000/api/v1/products',this.data,{withCredentials: true})
      .subscribe((res: any) => {
        if (res.status == "success") {
          console.log(this.data.get('productImg'));
          
          alert("product added successfully")
          window.location.href = `/products`
          
          
        }
      })
  }

}
