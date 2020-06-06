import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminOrderDetailsComponent } from './Components/Admin/admin-orders/admin-order-details/admin-order-details.component';
import { AdminOrdersComponent } from './Components/Admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { FaqsComponent } from './Components/faqs/faqs.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ShippingFormComponent } from './Components/shipping-form/shipping-form.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { ShoppingCartComponent } from '../app/Components/shopping-cart/shopping-cart.component';
import { ProductFormComponent } from '../app/Components/Admin/product-form/product-form.component';
import { AdminProductsComponent } from '../app/Components/Admin/admin-products/admin-products.component';
import { AdminAuthGuardService } from './Services/admin-auth-guard.service';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ServicesComponent } from './Components/services/services/services.component';;
import { RegisterComponent } from './Components/Register/register/register.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './Services/auth-guard.service';
import { MyOrderDetailsComponent } from './Components/my-orders/my-order-details/my-order-details.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'aboutus',component:AboutusComponent, canActivate:[AuthGuardService]},
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'services',component:ServicesComponent},
{path:'AdminProducts',component:AdminProductsComponent,canActivate:[AuthGuardService, AdminAuthGuardService]},
{path:'AdminProducts/new',component:ProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
{path:'AdminProducts/new/:id',component:ProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
{path:'shopping-cart',component:ShoppingCartComponent},
{path:'check-out',component:CheckOutComponent,canActivate:[AuthGuardService]},
{path:'shipping-form',component:ShippingFormComponent},
{path:'order-success/:id',component:OrderSuccessComponent},
{path:'FAQs',component:FaqsComponent},{
  path:'product-details/:id',
  component:ProductDetailsComponent
},{
  path:'my-orders',
  component:MyOrdersComponent
},
{
  path:'my-orders-details/:id',
  component:MyOrderDetailsComponent
},{
  path:'admin-orders',
  component:AdminOrdersComponent,
  canActivate:[AuthGuardService, AdminAuthGuardService]
},
{
  path:'admin-order-details/:id',
  component:AdminOrderDetailsComponent,
  canActivate:[AuthGuardService, AdminAuthGuardService]
},
{
  path:'admin-dashboard',
  component:AdminDashboardComponent,
  canActivate:[AuthGuardService, AdminAuthGuardService]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
