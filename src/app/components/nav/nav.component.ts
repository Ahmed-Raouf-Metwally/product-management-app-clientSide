import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalStorageService } from '../../local-storage.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(private localStorageService: LocalStorageService) { }
  
  getUserData() {
    return this.localStorageService.getItem('currentUser')
  }
  cookieService = inject(CookieService);

  logOut() {
    this.localStorageService.removeItem('currentUser')
    this.cookieService.delete('jwt', '/', 'localhost', true);
    alert("loged out succefuly")
    window.location.href = '/login'
  }
}
