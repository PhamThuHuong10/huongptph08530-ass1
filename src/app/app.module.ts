import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ProductService} from './product.service'
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BannerComponent } from './banner/banner.component';
import { FashionComponent } from './fashion/fashion.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HomeComponent,
    NotFoundComponent,
    BannerComponent,
    FashionComponent,
    HeaderTopComponent,
    ProductComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
