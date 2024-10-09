import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cookieService = inject(CookieService);
  data: any;
  httpClient = inject(HttpClient)

  submitForm(e: any) {
    e.preventDefault();
    this.data = new FormData(e.target)

    this.httpClient.post('http://localhost:5000/api/v1/users/login',
      {
        "email": this.data.get('email'),
        "password": this.data.get('password')
      },
      {
        withCredentials: true
      }
    )
      .subscribe((res: any) => {
        if (res.status == 200) {
          alert(res.msg)
          localStorage.setItem('currentUser', JSON.stringify({ email: res.user.email, name: res.user.name, id: res.user._id, IsLoggedin: true }));
          window.location.href = '/home'
        }
        else if (res.status != 200) {
          alert("invalid email or password")
        }

      })
  }
}
