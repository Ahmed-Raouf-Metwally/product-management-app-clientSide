import { NotfoundComponent } from './components/notfound/notfound.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';



export const routes: Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        loadComponent: () => import('./components/product-list/product-list.component').then(m => m.ProductListComponent)
    },
    {
        path: 'product/:productID',
        loadComponent: () => import('./components/product-details/product-details.component').then(m => m.ProductDetailsComponent)
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },

    // otherwise redirect to home
    {
        path: '**',
        component: NotfoundComponent
    }

];
