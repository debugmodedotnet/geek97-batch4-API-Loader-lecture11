import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { GlobalInterceptorComponent } from './global-interceptor/global-interceptor.component';
import { GlobalLoaderInterceptorService } from './global-loader-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    GlobalInterceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass: LoaderInterceptorService,multi:true}
    // {provide:HTTP_INTERCEPTORS,useClass:GlobalLoaderInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// login page - logininterceptorservice 
// product page - genericintercprorservice 

