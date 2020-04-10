import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { DetailsComponent } from './details/details.component';
import { StoreComponent } from './store/store.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './Checkout/Checkout.component';
import { CompleteComponent } from './complete/complete.component';
import { HeaderComponent } from './header/header.component';
import { CustomersComponent } from './customers/customers.component';
//import { CompleteComponent } from './Complete/Complete.component';
//import { LoginComponent } from './login/login.component';



const appRoutes:Routes = [
  { path :  "",  component : HomeComponent },
  { path :  "admin",  component : AdminComponent },
  { path :  "customers",  component : CustomersComponent },
  { path :  "Browse/:id",  component : BrowseComponent },
  { path :  "Details/:id",  component : DetailsComponent },
  { path :  "store",  component : StoreComponent },
  { path :  "ShoppingCart",  component : ShoppingCartComponent },
  { path :  "Checkout",  component : CheckoutComponent },
  { path :  "Complete",  component : CompleteComponent },
  /*{ path :  "login",  component : LoginComponent }*/
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,HomeComponent,BrowseComponent,DetailsComponent,StoreComponent,ShoppingCartComponent,
    CheckoutComponent,CompleteComponent, HeaderComponent, CustomersComponent
    //LoginComponent

  ],
  imports: [
    BrowserModule,AppRoutingModule,HttpClientModule,FormsModule,RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
