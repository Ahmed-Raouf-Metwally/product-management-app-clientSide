import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  data: any;
  httpClient = inject(HttpClient)

  register(e: any) {
    e.preventDefault();
    this.data = new FormData(e.target)

    this.httpClient.post('https://productmanagement-api-production.up.railway.app/api/v1/users/register',
      {
        "name": this.data.get('username'),
        "email": this.data.get('email'),
        "password": this.data.get('password'),
        "address": this.data.get('address'),
        "phone": this.data.get('phone')
      }
    )
      .subscribe((res: any) => {
        if (res.status == 200) {
          alert("Welcome")
          this.httpClient.post('https://productmanagement-api-production.up.railway.app/api/v1/users/login',
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
                window.location.href = '/dashboard'
              }

            })
        }
        else {
          console.log(res.msg.errors);
        }

      })
  }
}
