import { OrderService } from './Services/order.service';
import { ShoppingCartService } from './Services/shopping-cart.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {CustomFormsModule} from 'ngx-custom-validators'
import { CategoryService } from './Services/category.service';
import { AdminAuthGuardService } from './Services/admin-auth-guard.service';
import { UserService } from './Services/user.service';
import { AuthService } from './Services/auth.service';
import { environment } from './../environments/environment';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Navbar/navbar/navbar.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/Register/register/register.component';
import { ServicesComponent } from './Components/services/services/services.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuardService } from './Services/auth-guard.service';
import { AdminProductsComponent } from '../app/Components/Admin/admin-products/admin-products.component';
import { ProductFormComponent } from '../app/Components/Admin/product-form/product-form.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductCardComponent } from './Components/products/product-card/product-card.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { ProductQuantityComponent } from './Components/products/product-quantity/product-quantity.component';
import { CheckOutComponent } from './Components/check-out/check-out.component';
import { ShippingFormComponent } from './Components/shipping-form/shipping-form.component';
import { OrderSuccessComponent } from './Components/order-success/order-success.component';
import { ShoppingSummaryComponent } from './Components/shopping-summary/shopping-summary.component';
import { FaqsComponent } from './components/faqs/faqs.component'
import { MessagingService } from './Services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { MyOrdersComponent } from './Components/my-orders/my-orders.component';
import { MyOrderDetailsComponent } from './Components/my-orders/my-order-details/my-order-details.component';
import { AdminOrdersComponent } from './Components/Admin/admin-orders/admin-orders.component';
import { AdminOrderDetailsComponent } from './Components/Admin/admin-orders/admin-order-details/admin-order-details.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    AboutusComponent,
    AdminProductsComponent,
    ProductFormComponent,
    ProductsComponent,
    ProductCardComponent,
    ShoppingCartComponent,
    ProductQuantityComponent,
    CheckOutComponent,
    ShippingFormComponent,
    OrderSuccessComponent,
    ShoppingSummaryComponent,
    FaqsComponent,
    ProductDetailsComponent,
    MyOrdersComponent,
    MyOrderDetailsComponent,
    AdminOrdersComponent,
    AdminOrderDetailsComponent,
    AdminDashboardComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CustomFormsModule,
    
    
  ],
  providers: [AuthService,AuthGuardService,
    MessagingService,AsyncPipe,
    UserService,AdminAuthGuardService, OrderService,
    ShoppingCartService ,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
